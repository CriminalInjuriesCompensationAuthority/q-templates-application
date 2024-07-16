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
                ns: 'p-applicant-incident-type'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-incident-type',
                    resources: {
                        'q-applicant-incident-type': {
                            error: {
                                required: 'Select what led to your injuries',
                                'required_someone-else': 'Select what led to their injuries'
                            },
                            title: 'What led to your injuries?',
                            'title_someone-else': "What led to the victim's injuries?"
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-incident-type'],
            additionalProperties: false,
            properties: {
                'q-applicant-incident-type': {
                    title: 'l10nt:q-applicant-incident-type.title{?lng,context,ns}',
                    type: 'string',
                    oneOf: [
                        {
                            title: 'Physical assault',
                            const: 'ASST'
                        },
                        {
                            title: 'Assault with a weapon',
                            const: 'WEAP'
                        },
                        {
                            title: 'Sexual assault or abuse',
                            const: 'SEX'
                        },
                        {
                            title: 'Domestic or family violence',
                            const: 'FMLY'
                        },
                        {
                            title: 'Arson',
                            const: 'ARSN'
                        },
                        {
                            title: 'Poisoning',
                            const: 'PSNG'
                        },
                        {
                            title: 'Animal attack',
                            const: 'ANIMAL'
                        },
                        {
                            title: 'Vehicle attack',
                            const: 'VEHICLE'
                        },
                        {
                            title: 'Witnessing an incident',
                            const: 'SECV'
                        },
                        {
                            title: 'Other',
                            const: 'OTHER'
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'crime'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-incident-type':
                        'l10nt:q-applicant-incident-type.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-incident-type': 'ANIMAL'
                }
            ],
            invalidExamples: [
                {},
                {
                    'q-applicant-incident-type': 'ABCD'
                },
                {
                    'q-applicant-incident-type': ''
                },
                {
                    'q-applicant-incident-type': 123
                },
                {
                    'q-applicant-incident-type': []
                },
                {
                    'q-applicant-incident-type': true
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-INCIDENT-TYPE': [
                {
                    target: 'p-applicant-did-the-crime-happen-once-or-over-time'
                }
            ]
        }
    }
};
