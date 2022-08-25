'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--represents-legal-authority'],
            additionalProperties: false,
            properties: {
                'q--represents-legal-authority': {
                    type: 'boolean',
                    title: 'Does someone else have legal authority to act on behalf of them?',
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
                        },
                        summary: {
                            title: 'Does someone else have legal authority?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q--represents-legal-authority':
                        'Select yes if someone else has legal authority to act on behalf of them'
                }
            },
            examples: [
                {
                    'q--represents-legal-authority': true
                },
                {
                    'q--represents-legal-authority': false
                }
            ],
            invalidExamples: [
                {
                    'q--represents-legal-authority': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-authority',
                    cond: [
                        '==',
                        '$.answers.p--represents-legal-authority.q--represents-legal-authority',
                        true
                    ]
                },
                {
                    target: 'p--context-rep-details'
                }
            ]
        }
    }
};
