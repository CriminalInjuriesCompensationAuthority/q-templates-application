'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data:
                        '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                },
                ns: 'p-applicant-work-details-option'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-work-details-option',
                    resources: {
                        'q-applicant-work-details-option': {
                            title: 'Tell us why you did not have a job at this time',
                            'title_someone-else': 'Tell us why they did not have a job',
                            value: {
                                searching:
                                    'I did not have a job but I had been in regular work for at least 3 years before the crime',
                                'searching_someone-else':
                                    'Did not have a job but they had been in regular work for at least 3 years before the crime'
                            },
                            error: {
                                required: 'Select the option that applies to you',
                                'required_someone-else': 'Select the option that applies to them'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-work-details-option'],
            additionalProperties: false,
            properties: {
                'q-applicant-work-details-option': {
                    title: 'l10nt:q-applicant-work-details-option.title{?lng,context,ns}',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'At school, college or university',
                                const: 'education'
                            },
                            {
                                title:
                                    'l10nt:q-applicant-work-details-option.value.searching{?lng,context,ns}',
                                const: 'searching'
                            },
                            {
                                title: 'Caring for someone',
                                const: 'care'
                            },
                            {
                                title: 'Other',
                                const: 'other'
                            }
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'impact'
                        },
                        summary: {
                            title: 'Reason for not having a job'
                        }
                    }
                },
                'q-applicant-work-details-other': {
                    type: 'string',
                    title: 'Other reason for not having a job',
                    maxLength: 100,
                    errorMessage: {
                        maxLength: 'Other details must be 100 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'impact'
                        }
                    }
                }
            },
            allOf: [
                {
                    $ref: '#/definitions/if-other-then-q-applicant-work-details-other-is-required'
                }
            ],
            definitions: {
                'if-other-then-q-applicant-work-details-other-is-required': {
                    if: {
                        properties: {
                            'q-applicant-work-details-option': {
                                const: 'other'
                            }
                        },
                        required: ['q-applicant-work-details-option']
                    },
                    then: {
                        required: ['q-applicant-work-details-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-work-details-option',
                                'q-applicant-work-details-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-work-details-other': 'Enter other details'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-work-details-option':
                        'l10nt:q-applicant-work-details-option.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-work-details-option': ['care']
                },
                {
                    'q-applicant-work-details-option': ['other'],
                    'q-applicant-work-details-other': 'a string'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-work-details-option': 1234
                },
                {
                    'q-applicant-work-details-option': 'other'
                },
                {
                    'q-applicant-work-details-option': 'other',
                    'q-applicant-work-details-other': 1234
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-affected-daily-capacity',
                    cond: ['|role.all', 'proxy', 'child']

                    // [
                    //     'and',
                    //     [
                    //         '==',
                    //         '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                    //         'someone-else'
                    //     ],
                    //     [
                    //         '==',
                    //         '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                    //         false
                    //     ]
                    // ]
                },
                {
                    target: 'p-applicant-unable-to-work'
                }
            ]
        }
    }
};
