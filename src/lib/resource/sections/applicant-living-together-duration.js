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
                                myself:
                                    'When your partner died, had you been living together continuously for 2 years or more?',
                                proxy:
                                    'When the claimant’s partner died had they been living together continuously for 2 years or more?'
                            },
                            error: {
                                myself:
                                    'Select yes if when your partner died you had been living together continuously for 2 years or more',
                                proxy:
                                    'Select yes if when the claimant’s partner died they were living together continuously for 2 years or more'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-living-together-duration'],
            additionalProperties: false,
            properties: {
                'q-applicant-living-together-duration': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-living-together.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-living-together.title.proxy'
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
                    'q-applicant-living-together-duration': [
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
                    'q-applicant-living-together-duration': true
                },
                {
                    'q-applicant-living-together-duration': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-living-together-duration': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-LIVING-TOGETHER-DURATION': [
                {
                    target: 'p-applicant-financial-help',
                    cond: [
                        '==',
                        '$.answers.p-applicant-living-together-duration.q-applicant-living-together-duration',
                        true
                    ]
                },
                {
                    target: 'p-other-claimants',
                    cond: [
                        '==',
                        '$.answers.p-applicant-living-together-duration.q-applicant-living-together-duration',
                        false
                    ]
                }
            ]
        }
    }
};
