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
                ns: 'p-applicant-unable-to-work-duration'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-unable-to-work-duration',
                    resources: {
                        'q-applicant-unable-to-work': {
                            title:
                                'Are you incapable of working or do you have very limited capacity to work due to your injuries?',
                            'title_someone-else':
                                'Are they incapable of working or do they have very limited capacity to work due to their injuries?',
                            description:
                                'Very limited capacity means you are not capable of undertaking paid work for more than a few hours each week.',
                            'description_someone-else':
                                'Very limited capacity means they are not capable of undertaking paid work for more than a few hours each week.',
                            meta: {
                                summary: {
                                    title: 'Do you have limited capacity to work?',
                                    'title_someone-else': 'Do they have limited capacity to work?'
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
            required: ['q-applicant-unable-to-work'],
            additionalProperties: false,
            properties: {
                'q-applicant-unable-to-work': {
                    type: 'boolean',
                    title: 'l10nt:q-applicant-unable-to-work.title{?lng,context,ns}',
                    description: 'l10nt:q-applicant-unable-to-work.description{?lng,context,ns}',
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
                            theme: 'impact'
                        },
                        summary: {
                            title:
                                'l10nt:q-applicant-unable-to-work.meta.summary.title{?lng,context,ns}'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-unable-to-work':
                        'Select yes if they are incapable of working or have very limited capacity to work due to their injuries'
                }
            },
            examples: [
                {
                    'q-applicant-unable-to-work': true
                },
                {
                    'q-applicant-unable-to-work': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-unable-to-work': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-unable-to-work-duration',
                    cond: [
                        '==',
                        '$.answers.p-applicant-unable-to-work.q-applicant-unable-to-work',
                        true
                    ]
                },
                {
                    target: 'p-applicant-future-work',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-unable-to-work.q-applicant-unable-to-work',
                            false
                        ],
                        [
                            '==',
                            '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                            'someone-else'
                        ]
                    ]
                },
                {
                    target: 'p--context-treatment'
                }
            ]
        }
    }
};
