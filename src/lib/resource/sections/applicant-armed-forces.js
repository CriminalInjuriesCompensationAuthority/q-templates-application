'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-armed-forces'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-armed-forces',
                    resources: {
                        'armed-forces': {
                            title: {},
                            description: {}
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'armed-forces': {
                    //prettier-ignore
                    title: [
                    ],
                    description: []
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: ''
                }
            ]
        }
    }
};
