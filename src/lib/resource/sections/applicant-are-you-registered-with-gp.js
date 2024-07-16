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
                ns: 'p-applicant-are-you-registered-with-gp'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-are-you-registered-with-gp',
                    resources: {
                        'q-applicant-are-you-registered-with-gp': {
                            error: {
                                required: 'Select yes if you are registered with a GP',
                                'required_someone-else':
                                    'Select yes if they are registered with a GP'
                            },
                            title: 'Are you registered with a GP practice?',
                            'title_someone-else': 'Are they registered with a GP practice?'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-registered-with-gp'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-registered-with-gp': {
                    type: 'boolean',
                    title: 'l10nt:q-applicant-are-you-registered-with-gp.title{?lng,context,ns}',
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
                            theme: 'treatment'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-registered-with-gp':
                        'l10nt:q-applicant-are-you-registered-with-gp.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-are-you-registered-with-gp': true
                },
                {
                    'q-applicant-are-you-registered-with-gp': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-registered-with-gp': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-ARE-YOU-REGISTERED-WITH-GP': [
                {
                    target: 'p-applicant-have-you-seen-a-gp'
                }
            ]
        }
    }
};
