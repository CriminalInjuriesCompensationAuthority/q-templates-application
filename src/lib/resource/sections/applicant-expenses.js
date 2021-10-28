'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-expenses'],
            additionalProperties: false,
            properties: {
                'q-applicant-expenses': {
                    title: 'What expenses have you had?',
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'Buying or repairing physical aids', const: 'aids'},
                            {title: 'Alterations to my home', const: 'alterations'},
                            {title: 'Home care', const: 'home-care'},
                            {
                                title: "NHS treatment I've paid for",
                                const: 'treatment',
                                description:
                                    'Or treatment from the state health service in another country'
                            },
                            {title: 'I have not had these expenses', const: 'no-expenses'}
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'special-expenses'
                        }
                    }
                }
            },
            allOf: [{$ref: '#/definitions/if-other-then-q-applicant-expenses-max-one-item'}],
            definitions: {
                'if-other-then-q-applicant-expenses-max-one-item': {
                    if: {
                        properties: {'q-applicant-expenses': {contains: {const: 'no-expenses'}}},
                        required: ['q-applicant-expenses']
                    },
                    then: {
                        required: ['q-applicant-expenses'],
                        properties: {
                            'q-applicant-expenses': {
                                maxItems: 1,
                                errorMessage: {
                                    maxItems:
                                        'Select any expenses you’ve had or select ‘I have not had these expenses’'
                                }
                            }
                        }
                    }
                }
            },
            errorMessage: {required: {'q-applicant-expenses': 'Select expenses from the list'}},
            examples: [{'q-applicant-expenses': ['home-care']}],
            invalidExamples: [
                {'q-applicant-expenses': 'not-an-array'},
                {'q-applicant-expenses': ['not-a-key']}
            ]
        }
    },
    route: {on: {ANSWER: [{target: 'p--context-compensation'}]}}
};
