'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-when-will-you-find-out'],
            properties: {
                'q-when-will-you-find-out': {
                    title: "When will you find out if you've been awarded compensation?",
                    type: 'string',
                    description:
                        'Enter an approximate date, for example, December 2020. If you do not know you can say so.',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'When will you find out must be 50 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        },
                        summary: {
                            title: 'When will you find out their decision?'
                        }
                    }
                }
            },
            errorMessage: {required: {'q-when-will-you-find-out': 'Enter an approximate date'}},
            examples: [{'q-when-will-you-find-out': 'blah'}],
            invalidExamples: [{'q-when-will-you-find-out': 12345}]
        }
    },
    route: {on: {ANSWER: [{target: 'p--context-additional-info'}]}}
};
