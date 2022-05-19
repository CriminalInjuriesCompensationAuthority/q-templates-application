'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-rep-type'],
            additionalProperties: false,
            properties: {
                'q-rep-type': {
                    title: 'In what capacity are you applying on behalf of the victim?',
                    description: 'This tells us who you are in relation to the victim.',
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Solicitor',
                            const: 'SOLS'
                        },
                        {
                            title: 'Claims management company',
                            const: 'CMCO'
                        },
                        {
                            title: 'Support organisation',
                            const: 'SUPP'
                        },
                        {
                            title: 'Social Services',
                            const: 'SSER'
                        },
                        {
                            title: 'Friend or relative',
                            const: 'FRFA'
                        },
                        {
                            title: 'Foster carer',
                            const: 'FC'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'rep-details'
                        },
                        summary: {
                            title: 'Representative type'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-rep-type': 'Select in what capacity you are applying on behalf of the victim'
                }
            },
            examples: [
                {
                    'q-rep-type': 'SOLS'
                }
            ],
            invalidExamples: [
                {
                    'q-rep-type': ['SOLS', 'FC']
                },
                {
                    'q-rep-type': ''
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--before-you-continue'
                }
            ]
        }
    }
};
