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
                ns: 'p-applicant-select-treatments'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-select-treatments',
                    resources: {
                        'q-applicant-other-treatment-dmi': {
                            error: {
                                required:
                                    'Enter any other treatment you have received for your mental injury',
                                'required_someone-else':
                                    'Enter any other treatment they have received for their mental injury'
                            },
                            title: 'Other mental health treatment'
                        },
                        'q-applicant-select-treatments-dmi': {
                            description:
                                "Select all that apply and include any treatment you're waiting to get.",
                            'description_someone-else':
                                "Select all that apply and include any treatment they're waiting to get.",
                            error: {
                                required:
                                    'Select any treatments you have received for your mental injury',
                                'required_someone-else':
                                    'Select any treatments they have received for their mental injury'
                            },
                            title: 'What mental health treatments have you had?',
                            'title_someone-else': 'What mental health treatments have they had?'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: ['q-applicant-select-treatments-dmi', 'q-applicant-other-treatment-dmi']
            },
            properties: {
                'q-applicant-select-treatments-dmi': {
                    title: 'l10nt:q-applicant-select-treatments-dmi.title{?lng,context,ns}',
                    description:
                        'l10nt:q-applicant-select-treatments-dmi.description{?lng,context,ns}',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'CBT (cognitive behavioural therapy)',
                                const: 'cbt'
                            },
                            {
                                title: 'EMDR (eye movement desensitisation and reprocessing)',
                                const: 'emdr'
                            },
                            {
                                title: 'Antidepressants',
                                const: 'antidepressants'
                            },
                            {
                                title: 'Counselling',
                                const: 'counselling'
                            },
                            {
                                title: 'Psychotherapy',
                                const: 'psychotherapy'
                            },
                            {
                                title: 'Other',
                                const: 'other'
                            }
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'treatment'
                        }
                    }
                },
                'q-applicant-other-treatment-dmi': {
                    type: 'string',
                    title: 'l10nt:q-applicant-other-treatment-dmi.title{?lng,context,ns}',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other treatments must be 499 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'treatment'
                        }
                    }
                }
            },
            required: ['q-applicant-select-treatments-dmi'],
            allOf: [
                {
                    $ref: '#/definitions/if-other-then-q-applicant-other-treatment-dmi-is-required'
                }
            ],
            definitions: {
                'if-other-then-q-applicant-other-treatment-dmi-is-required': {
                    if: {
                        properties: {
                            'q-applicant-select-treatments-dmi': {
                                contains: {
                                    const: 'other'
                                }
                            }
                        },
                        required: ['q-applicant-select-treatments-dmi']
                    },
                    then: {
                        required: ['q-applicant-other-treatment-dmi'],
                        propertyNames: {
                            enum: [
                                'q-applicant-select-treatments-dmi',
                                'q-applicant-other-treatment-dmi'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-other-treatment-dmi':
                                    'l10nt:q-applicant-other-treatment-dmi.error.required{?lng,context,ns}'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-select-treatments-dmi':
                        'l10nt:q-applicant-select-treatments-dmi.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-select-treatments-dmi': ['cbt']
                },
                {
                    'q-applicant-select-treatments-dmi': ['cbt', 'other'],
                    'q-applicant-other-treatment-dmi': 'some description'
                },
                {
                    'q-applicant-select-treatments-dmi': ['emdr']
                },
                {
                    'q-applicant-select-treatments-dmi': ['emdr', 'other'],
                    'q-applicant-other-treatment-dmi': 'some description'
                },
                {
                    'q-applicant-select-treatments-dmi': ['other'],
                    'q-applicant-other-treatment-dmi': 'some description'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-select-treatments-dmi': {
                        foo: 'bar'
                    }
                },
                {
                    'q-applicant-other-treatment-dmi': 'some description'
                },
                {
                    'q-applicant-select-treatments-dmi': ['other']
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-has-your-treatment-finished-dmi'
                }
            ]
        }
    }
};
