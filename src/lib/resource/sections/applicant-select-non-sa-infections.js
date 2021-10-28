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
                    title: 'Select what infection you have',
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'HIV', const: 'phyinj-141'},
                            {title: 'Hepatitis B', const: 'phyinj-142'},
                            {title: 'Hepatitis C', const: 'phyinj-143'}
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        }
                    }
                }
            },
            errorMessage: {
                required: {'q-applicant-physical-injuries': 'Select an infection from the list'}
            },
            examples: [{'q-applicant-physical-injuries': ['phyinj-141']}],
            invalidExamples: [
                {'q-applicant-physical-injuries': 'not-an-array'},
                {'q-applicant-physical-injuries': ['not-a-key']}
            ]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-pregnancy-loss'}]}}
};
