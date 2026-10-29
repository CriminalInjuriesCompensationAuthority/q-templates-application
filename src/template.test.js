'use strict';

const createTemplateValidator = require('q-template-validator');
const ajvFormatsMobileUk = require('ajv-formats-mobile-uk');
const createRouter = require('q-router');
const template = require('./template');

describe('application template', () => {
    it('should be valid', () => {
        const qTemplateValidator = createTemplateValidator({
            questionnaireTemplate: template,
            customSchemaFormats: {
                'mobile-uk': ajvFormatsMobileUk,
                'global-mobile': '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$'
            }
        });

        const valid = qTemplateValidator.validateTemplate();

        expect(valid).toEqual(true);
    });
});

describe('About the crime personal-details prerequisite', () => {
    const personalDetailsStatusId = 't_applicant_personal-details__completion-status';
    const crimeTaskId = 't_applicant_about-the-crime';
    const crimeStatusId = `${crimeTaskId}__applicability-status`;
    const crimeStartPage = 'p--before-you-continue';
    const delayPage = 'p-applicant-select-reasons-for-the-delay-in-making-your-application';
    const dateOfBirthAnswers = {
        'p-applicant-enter-your-date-of-birth': {
            'q-applicant-enter-your-date-of-birth': '1996-01-01T00:00:00.000Z'
        }
    };

    function createApplicationRouter({
        personalDetailsComplete = false,
        personalDetailsAtFinalPage = false,
        crimeAvailable = false,
        answers = {}
    } = {}) {
        const questionnaire = JSON.parse(JSON.stringify(template));
        questionnaire.answers = JSON.parse(JSON.stringify(answers));
        questionnaire.retractedAnswers = {};
        const {states} = questionnaire.routes;
        questionnaire.routes.states = {
            't_applicant_personal-details': states['t_applicant_personal-details'],
            [personalDetailsStatusId]: states[personalDetailsStatusId],
            [crimeStatusId]: states[crimeStatusId],
            [crimeTaskId]: states[crimeTaskId],
            'task-list': states['task-list']
        };
        if (personalDetailsComplete) {
            const status = questionnaire.routes.states[personalDetailsStatusId];
            status.currentSectionId = 'completed';
            status.progress.push('completed');
        }
        if (personalDetailsAtFinalPage) {
            const task = states['t_applicant_personal-details'];
            task.currentSectionId = 'p-applicant-enter-your-telephone-number';
            task.progress.push(task.currentSectionId);
        }
        if (crimeAvailable) {
            const status = states[crimeStatusId];
            status.currentSectionId = 'applicable';
            status.progress.push('applicable');
        }
        return createRouter(questionnaire);
    }

    function updateStatuses(router) {
        return router.next(undefined, 'cannotStartYet', 'UPDATE__STATUS');
    }

    beforeEach(() => {
        jest.spyOn(Date, 'now').mockReturnValue(Date.parse('2026-10-28T12:00:00.000Z'));
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it.each([{}, dateOfBirthAnswers])(
        'blocks crime access while personal details are incomplete, with answers %j',
        answers => {
            const router = createApplicationRouter({answers});

            expect(router.available(`#${crimeTaskId}`)).toBe(false);
            expect(router.current(crimeStartPage)).toBeUndefined();
            expect(router.next({}, crimeStartPage)).toBeUndefined();

            const result = updateStatuses(router);

            expect(result.value[crimeStatusId]).toBe('cannotStartYet');
            expect(router.available(`#${crimeTaskId}`)).toBe(false);
        }
    );

    it('unlocks crime access when personal details are completed', () => {
        const router = createApplicationRouter({
            personalDetailsAtFinalPage: true,
            answers: dateOfBirthAnswers
        });
        const result = router.next(
            {'q-applicant-enter-your-telephone-number': '07700 900123'},
            'p-applicant-enter-your-telephone-number'
        );

        expect(result.value[personalDetailsStatusId]).toBe('completed');
        expect(result.value[crimeStatusId]).toBe('applicable');
        expect(router.available(`#${crimeTaskId}`)).toBe(true);
        expect(router.current(crimeStartPage).id).toBe(crimeStartPage);
    });

    it('locks crime access again if personal details become incomplete', () => {
        const router = createApplicationRouter({
            crimeAvailable: true,
            answers: dateOfBirthAnswers
        });

        const result = router.next(undefined, 'applicable', 'UPDATE__STATUS');

        expect(result.value[crimeStatusId]).toBe('cannotStartYet');
        expect(router.current(crimeStartPage)).toBeUndefined();
        expect(router.next({}, crimeStartPage)).toBeUndefined();
    });

    it.each([
        ['once', '1996-01-01', '2010-04-01', '2012-08-01', delayPage],
        ['over-a-period-of-time', '1996-01-01', '2010-04-01', '2012-08-01', delayPage],
        [
            'once',
            '1996-01-01',
            '2026-04-01',
            '2026-08-01',
            'p-applicant-where-did-the-crime-happen'
        ],
        [
            'over-a-period-of-time',
            '1996-01-01',
            '2026-04-01',
            '2026-08-01',
            'p-applicant-where-did-the-crime-happen'
        ],
        [
            'once',
            '2007-01-01',
            '2010-04-01',
            '2012-08-01',
            'p-applicant-where-did-the-crime-happen'
        ],
        [
            'over-a-period-of-time',
            '2007-01-01',
            '2010-04-01',
            '2012-08-01',
            'p-applicant-where-did-the-crime-happen'
        ]
    ])(
        'preserves %s routing for DOB %s and crime dates %s to %s',
        (crimeType, dateOfBirth, startDate, stopDate, expectedPage) => {
            const router = createApplicationRouter({
                personalDetailsComplete: true,
                answers: {
                    'p-applicant-enter-your-date-of-birth': {
                        'q-applicant-enter-your-date-of-birth': `${dateOfBirth}T00:00:00.000Z`
                    }
                }
            });
            updateStatuses(router);
            router.next({}, crimeStartPage);
            router.next(
                {'q-applicant-did-the-crime-happen-once-or-over-time': crimeType},
                'p-applicant-did-the-crime-happen-once-or-over-time'
            );

            let result;
            if (crimeType === 'once') {
                result = router.next(
                    {'q-applicant-when-did-the-crime-happen': `${startDate}T00:00:00.000Z`},
                    'p-applicant-when-did-the-crime-happen'
                );
            } else {
                router.next(
                    {'q-applicant-when-did-the-crime-start': `${startDate}T00:00:00.000Z`},
                    'p-applicant-when-did-the-crime-start'
                );
                result = router.next(
                    {'q-applicant-when-did-the-crime-stop': `${stopDate}T00:00:00.000Z`},
                    'p-applicant-when-did-the-crime-stop'
                );
            }

            expect(result.id).toBe(expectedPage);
        }
    );
});
