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
                ns: 'p-offender-do-you-have-contact-with-offender'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-offender-do-you-have-contact-with-offender',
                    resources: {
                        'q-offender-do-you-have-contact-with-offender': {
                            title: 'Do you have contact with the offender?',
                            'title_someone-else': 'Does the victim have contact with the offender?',
                            error: {
                                required: 'Select yes if you have contact with the offender',
                                'required_someone-else':
                                    'Select yes if the victim has contact with the offender'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-offender-do-you-have-contact-with-offender'],
            additionalProperties: false,
            properties: {
                'q-offender-do-you-have-contact-with-offender': {
                    type: 'boolean',
                    title:
                        'l10nt:q-offender-do-you-have-contact-with-offender.title{?lng,context,ns}',
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
                            theme: 'offender'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-offender-do-you-have-contact-with-offender':
                        'l10nt:q-offender-do-you-have-contact-with-offender.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-offender-do-you-have-contact-with-offender': true
                },
                {
                    'q-offender-do-you-have-contact-with-offender': false
                }
            ],
            invalidExamples: [
                {
                    'q-offender-do-you-have-contact-with-offender': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-physical-injuries',
                    cond: [
                        '==',
                        '$.answers.p-offender-do-you-have-contact-with-offender.q-offender-do-you-have-contact-with-offender',
                        false
                    ]
                },
                {
                    target: 'p-offender-describe-contact-with-offender',
                    cond: [
                        '==',
                        '$.answers.p-offender-do-you-have-contact-with-offender.q-offender-do-you-have-contact-with-offender',
                        true
                    ]
                }
            ]
        }
    }
};
