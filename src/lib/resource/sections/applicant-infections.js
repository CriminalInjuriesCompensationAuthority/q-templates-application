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
                ns: 'p-applicant-infections'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-infections',
                    resources: {
                        'q-applicant-infections': {
                            title: 'Did you get an infection as a result of the crime?',
                            'title_someone-else':
                                'Did they get an infection as a result of the crime?',
                            error: {
                                required:
                                    'Select yes if you got an infection as a result of the crime',
                                'required_someone-else':
                                    'Select yes if they got an infection as a result of the crime'
                            },
                            meta: {
                                summary: {
                                    title: 'Did you get any infections?',
                                    'title_someone-else': 'Did they get any infections?'
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
            required: ['q-applicant-infections'],
            additionalProperties: false,
            properties: {
                'q-applicant-infections': {
                    type: 'string',
                    title: 'l10nt:q-applicant-infections.title{?lng,context,ns}',
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
                            theme: 'injuries'
                        },
                        summary: {
                            title:
                                'l10nt:q-applicant-infections.meta.summary.title{?lng,context,ns}'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-infections':
                        'l10nt:q-applicant-infections.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-infections': 'yes'
                },
                {
                    'q-applicant-infections': 'no'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-infections': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-INFECTIONS': [
                {
                    target: 'p-applicant-select-infections',
                    cond: [
                        'and',
                        ['==', '$.answers.p-applicant-infections.q-applicant-infections', 'yes'],
                        [
                            '==',
                            '$.answers.p-applicant-incident-type.q-applicant-incident-type',
                            'SEX'
                        ]
                    ]
                },
                {
                    target: 'p-applicant-select-non-sa-infections',
                    cond: ['==', '$.answers.p-applicant-infections.q-applicant-infections', 'yes']
                },
                {
                    target: 'p--context-pregnancy',
                    cond: [
                        'and',
                        ['!=', '$.answers.p-applicant-infections.q-applicant-infections', 'yes'],
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                            '>', // is more than ...
                            '-7', // 7 ...
                            'years' // years (before, due to the negative (-7) ...
                            // today's date (no second date given. defaults to today's date).
                        ]
                    ]
                },
                {
                    target: 'p--context-dmi-details'
                }
            ]
        }
    }
};
