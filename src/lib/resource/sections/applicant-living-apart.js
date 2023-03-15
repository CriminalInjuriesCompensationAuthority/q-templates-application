'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-living-apart'],
            additionalProperties: false,
            properties: {
                'q-applicant-living-apart': {
                    type: 'boolean',
                    title:
                        'Did you live apart from the person who died because either of you were ill or infirm?',
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
                            title:
                                'Did you live apart from the person who died because either of you were ill or infirm?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-living-apart':
                        'Select yes if you lived apart from the person who died because either of you were ill or infirm'
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
            ANSWER: [
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
                    target: 'p-applicant-financial-help',
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
