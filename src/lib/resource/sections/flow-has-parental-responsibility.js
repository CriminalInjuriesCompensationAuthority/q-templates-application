'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--has-parental-responsibility'],
            additionalProperties: false,
            properties: {
                'q--has-parental-responsibility': {
                    type: 'boolean',
                    // prettier-ignore
                    title: 'Do you have parental responsibility for them?',
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
                            // prettier-ignore
                            title: 'Do you have parental responsibility for them?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    // prettier-ignore
                    'q--has-parental-responsibility': 'Select yes if you have parental responsibility for them'
                }
            },
            examples: [
                {
                    'q--has-parental-responsibility': true
                },
                {
                    'q--has-parental-responsibility': false
                }
            ],
            invalidExamples: [
                {
                    'q--has-parental-responsibility': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-authority'
                }
            ]
        }
    }
};
