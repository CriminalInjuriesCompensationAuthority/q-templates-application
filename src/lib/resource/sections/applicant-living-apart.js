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
                                    'Did you live apart from the person who died because either of you were ill or infirm?',
                                proxy:
                                    'Did the claimant and the person who died live apart because either of them were ill or infirm?'
                            },
                            error: {
                                myself:
                                    'Select yes if you lived apart from the person who died because either of you were ill or infirm',
                                proxy:
                                    'Select yes if the claimant and the person who died lived apart because either of them were ill or infirm'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-living-apart'],
            additionalProperties: false,
            properties: {
                'q-applicant-living-apart': {
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
                    'q-applicant-living-apart': [
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
                    'q-applicant-living-apart': true
                },
                {
                    'q-applicant-living-apart': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-living-apart': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-LIVING-APART': [
                {
                    target: 'p-applicant-financial-help',
                    cond: [
                        'or',
                        [
                            '==',
                            '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                            'spouseOrCivilPartner'
                        ],
                        [
                            'and',
                            [
                                '==',
                                '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                                'partner'
                            ],
                            [
                                '==',
                                '$.answers.p-applicant-living-apart.q-applicant-living-apart',
                                true
                            ]
                        ]
                    ]
                },
                {
                    target: 'p-other-claimants',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                            'partner'
                        ],
                        ['==', '$.answers.p-applicant-living-apart.q-applicant-living-apart', false]
                    ]
                }
            ]
        }
    }
};
