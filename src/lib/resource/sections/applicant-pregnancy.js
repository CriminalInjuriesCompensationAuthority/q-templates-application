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
                ns: 'p-applicant-pregnancy'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-pregnancy',
                    resources: {
                        'q-applicant-pregnancy': {
                            title: 'Did you become pregnant as a result of the crime?',
                            'title_someone-else':
                                'Did they become pregnant as a result of the crime?',
                            error: {
                                required:
                                    'Select yes if you became pregnant as a result of the crime',
                                'required_someone-else':
                                    'Select yes if they became pregnant as a result of the crime'
                            },
                            meta: {
                                summary: {
                                    title: 'Did you become pregnant?',
                                    'title_someone-else': 'Did they become pregnant?'
                                }
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-pregnancy'],
            additionalProperties: false,
            properties: {
                'q-applicant-pregnancy': {
                    type: 'string',
                    title: 'l10nt:q-applicant-pregnancy.title{?lng,context,ns}',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: 'yes'
                        },
                        {
                            title: 'No',
                            const: 'no'
                        },
                        {
                            title: "I'm not sure",
                            const: 'not-sure'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'pregnancy'
                        },
                        summary: {
                            title: 'l10nt:q-applicant-pregnancy.meta.summary.title{?lng,context,ns}'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-pregnancy':
                        'l10nt:q-applicant-pregnancy.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-pregnancy': 'yes'
                },
                {
                    'q-applicant-pregnancy': 'no'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-pregnancy': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-pregnancy-loss'
                }
            ]
        }
    }
};
