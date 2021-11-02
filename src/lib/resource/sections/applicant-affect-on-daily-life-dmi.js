'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            properties: {
                'q-applicant-affect-on-daily-life-dmi': {
                    type: 'string',
                    title: 'Briefly say how the crime has affected your daily life',
                    description:
                        'This helps us understand how the crime has affected you. You can leave this blank, but we may have to ask for more information later.',
                    maxLength: 1000,
                    errorMessage: {maxLength: 'Description must be 1000 characters or less'},
                    meta: {
                        classifications: {
                            theme: 'impact'
                        }
                    }
                }
            },
            examples: [{'q-applicant-affect-on-daily-life-dmi': 'Some description'}],
            invalidExamples: [{'q-applicant-affect-on-daily-life-dmi': 12345}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-treatment',
                    cond: [
                        'or',
                        [
                            '==',
                            '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                            true
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                            true
                        ],
                        ['==', '$.answers.p-applicant-infections.q-applicant-infections', true],
                        ['==', '$.answers.p-applicant-pregnancy.q-applicant-pregnancy', true],
                        [
                            '==',
                            '$.answers.p-applicant-pregnancy-loss.q-applicant-pregnancy-loss',
                            true
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-non-sa-infections.q-applicant-non-sa-infections',
                            true
                        ]
                    ]
                },
                {target: 'p--context-money'}
            ]
        }
    }
};
