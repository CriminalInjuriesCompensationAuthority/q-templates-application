'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-armed-forces'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-armed-forces',
                    resources: {
                        'q-applicant-armed-forces': {
                            title: {
                                applicant:
                                    'Were you a member of the British Armed Forces when the crime happened?',
                                proxy:
                                    'Were they a member of the British Armed Forces when the crime happened?'
                            },
                            error: {
                                applicant:
                                    'Select yes if you were a member of the British Armed Forces when the crime happened',
                                proxy:
                                    'Select yes if they were a member of the British Armed Forces when the crime happened'
                            },
                            meta: {
                                summary: {
                                    title: {
                                        applicant:
                                            'Were you a member of the British Armed Forces when the crime happened?',
                                        proxy:
                                            'Were they a member of the British Armed Forces when the crime happened?'
                                    }
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
            required: ['q-applicant-armed-forces'],
            additionalProperties: false,
            properties: {
                'q-applicant-armed-forces': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-armed-forces.title.proxy',
                        ['|role.all'],
                        'q-applicant-armed-forces.title.applicant'
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
                            theme: 'residency-and-nationality'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'proxy'],
                                'q-applicant-armed-forces.meta.summary.title.proxy',
                                ['|role.all'],
                                'q-applicant-armed-forces.meta.summary.title.applicant'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-armed-forces': [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'q-applicant-armed-forces.error.proxy',
                        ['|role.all'],
                        'q-applicant-armed-forces.error.applicant'
                    ]
                }
            },

            examples: [
                {
                    'q-applicant-armed-forces': true
                },
                {
                    'q-applicant-armed-forces': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-armed-forces': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-task-list',
                    cond: [
                        '==',
                        '$.answers.p-applicant-armed-forces.q-applicant-armed-forces',
                        true
                    ]
                },
                {
                    target: 'p-applicant-armed-forces-relative',
                    cond: [
                        '==',
                        '$.answers.p-applicant-armed-forces.q-applicant-armed-forces',
                        false
                    ]
                }
            ]
        }
    }
};
