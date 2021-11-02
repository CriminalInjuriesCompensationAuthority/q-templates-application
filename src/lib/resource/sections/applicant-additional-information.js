'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-additional-information'],
            properties: {
                'q-applicant-additional-information': {
                    type: 'string',
                    title: 'Enter additional information',
                    description:
                        'You can provide any extra information, including additional crime reference numbers, details of additional crimes, locations, dates and/or offenders here.',
                    maxLength: 1000,
                    errorMessage: {
                        maxLength: 'Additional information must be 1000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'additional-info'
                        },
                        summary: {
                            title: 'Additional information'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-additional-information':
                        'Describe what additional information you want to provide'
                }
            },
            examples: [{'q-applicant-additional-information': 'Some info'}],
            invalidExamples: [{'q-applicant-additional-information': 12345}]
        }
    },
    route: {on: {ANSWER: [{target: 'p--check-your-answers'}]}}
};
