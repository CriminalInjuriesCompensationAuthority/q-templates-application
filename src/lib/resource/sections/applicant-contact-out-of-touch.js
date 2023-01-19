'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-contact-out-of-touch'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-contact-out-of-touch',
                    resources: {
                        'applicant-contact-out-of-touch': {
                            title: {
                                myself: 'Tell us why you were not in contact',
                                proxy: 'Tell us why they were not in contact'
                            },
                            description: {
                                myself: 'This helps us to understand your eligibility.',
                                proxy: 'This helps us to understand their eligibility.'
                            },
                            error: {
                                myself: 'Tell us why you were not in contact',
                                proxy: 'Tell us why they were not in contact'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-contact-out-of-touch'],
            properties: {
                'q-applicant-contact-out-of-touch': {
                    type: 'string',
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-contact-out-of-touch.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-contact-out-of-touch.title.proxy'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-contact-out-of-touch.description.myself',
                        ['|role.all', 'proxy'],
                        'applicant-contact-out-of-touch.description.proxy'
                    ],
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Explanation must be 2000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'applicant-contact-out-of-touch.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-contact-out-of-touch.title.proxy'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-contact-out-of-touch': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-contact-out-of-touch.error.myself',
                        ['|role.all', 'proxy'],
                        'applicant-contact-out-of-touch.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-contact-out-of-touch': 'Some description'
                }
            ],
            invalidExamples: [{}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-financial-help'
                }
            ]
        }
    }
};
