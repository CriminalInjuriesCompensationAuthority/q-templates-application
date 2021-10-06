'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            propertyNames: {
                enum: ['q-applicant-select-treatments-dmi', 'q-applicant-other-treatment-dmi']
            },
            properties: {
                'q-applicant-select-treatments-dmi': {
                    title: 'What mental health treatments have you had?',
                    description: "Include any treatment you're waiting to get.",
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'CBT (cognitive behavioural therapy)', const: 'cbt'},
                            {
                                title: 'EMDR (eye movement desensitisation and reprocessing)',
                                const: 'emdr'
                            },
                            {title: 'Antidepressants', const: 'antidepressants'},
                            {title: 'Counselling', const: 'counselling'},
                            {title: 'Psychotherapy', const: 'psychotherapy'},
                            {title: 'Other', const: 'other'}
                        ]
                    }
                },
                'q-applicant-other-treatment-dmi': {
                    type: 'string',
                    title: 'Other mental health treatment',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other mental health treatment must be 499 characters or less'
                    }
                }
            },
            required: ['q-applicant-select-treatments-dmi'],
            allOf: [
                {$ref: '#/definitions/if-other-then-q-applicant-other-treatment-dmi-is-required'}
            ],
            definitions: {
                'if-other-then-q-applicant-other-treatment-dmi-is-required': {
                    if: {
                        properties: {
                            'q-applicant-select-treatments-dmi': {contains: {const: 'other'}}
                        },
                        required: ['q-applicant-select-treatments-dmi']
                    },
                    then: {
                        required: ['q-applicant-other-treatment-dmi'],
                        propertyNames: {
                            enum: [
                                'q-applicant-select-treatments-dmi',
                                'q-applicant-other-treatment-dmi'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-other-treatment-dmi':
                                    'Enter any other treatment you have received for your mental injury'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-select-treatments-dmi':
                        'Select any treatments you have received for your mental injury'
                }
            },
            examples: [
                {'q-applicant-select-treatments-dmi': ['cbt']},
                {
                    'q-applicant-select-treatments-dmi': ['cbt', 'other'],
                    'q-applicant-other-treatment-dmi': 'some description'
                },
                {'q-applicant-select-treatments-dmi': ['emdr']},
                {
                    'q-applicant-select-treatments-dmi': ['emdr', 'other'],
                    'q-applicant-other-treatment-dmi': 'some description'
                },
                {
                    'q-applicant-select-treatments-dmi': ['other'],
                    'q-applicant-other-treatment-dmi': 'some description'
                }
            ],
            invalidExamples: [
                {'q-applicant-select-treatments-dmi': {foo: 'bar'}},
                {'q-applicant-other-treatment-dmi': 'some description'},
                {'q-applicant-select-treatments-dmi': ['other']}
            ]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-has-your-treatment-finished-dmi'}]}}
};
