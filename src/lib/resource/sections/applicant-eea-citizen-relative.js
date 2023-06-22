'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-eea-citizen-relative'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-eea-citizen-relative',
                    resources: {
                        'eea-citizen-relative': {
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
                'eea-citizen-relative': {
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
