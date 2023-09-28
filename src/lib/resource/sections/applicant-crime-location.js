'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-crime-location'],
            properties: {
                'q-applicant-crime-location': {
                    type: 'string',
                    title: 'Tell us more about where the crime happened',
                    maxLength: 140,
                    errorMessage: {
                        maxLength: 'Location must be 140 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'crime'
                        },
                        summary: {
                            title: 'Tell us more about where the crime happened'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-crime-location': 'Enter the location where the crime happened'
                }
            },
            examples: [
                {
                    'q-applicant-crime-location': 'Some description'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-crime-location': null
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--which-police-force-is-investigating-the-crime',
                    cond: [
                        'and',
                        ['|role.all', 'deceased'],
                        [
                            '==',
                            '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                            true
                        ]
                    ]
                },
                {
                    target: 'p--context-offender',
                    cond: [
                        'and',
                        ['|role.all', 'deceased'],
                        [
                            '==',
                            '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                            false
                        ]
                    ]
                },
                {
                    target: 'p-applicant-describe-incident',
                    cond: [
                        '==',
                        '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                        false
                    ]
                },
                {
                    target: 'p--when-was-the-crime-reported-to-police',
                    cond: [
                        '==',
                        '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                        true
                    ]
                }
            ]
        }
    }
};
