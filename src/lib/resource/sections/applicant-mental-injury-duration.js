'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-mental-injury-duration'],
            additionalProperties: false,
            properties: {
                'q-applicant-mental-injury-duration': {
                    title: 'Has your mental injury lasted 6 weeks or more?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ],
                    meta: {
                        classifications: {
                            theme: 'mental-health'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-mental-injury-duration':
                        'Select yes if your mental injury has lasted longer than 6 weeks'
                }
            },
            examples: [
                {'q-applicant-mental-injury-duration': true},
                {'q-applicant-mental-injury-duration': false}
            ],
            invalidExamples: [{'q-applicant-mental-injury-duration': 'foo'}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-affect-on-daily-life-dmi'}]}}
};
