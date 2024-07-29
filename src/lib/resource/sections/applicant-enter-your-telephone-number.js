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
                            title: 'Enter your telephone number (optional)',
                            'title_someone-else': 'Enter their telephone number (optional)',
                            description:
                                'We may use this to contact you if we need to clarify something in your application.',
                            'description_someone-else':
                                'We may use this to contact them if we cannot contact you for any reason.'
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
                    minLength: 8,
                    pattern: '^[^a-zA-Z]+$',
                    format: 'global-mobile',
                    errorMessage: {
                        maxLength: 'Enter a mobile phone number between 8 and 20 digits long',
                        minLength: 'Enter a mobile phone number between 8 and 20 digits long',
                        pattern: 'Telephone number must not include alphabetic characters',
                        format: 'Enter a telephone number, like 07700 900 982'
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
                    target: 'p--context-residency-and-nationality'
                }
            ]
        }
    }
};
