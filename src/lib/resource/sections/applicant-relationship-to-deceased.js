'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: ['q-applicant-relationship-to-deceased', 'q-applicant-relationship-other']
            },
            properties: {
                'q-applicant-relationship-to-deceased': {
                    title: 'What is your relationship to the person who died?',
                    type: 'string',
                    description: 'This tells us who you are in relation to the person who died.',
                    oneOf: [
                        {
                            title: 'Parent',
                            const: 'parent'
                        },
                        {
                            title: 'Child',
                            const: 'child'
                        },
                        {
                            title: 'Spouse or civil partner',
                            const: 'spouseOrCivilPartner'
                        },
                        {
                            title: 'Partner',
                            const: 'partner'
                        },
                        {
                            title: 'Former spouse or former civil partner',
                            const: 'formerSpouseOrCivilPartner'
                        },
                        {
                            title: 'Other',
                            const: 'other'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: 'What is your relationship to the person who died?'
                        }
                    }
                },
                'q-applicant-relationship-other': {
                    type: 'string',
                    title: 'Tell us how you are related',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Tell us how you are related must be 50 characters or less.'
                    }
                }
            },
            required: ['q-applicant-relationship-to-deceased'],
            allOf: [
                {
                    $ref: '#/definitions/if-other-then-q-applicant-relationship-other-is-required'
                }
            ],
            definitions: {
                'if-other-then-q-applicant-relationship-other-is-required': {
                    if: {
                        properties: {
                            'q-applicant-relationship-to-deceased': {
                                const: 'other'
                            }
                        },
                        required: ['q-applicant-relationship-to-deceased']
                    },
                    then: {
                        required: ['q-applicant-relationship-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-relationship-to-deceased',
                                'q-applicant-relationship-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-relationship-other': 'Tell us how you are related.'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-relationship-to-deceased':
                        'Select your relationship to the person who died'
                }
            },
            examples: [
                {
                    'q-applicant-relationship-to-deceased': 'parent'
                },
                {
                    'q-applicant-relationship-to-deceased': 'child'
                },
                {
                    'q-applicant-relationship-to-deceased': 'spouseOrCivilPartner'
                },
                {
                    'q-applicant-relationship-to-deceased': 'partner'
                },
                {
                    'q-applicant-relationship-to-deceased': 'formerSpouseOrCivilPartner'
                },
                {
                    'q-applicant-relationship-to-deceased': 'other',
                    'q-applicant-relationship-other': 'testcase'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-relationship-to-deceased': true
                },
                {
                    'q-applicant-relationship-to-deceased': false
                },
                {
                    'q-applicant-relationship-to-deceased': 123
                },
                {
                    'q-applicant-relationship-to-deceased': 'other'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-deceased-details',
                    cond: ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true]
                },
                {
                    target: 'p-applicant-financial-help',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-relationship-to-deceased.q-applicant-relationship-to-deceased',
                            'formerSpouseOrCivilPartner'
                        ],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false]
                    ]
                },
                {
                    target: 'p-applicant-living-together'
                }
            ]
        }
    }
};
