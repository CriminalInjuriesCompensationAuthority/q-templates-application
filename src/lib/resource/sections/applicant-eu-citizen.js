'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-eu-citizen'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-eu-citizen',
                    resources: {
                        'applicant-eu-citizen': {
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
                'applicant-eu-citizen': {
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
