'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-who-did-you-apply-to'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-who-did-you-apply-to',
                    resources: {
                        'applicant-who-did-you-apply-to': {
                            description: {
                                myself:
                                    'We need to know more about the compensation or damages you may receive, or have already received, and what it was for.',
                                proxy:
                                    'We need to know more about the compensation or damages they may receive, or have already received, and what it was for.'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-who-did-you-apply-to'],
            properties: {
                'q-applicant-who-did-you-apply-to': {
                    title: 'Tell us more about the compensation or damages',
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-who-did-you-apply-to.description.myself',
                        ['|role.all', 'proxy'],
                        'applicant-who-did-you-apply-to.description.proxy'
                    ],
                    type: 'string',
                    maxLength: 500,
                    errorMessage: {
                        maxLength:
                            'More about compensation or damages must be 500 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        },
                        summary: {
                            title: 'Tell us more about the compensation or damages'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-who-did-you-apply-to':
                        'Enter more about the compensation or damages'
                }
            },
            examples: [
                {
                    'q-applicant-who-did-you-apply-to': 'blah'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-who-did-you-apply-to': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-has-a-decision-been-made'
                }
            ]
        }
    }
};
