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
                ns: 'p-applicant-enter-your-telephone-number'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-enter-your-telephone-number',
                    resources: {
                        'q-applicant-enter-your-telephone-number': {
                            title: 'Enter your telephone number',
                            'title_someone-else': 'Enter their telephone number',
                            description:
                                'We may use this to contact you if we need to clarify something on your application form (optional).',
                            'description_someone-else':
                                'We will only use this to contact this person in the event we cannot contact you via one of your contact preferences you provide (optional).'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'q-applicant-enter-your-telephone-number': {
                    type: 'string',
                    title: 'l10nt:q-applicant-enter-your-telephone-number.title{?lng,context,ns}',
                    description:
                        'l10nt:q-applicant-enter-your-telephone-number.description{?lng,context,ns}',
                    maxLength: 20,
                    pattern: '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$',
                    errorMessage: {
                        maxLength: 'Telephone number must be 20 characters or less',
                        pattern:
                            'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192'
                    },
                    meta: {
                        classifications: {
                            theme: 'applicant-details'
                        },
                        summary: {
                            title: 'Telephone number'
                        }
                    }
                }
            },
            examples: [
                {
                    'q-applicant-enter-your-telephone-number': '01632 960 001'
                },
                {}
            ],
            invalidExamples: [
                {
                    'q-applicant-enter-your-telephone-number': 12345
                }
            ]
        }
    },

    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-rep-details',
                    cond: [
                        '==',
                        '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                        'someone-else'
                    ]
                },
                {
                    target: 'p--before-you-continue'
                }
            ]
        }
    }
};
