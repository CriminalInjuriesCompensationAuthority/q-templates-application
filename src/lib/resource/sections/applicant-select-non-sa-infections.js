'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-physical-injuries'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injuries': {
                    title: 'What infection?',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'HIV',
                                const: 'phyinj-141'
                            },
                            {
                                title: 'Hepatitis B',
                                const: 'phyinj-142'
                            },
                            {
                                title: 'Hepatitis C',
                                const: 'phyinj-143'
                            },
                            {
                                title: 'Other infection',
                                const: 'phyinj-149'
                            }
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        }
                    }
                },
                'q-applicant-infections-other': {
                    type: 'string',
                    title: 'Other infection',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other infections must be 499 characters or fewer'
                    }
                }
            },
            allOf: [
                {
                    $ref: '#/definitions/if-other-then-other-textbox-is-required'
                }
            ],
            definitions: {
                'if-other-then-other-textbox-is-required': {
                    if: {
                        properties: {
                            'q-applicant-physical-injuries': {
                                contains: {
                                    const: 'phyinj-149'
                                }
                            }
                        },
                        required: ['q-applicant-physical-injuries']
                    },
                    then: {
                        required: ['q-applicant-infections-other'],
                        propertyNames: {
                            enum: ['q-applicant-physical-injuries', 'q-applicant-infections-other']
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-infections-other': 'Enter other infection'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injuries': 'Select an infection from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injuries': ['phyinj-141']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injuries': 'not-an-array'
                },
                {
                    'q-applicant-physical-injuries': ['not-a-key']
                }
            ]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-pregnancy-loss'}]}}
};
