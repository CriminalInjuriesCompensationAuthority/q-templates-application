'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-pregnancy-loss'],
            additionalProperties: false,
            properties: {
                'q-applicant-pregnancy-loss': {
                    title: 'Did you lose a pregnancy as a result of the crime?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ]
                },
                meta: {
                    classifications: {
                        theme: 'pregnancy'
                    },
                    summary: {
                        title: 'Did you lose a pregnancy?'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-pregnancy-loss':
                        'Select yes if you lost a pregnancy as a result of the crime'
                }
            },
            examples: [{'q-applicant-pregnancy-loss': true}, {'q-applicant-pregnancy-loss': false}],
            invalidExamples: [{'q-applicant-pregnancy-loss': 'foo'}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-are-you-claiming-for-physical-injuries'}]}}
};
