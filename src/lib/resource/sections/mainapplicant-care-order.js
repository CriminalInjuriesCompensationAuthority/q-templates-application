'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-care-order'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-care-order': {
                    type: 'boolean',
                    title:
                        'Is there a care, supervision or other local authority order in place for the victim?',
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
                    'q-mainapplicant-care-order':
                        'Select yes if there is a care, supervision or other local authority order in place for the victim'
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
                    target: 'p--before-you-continue',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-mainapplicant-care-order.q-mainapplicant-care-order',
                            false
                        ],
                        // Main Applicant role
                        [
                            'or',
                            ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', true],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true]
                        ]
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
