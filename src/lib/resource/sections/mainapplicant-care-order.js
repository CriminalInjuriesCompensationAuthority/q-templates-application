'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-mainapplicant-care-order'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-mainapplicant-care-order',
                    resources: {
                        'mainapplicant-care-order': {
                            title: {
                                nonDeceased:
                                    'Is there a care, supervision or other local authority order in place for the victim?',
                                deceased:
                                    'Is there a care, supervision or other local authority order in place for the claimant?'
                            },
                            error: {
                                nonDeceased:
                                    'Select yes if there is a care, supervision or other local authority order in place for the victim',
                                deceased:
                                    'Select yes if there is a care, supervision or other local authority order in place for the claimant'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-care-order'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-care-order': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['|role.all', 'nonDeceased'],
                        'mainapplicant-care-order.title.nonDeceased',
                        ['|role.all', 'deceased'],
                        'mainapplicant-care-order.title.deceased'
                    ],
                    description: 'This includes an interim care order.',
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
                            theme: 'main-applicant-details'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-care-order': [
                        '|l10nt',
                        ['|role.all', 'nonDeceased'],
                        'mainapplicant-care-order.error.nonDeceased',
                        ['|role.all', 'deceased'],
                        'mainapplicant-care-order.error.deceased'
                    ]
                }
            },
            examples: [
                {
                    'q-mainapplicant-care-order': true
                },
                {
                    'q-mainapplicant-care-order': false
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-care-order': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-relationship-to-deceased',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-mainapplicant-care-order.q-mainapplicant-care-order',
                            false
                        ],
                        // Main Applicant role
                        ['|role.all', 'mainapplicant'],
                        ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', true]
                    ]
                },

                {
                    target: 'p--before-you-continue',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-mainapplicant-care-order.q-mainapplicant-care-order',
                            false
                        ],
                        ['|role.all', 'mainapplicant'],
                        ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', false]
                    ]
                },
                {
                    target: 'p--context-rep-details',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-mainapplicant-care-order.q-mainapplicant-care-order',
                            false
                        ],
                        // Rep role
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ]
                    ]
                },
                {
                    target: 'p-mainapplicant-care-order-authority'
                }
            ]
        }
    }
};
