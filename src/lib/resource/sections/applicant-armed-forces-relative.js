'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-armed-forces-relative'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-armed-forces-relative',
                    resources: {
                        'q-applicant-armed-forces-relative': {
                            title: {
                                applicant:
                                    'Were you a close relative of a member of the British armed forces living with them when the crime happened?'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were a close relative of a member of the British armed forces living with them when the crime happened'
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
            required: ['q-applicant-armed-forces-relative'],
            additionalProperties: false,
            properties: {
                'q-applicant-armed-forces-relative': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-armed-forces-relative.title.applicant'
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
                            title: 'q-applicant-armed-forces-relative.meta.summary.title'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-armed-forces-relative': [
                        '|l10nt',
                        ['|role.all'],
                        'q-applicant-armed-forces-relative.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-armed-forces-relative': true
                },
                {
                    'q-applicant-armed-forces-relative': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-armed-forces-relative': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--before-you-continue',
                    cond: [
                        '==',
                        '$.answers.p-applicant-armed-forces-relative.q-applicant-armed-forces-relative',
                        true
                    ]
                },
                {
                    target: 'p-applicant-victim-human-trafficking',
                    cond: [
                        '==',
                        '$.answers.p-applicant-armed-forces-relative.q-applicant-armed-forces-relative',
                        false
                    ]
                }
            ]
        }
    }
};
