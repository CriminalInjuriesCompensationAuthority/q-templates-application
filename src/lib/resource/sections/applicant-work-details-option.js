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
                            title: 'Tell us why you were not employed at this time',
                            'title_someone-else': 'Tell us why they were not employed at this time',
                            value: {
                                searching:
                                    'I did not have a job but I had been in regular work for at least 3 years before the crime',
                                'searching_someone-else': 'Searching for a job'
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
                            theme: 'loss-of-earnings'
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
                            theme: 'loss-of-earnings'
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
                    cond: [
                        '==',
                        '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                        'someone-else'
                    ]
                },
                {
                    target: 'p-applicant-unable-to-work'
                }
            ]
        }
    }
};
