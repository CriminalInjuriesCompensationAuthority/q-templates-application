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
                ns: 'p-applicant-do-you-have-disabling-mental-injury'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-do-you-have-disabling-mental-injury',
                    resources: {
                        'q-applicant-do-you-have-disabling-mental-injury': {
                            description:
                                "This means it's much harder than usual to do things you would normally do, like going to school or university, seeing friends, working or having a relationship.",
                            'description_someone-else':
                                "This means it's much harder than usual to do things they would normally do, like going to school or university, seeing friends, working or having a relationship.",
                            error: {
                                required: 'Select yes if you suffered a disabling mental injury',
                                'required_someone-else':
                                    'Select yes if they suffered a disabling mental injury'
                            },
                            title: 'Do you have a disabling mental injury?',
                            'title_someone-else': 'Do they have a disabling mental injury?'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-do-you-have-disabling-mental-injury'],
            additionalProperties: false,
            properties: {
                'q-applicant-do-you-have-disabling-mental-injury': {
                    type: 'boolean',
                    description:
                        'l10nt:q-applicant-do-you-have-disabling-mental-injury.description{?lng,context,ns}',
                    title:
                        'l10nt:q-applicant-do-you-have-disabling-mental-injury.title{?lng,context,ns}',
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
                            theme: 'mental-health'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-do-you-have-disabling-mental-injury':
                        'l10nt:q-applicant-do-you-have-disabling-mental-injury.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-do-you-have-disabling-mental-injury': true
                },
                {
                    'q-applicant-do-you-have-disabling-mental-injury': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-do-you-have-disabling-mental-injury': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: '#task-list',
                    cond: [
                        '==',
                        '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                        false
                    ]
                },
                {
                    target: 'p-applicant-mental-injury-duration',
                    cond: [
                        '==',
                        '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                        true
                    ]
                }
            ]
        }
    }
};
