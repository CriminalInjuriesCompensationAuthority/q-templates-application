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
                ns: 'p-applicant-has-your-treatment-finished-dmi'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-has-your-treatment-finished-dmi',
                    resources: {
                        'q-applicant-has-your-treatment-finished-dmi': {
                            error: {
                                required: 'Select yes if you have finished your treatment',
                                'required_someone-else':
                                    'Select yes if they have finished their treatment'
                            },
                            title: 'Have you finished your treatment?',
                            'title_someone-else': 'Have they finished their treatment?'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-has-your-treatment-finished-dmi'],
            additionalProperties: false,
            properties: {
                'q-applicant-has-your-treatment-finished-dmi': {
                    type: 'boolean',
                    title:
                        'l10nt:q-applicant-has-your-treatment-finished-dmi.title{?lng,context,ns}',
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
                    'q-applicant-has-your-treatment-finished-dmi':
                        'l10nt:q-applicant-has-your-treatment-finished-dmi.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-has-your-treatment-finished-dmi': true
                },
                {
                    'q-applicant-has-your-treatment-finished-dmi': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-has-your-treatment-finished-dmi': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-HAS-YOUR-TREATMENT-FINISHED-DMI': [
                {
                    target: 'p-applicant-are-you-registered-with-gp'
                }
            ]
        }
    }
};
