'use strict';

const Ajv = require('ajv');
const AjvErrors = require('ajv-errors');
const jp = require('jsonpath');
const createQRouter = require('q-router');
const {getSection} = require('./getSection');

const ajv = new Ajv({
    allErrors: true,
    jsonPointers: true,
    format: 'full',
    coerceTypes: true
});

AjvErrors(ajv);

// ajv.addFormat('mobile-uk', ajvFormatsMobileUk);

function pageContainsAnsweredQuestions(questionnaire, pageId) {
    return questionnaire.answers[pageId] !== undefined;
}

function answerQuestion(questionnaire, questionId, answer) {
    const pageId = questionnaire.currentSectionId;
    const section = questionnaire.sections[pageId];
    const node = jp.query(
        section,
        `$..properties["${questionId}"].oneOf[?(@.title == "${answer}")]`
    );

    const answerObj = {};
    if (node.length !== 0) {
        answerObj[questionId] = node[0].const;
    } else {
        answerObj[questionId] = answer;
    }

    const jsonAnswer = JSON.parse(JSON.stringify(answerObj));
    const questionnaireDefinition = questionnaire;
    const qRouter = createQRouter(questionnaireDefinition);
    const sectionDetails = getSection(pageId, qRouter);

    const validate = ajv.compile(section);
    // The AJV validate function coerces the answers and mutates the answers object
    const valid = validate(jsonAnswer);
    const coercedAnswers = jsonAnswer;

    if (!valid) {
        const validationError = new Error({
            name: 'JSONSchemaValidationError',
            info: {
                schema: sectionDetails,
                answers: answerObj,
                coercedAnswers,
                schemaErrors: validate.errors
            }
        });

        throw validationError;
    }

    let answeredQuestionnaire;
    if (sectionDetails.id === 'system') {
        const currentSection = qRouter.current();
        currentSection.context.answers.system = coercedAnswers;
        answeredQuestionnaire = currentSection.context;
        /* eslint-disable no-param-reassign */
        questionnaire = answeredQuestionnaire;
        /* eslint-enable no-param-reassign */
        return;
    }

    let answers;
    if (pageContainsAnsweredQuestions(questionnaire, pageId)) {
        answers = Object.assign(questionnaire.answers[pageId], coercedAnswers);
    } else {
        answers = coercedAnswers;
    }

    /* eslint no-param-reassign: ["error", { "props": false }] */
    questionnaire.answers[pageId] = answers;
    console.log(questionnaire.answers[pageId]);
}
exports.answerQuestion = answerQuestion;
