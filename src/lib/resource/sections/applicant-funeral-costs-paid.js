'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-funeral-costs-paid'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-funeral-costs-paid',
                    resources: {
                        'applicant-funeral-costs-paid': {
                            title: {
                                myself: 'Are you paying for any of the funeral costs?',
                                proxy: 'Is the claimant paying for any of the funeral costs'
                            },
                            error: {
                                myself: 'Select yes if you are paying for any of the funeral costs',
                                proxy:
                                    'Select yes if the claimant is paying for any of the funeral costs'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-funeral-costs-paid'],
            additionalProperties: false,
            properties: {
                'q-applicant-funeral-costs-paid': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-funeral-costs-paid.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-funeral-costs-paid.title.proxy'
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
                            theme: 'funeral-costs'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'applicant-funeral-costs-paid.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-funeral-costs-paid.title.proxy'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-funeral-costs-paid': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-funeral-costs-paid.error.myself',
                        ['|role.all', 'proxy'],
                        'applicant-funeral-costs-paid.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-funeral-costs-paid': true
                },
                {
                    'q-applicant-funeral-costs-paid': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-funeral-costs-paid': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-funeral-costs-other-contributor'
                }
            ]
        }
    }
};
