'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-living-together'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-living-together',
                    resources: {
                        'applicant-living-together': {
                            title: {
                                myself: 'When the person died, how often were you in contact?',
                                proxy:
                                    'When the person died, how often were they in contact with the claimant?'
                            },
                            error: {
                                myself: 'Select how often you were in contact',
                                proxy: 'Select how often they were in contact'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-contact-with-deceased'],
            additionalProperties: false,
            properties: {
                'q-applicant-contact-with-deceased': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-living-together.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-living-together.title.proxy'
                    ],
                    type: 'string',
                    oneOf: [
                        {
                            title: 'We were in regular contact',
                            const: 'regular'
                        },
                        {
                            title: 'We were in contact occasionally',
                            const: 'occasionally'
                        },
                        {
                            title: 'We were not in contact',
                            const: 'never'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'applicant-living-together.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-living-together.title.proxy'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-contact-with-deceased': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-living-together.error.myself',
                        ['|role.all', 'proxy'],
                        'applicant-living-together.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-contact-with-deceased': 'regular'
                },
                {
                    'q-applicant-contact-with-deceased': 'occasionally'
                },
                {
                    'q-applicant-contact-with-deceased': 'never'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-contact-with-deceased': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-financial-help',
                    cond: [
                        '==',
                        '$.answers.p-applicant-contact-with-deceased.q-applicant-contact-with-deceased',
                        'regular'
                    ]
                },
                {
                    target: 'p-applicant-contact-more-details',
                    cond: [
                        '==',
                        '$.answers.p-applicant-contact-with-deceased.q-applicant-contact-with-deceased',
                        'occasionally'
                    ]
                },
                {
                    target: 'p-applicant-contact-out-of-touch',
                    cond: [
                        '==',
                        '$.answers.p-applicant-contact-with-deceased.q-applicant-contact-with-deceased',
                        'never'
                    ]
                }
            ]
        }
    }
};
