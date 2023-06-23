'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-applied-for-asylum'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-applied-for-asylum',
                    resources: {
                        'q-applicant-applied-for-asylum': {
                            title: {
                                applicant: 'Have you applied for asylum in the UK?'
                            },
                            error: {
                                applicant: 'Select yes if you have applied for asylum in the UK'
                            },
                            meta: {
                                summary: {
                                    title: 'About your residency and nationality'
                                }
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-applied-for-asylum'],
            additionalProperties: false,
            properties: {
                'q-applicant-applied-for-asylum': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-applied-for-asylum.title.applicant'
                    ],
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'residency_and_nationality'
                        },
                        summary: {
                            title: 'q-applicant-applied-for-asylum.meta.summary.title'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-applied-for-asylum': [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-applied-for-asylum.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-applied-for-asylum': true
                },
                {
                    'q-applicant-applied-for-asylum': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-applied-for-asylum': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [{target: 'p--before-you-continue'}]
        }
    }
};
