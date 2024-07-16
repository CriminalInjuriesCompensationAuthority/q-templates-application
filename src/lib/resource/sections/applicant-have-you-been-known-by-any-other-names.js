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
                ns: 'p-applicant-have-you-been-known-by-any-other-names'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-have-you-been-known-by-any-other-names',
                    resources: {
                        'q-applicant-have-you-been-known-by-any-other-names': {
                            title: 'Have you ever been known by any other names?',
                            'title_someone-else': 'Have they ever been known by any other names?',
                            error: {
                                required:
                                    'Select yes if you have ever been known by any other names',
                                'required_someone-else':
                                    'Select yes if they have ever been known by any other names'
                            },
                            description: {
                                applicant:
                                    'We need to know any other names you have used, for example, your maiden name.',
                                proxy:
                                    'We need to know any other names they have used, for example, their maiden name.'
                            }
                        },
                        'q-applicant-what-other-names-have-you-used': {
                            title: 'What other names have you been known by?',
                            'title_someone-else': 'What other names have they been known by?',
                            error: {
                                required: "Enter the other names you've been known by",
                                maxLength:
                                    "Other names you've been known by must be 50 characters or less",
                                'required_someone-else':
                                    "Enter the other names they've been known by",
                                'maxLength_someone-else':
                                    "Other names they've been known by must be 50 characters or less"
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: [
                    'q-applicant-have-you-been-known-by-any-other-names',
                    'q-applicant-what-other-names-have-you-used'
                ]
            },
            required: ['q-applicant-have-you-been-known-by-any-other-names'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-been-known-by-any-other-names': {
                    type: 'boolean',
                    title:
                        'l10nt:q-applicant-have-you-been-known-by-any-other-names.title{?lng,context,ns}',
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'q-applicant-have-you-been-known-by-any-other-names.description.applicant',
                        ['|role.all', 'proxy'],
                        'q-applicant-have-you-been-known-by-any-other-names.description.proxy'
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
                            theme: 'applicant-details'
                        },
                        summary: {
                            title:
                                'l10nt:q-applicant-have-you-been-known-by-any-other-names.title{?lng,context,ns}'
                        }
                    }
                },
                'q-applicant-what-other-names-have-you-used': {
                    type: 'string',
                    title:
                        'l10nt:q-applicant-what-other-names-have-you-used.title{?lng,context,ns}',
                    maxLength: 50,
                    errorMessage: {
                        maxLength:
                            'l10nt:q-applicant-what-other-names-have-you-used.error.maxLength{?lng,context,ns}'
                    },
                    meta: {
                        classifications: {
                            theme: 'applicant-details'
                        }
                    }
                }
            },
            allOf: [
                {
                    $ref: '#/definitions/if-yes-then-q-what-other-names-is-required'
                }
            ],
            definitions: {
                'if-yes-then-q-what-other-names-is-required': {
                    if: {
                        properties: {
                            'q-applicant-have-you-been-known-by-any-other-names': {
                                const: true
                            }
                        },
                        required: ['q-applicant-have-you-been-known-by-any-other-names']
                    },
                    then: {
                        required: ['q-applicant-what-other-names-have-you-used'],
                        propertyNames: {
                            enum: [
                                'q-applicant-have-you-been-known-by-any-other-names',
                                'q-applicant-what-other-names-have-you-used'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-what-other-names-have-you-used':
                                    'l10nt:q-applicant-what-other-names-have-you-used.error.required{?lng,context,ns}'
                            }
                        }
                    },
                    else: {
                        required: ['q-applicant-have-you-been-known-by-any-other-names']
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-been-known-by-any-other-names':
                        'l10nt:q-applicant-have-you-been-known-by-any-other-names.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-have-you-been-known-by-any-other-names': true,
                    'q-applicant-what-other-names-have-you-used': 'Mr Biz Baz'
                },
                {
                    'q-applicant-have-you-been-known-by-any-other-names': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-have-you-been-known-by-any-other-names': 'foo'
                },
                {
                    'q-applicant-what-other-names-have-you-used': 'Mr Biz Baz'
                },
                {
                    'q-applicant-have-you-been-known-by-any-other-names': true,
                    'q-applicant-what-other-names-have-you-used': null
                }
            ],
            options: {
                transformOrder: [
                    'q-applicant-what-other-names-have-you-used',
                    'q-applicant-have-you-been-known-by-any-other-names'
                ],
                outputOrder: ['q-applicant-have-you-been-known-by-any-other-names'],
                properties: {
                    'q-applicant-have-you-been-known-by-any-other-names': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-radios'
                            },
                            conditionalComponentMap: [
                                {
                                    itemValue: true,
                                    componentIds: ['q-applicant-what-other-names-have-you-used']
                                }
                            ]
                        }
                    },
                    'q-applicant-what-other-names-have-you-used': {
                        options: {
                            macroOptions: {
                                classes: 'govuk-input--width-20'
                            }
                        }
                    }
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-enter-your-date-of-birth'
                }
            ]
        }
    }
};
