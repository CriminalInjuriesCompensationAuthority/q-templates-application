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
                ns: 'p-applicant-pregnancy-loss'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-pregnancy-loss',
                    resources: {
                        'q-applicant-pregnancy-loss': {
                            title: 'Did you lose a pregnancy as a result of the crime?',
                            'title_someone-else':
                                'Did they lose a pregnancy as a result of the crime?',
                            error: {
                                required:
                                    'Select yes if you lost a pregnancy as a result of the crime',
                                'required_someone-else':
                                    'Select yes if they lost a pregnancy as a result of the crime'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-pregnancy-loss'],
            additionalProperties: false,
            properties: {
                'q-applicant-pregnancy-loss': {
                    type: 'string',
                    title: 'l10nt:q-applicant-pregnancy-loss.title{?lng,context,ns}',
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
                            title: 'Did you lose a pregnancy?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-pregnancy-loss':
                        'l10nt:q-applicant-pregnancy-loss.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-pregnancy-loss': 'yes'
                },
                {
                    'q-applicant-pregnancy-loss': 'no'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-pregnancy-loss': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-dmi-details'
                }
            ]
        }
    }
};
