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
                ns: 'p-applicant-treatment-for-physical-injuries'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-treatment-for-physical-injuries',
                    resources: {
                        'q-applicant-treatment-for-physical-injuries': {
                            error: {
                                required:
                                    'Describe what treatment you have received for your physical injuries',
                                'required_someone-else':
                                    'Describe what treatment they have received for their physical injuries'
                            },
                            title: 'What treatment are you receiving for your physical injuries?',
                            'title_someone-else':
                                'What treatment are they receiving for their physical injuries?'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-treatment-for-physical-injuries'],
            properties: {
                'q-applicant-treatment-for-physical-injuries': {
                    type: 'string',
                    title:
                        'l10nt:q-applicant-treatment-for-physical-injuries.title{?lng,context,ns}',
                    maxLength: 500,
                    errorMessage: {
                        maxLength: 'Description must be 500 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'treatment'
                        },
                        summary: {
                            title: 'Treatment for physical injuries'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-treatment-for-physical-injuries':
                        'l10nt:q-applicant-treatment-for-physical-injuries.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-treatment-for-physical-injuries': 'Some treatment'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-treatment-for-physical-injuries': 12345
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-TREATMENT-FOR-PHYSICAL-INJURIES': [
                {
                    target: 'p-applicant-select-treatments',
                    cond: [
                        '==',
                        '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                        true
                    ]
                },
                {
                    target: 'p-applicant-has-your-treatment-finished-dmi'
                }
            ]
        }
    }
};
