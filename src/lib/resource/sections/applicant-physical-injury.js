'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-physical-injury'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury': {
                    title: 'What was injured?',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'Head, face or neck', const: 'upper'},
                            {title: 'Torso', const: 'torso'},
                            {title: 'Arms or hands', const: 'arms'},
                            {title: 'Legs or feet', const: 'legs'}
                        ]
                    }
                }
            },
            errorMessage: {
                required: {'q-applicant-physical-injury': 'Select an injury from the list'}
            },
            examples: [
                {'q-applicant-physical-injury': ['legs']},
                {'q-applicant-physical-injury': ['arms']},
                {'q-applicant-physical-injury': ['arms', 'legs']},
                {'q-applicant-physical-injury': ['torso']},
                {'q-applicant-physical-injury': ['torso', 'legs']},
                {'q-applicant-physical-injury': ['torso', 'arms']},
                {'q-applicant-physical-injury': ['upper']},
                {'q-applicant-physical-injury': ['upper', 'legs']},
                {'q-applicant-physical-injury': ['upper', 'arms']},
                {'q-applicant-physical-injury': ['upper', 'torso']}
            ],
            invalidExamples: [
                {'q-applicant-physical-injury': ['not-a-key']},
                {'q-applicant-physical-injury': 'not-an-array'}
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-physical-injury-upper',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'upper'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'torso'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'arms'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'legs'
                    ]
                },
                {target: 'p--context-dmi-details'}
            ]
        }
    }
};
