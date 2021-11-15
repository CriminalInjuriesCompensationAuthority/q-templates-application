'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data:
                        '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                },
                ns: 'p-applicant-non-sa-infections'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-non-sa-infections',
                    resources: {
                        'q-applicant-non-sa-infections': {
                            title: 'Do you have HIV or hepatitis as a result of the crime?',
                            'title_someone-else':
                                'Do they have HIV or hepatitis as a result of the crime?',
                            error: {
                                required:
                                    'Select yes if you have HIV or hepatitis as a result of the crime',
                                'required_someone-else':
                                    'Select yes if they have HIV or hepatitis as a result of the crime'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-non-sa-infections'],
            additionalProperties: false,
            properties: {
                'q-applicant-non-sa-infections': {
                    type: 'boolean',
                    title: 'l10nt:q-applicant-non-sa-infections.title{?lng,context,ns}',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        },
                        summary: {
                            title: 'Did you get any infections?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-non-sa-infections':
                        'l10nt:q-applicant-non-sa-infections.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-non-sa-infections': true
                },
                {
                    'q-applicant-non-sa-infections': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-non-sa-infections': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER:  [
                {
                    "target": "p-applicant-pregnancy-loss"
                }
            ]
        }
    }
};
