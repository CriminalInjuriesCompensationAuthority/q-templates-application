'use strict';
const assert = require('assert');
const service = require('../utils/dcsRequestService')();

async function getCurrentSectionInformation(testObject) {
    const opts = {
        url: `${testObject.DCS_URL}/api/questionnaires/${testObject.questionnaireId}/progress-entries?filter[position]=current`,
        headers: {
            Authorization: `Bearer ${testObject.DCS_JWT}`,
            'On-Behalf-Of': testObject.ownerId,
            'Dcs-Api-Version': '2023-05-17'
        }
    };
    const response = await service.get(opts);
    return response.body;
}

async function createsApplication(testObject) {
    const opts = {
        url: `${testObject.DCS_URL}/api/questionnaires`,
        headers: {
            Authorization: `Bearer ${testObject.DCS_JWT}`,
            'On-Behalf-Of': testObject.ownerId,
            'Dcs-Api-Version': '2023-05-17'
        },
        json: {
            data: {
                type: 'questionnaires',
                attributes: {
                    templateName: 'sexual-assault',
                    owner: {
                        id: testObject.ownerId,
                        isAuthenticated: testObject.isAuthenticated
                    },
                    origin: {
                        channel: testObject.origin
                    },
                    external: {
                        id: testObject.externalId
                    }
                }
            }
        }
    };
    const response = await service.post(opts);
    testObject.questionnaireId = response.body.data.id;
    assert.ok(response.body.data.attributes.type === 'apply-for-compensation');
}

async function isOnPage(testObject, pageId) {
    const currentSectionInformation = await getCurrentSectionInformation(testObject);
    const currentSectionId = currentSectionInformation.data[0].id;
    testObject.currentSectionId = currentSectionId;
    assert.ok(currentSectionId === pageId);
}

async function answersQuestion(testObject, answer, questionId) {
    const currentSectionInformation = await getCurrentSectionInformation(testObject);
    const schemaExpectsArray =
        currentSectionInformation.included.filter(item => item.type === 'sections')[0].attributes
            ?.properties?.[questionId]?.type === 'array';

    if (schemaExpectsArray) {
        if (testObject.answers && questionId in testObject.answers) {
            testObject.answers[questionId].push(answer);
        } else {
            testObject.answers[questionId] = [answer];
        }
    } else {
        testObject.answers[questionId] = answer;
    }
    assert.ok(questionId in testObject.answers);
}

async function continues(testObject) {
    const currentSectionInformation = await getCurrentSectionInformation(testObject);
    const currentSectionId = currentSectionInformation.data[0].id;
    let answersToSubmit = {...testObject.answers};
    const previousAnswers = currentSectionInformation.included.filter(
        item => item.type === 'answers'
    );

    if (previousAnswers.length > 0 && Object.keys(testObject.answers).length === 0) {
        // resubmit previously submitted answers
        answersToSubmit = previousAnswers[0].attributes;
    }
    const opts = {
        url: `${testObject.DCS_URL}/api/questionnaires/${testObject.questionnaireId}/sections/${currentSectionId}/answers`,
        headers: {
            Authorization: `Bearer ${testObject.DCS_JWT}`,
            'On-Behalf-Of': testObject.ownerId,
            'Dcs-Api-Version': '2023-05-17'
        },
        json: {
            data: {
                type: 'answers',
                attributes: answersToSubmit
            }
        }
    };
    const response = await service.post(opts);
    testObject.answers = {};

    const nextSectionInformation = await getCurrentSectionInformation(testObject);
    const nextSectionId = nextSectionInformation.data[0].id;
    testObject.currentSectionId = nextSectionId;

    // ############ stateTracker
    if (testObject.stateTracker) {
        testObject.stateTracker.stateTargetIds.get(currentSectionId).delete(nextSectionId);
    }

    assert.ok(response.statusCode === 201);
}

function advances(testObject) {
    return continues(testObject);
}

async function selectsPreviousPage(testObject) {
    const currentSectionInformation = await getCurrentSectionInformation(testObject);
    const currentSectionId = currentSectionInformation.data[0].id;
    const opts = {
        url: `${testObject.DCS_URL}/api/questionnaires/${testObject.questionnaireId}/progress-entries?page[before]=${currentSectionId}`,
        headers: {
            Authorization: `Bearer ${testObject.DCS_JWT}`,
            'On-Behalf-Of': testObject.ownerId,
            'Dcs-Api-Version': '2023-05-17'
        }
    };
    const response = await service.get(opts);
    testObject.currentSectionId = response.body.data[0].id;
    testObject.answers = {};
    assert.ok(response.statusCode === 200);
}

async function completedApplication(testObject) {
    const opts = {
        url: `${testObject.DCS_URL}/api/questionnaires/${testObject.questionnaireId}/submissions`,
        headers: {
            Authorization: `Bearer ${testObject.DCS_JWT}`,
            'On-Behalf-Of': testObject.ownerId,
            'Dcs-Api-Version': '2023-05-17'
        },
        json: {
            data: {
                type: 'submissions',
                attributes: {
                    questionnaireId: testObject.questionnaireId
                }
            }
        }
    };
    const response = await service.post(opts);

    // Applications can't be submitted on local host
    if (testObject.DCS_URL.includes('localhost')) {
        return 'ok';
    } else {
        assert.ok(response.statusCode === 201);
    }
}

module.exports = {
    createsApplication,
    isOnPage,
    answersQuestion,
    continues,
    advances,
    selectsPreviousPage,
    completedApplication
};
