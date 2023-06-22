'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-eu-citizen-relative'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-eu-citizen-relative',
                    resources: {
                        'eu-citizen-relative': {
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
                'eu-citizen-relative': {
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
