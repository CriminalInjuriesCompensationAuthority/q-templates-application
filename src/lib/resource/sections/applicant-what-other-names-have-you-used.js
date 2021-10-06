'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-what-other-names-have-you-used'],
            additionalProperties: false,
            properties: {
                'q-applicant-what-other-names-have-you-used': {
                    type: 'string',
                    title: 'What other names have you used?',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Other names you have used must be 50 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-what-other-names-have-you-used':
                        'Enter the other names you have used'
                }
            },
            examples: [{'q-applicant-what-other-names-have-you-used': 'Mr Biz Baz'}],
            invalidExamples: [{'q-applicant-what-other-names-have-you-used': 12345}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-enter-your-date-of-birth'}]}}
};
