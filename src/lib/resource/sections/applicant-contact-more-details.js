'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-contact-more-details'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-contact-more-details',
                    resources: {
                        'applicant-contact-more-details': {
                            title: {
                                myself: 'Tell us more about how you were in contact',
                                proxy: 'Tell us more about how they were in contact'
                            },
                            description: {
                                myself: 'This helps us understand your eligibility.',
                                proxy: 'This helps us understand their eligibility.'
                            },
                            error: {
                                myself: 'Tell us more about how you were in contact',
                                proxy: 'Tell us more about how they were in contact.'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-contact-more-details'],
            properties: {
                'q-applicant-contact-more-details': {
                    type: 'string',
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-contact-more-details.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-contact-more-details.title.proxy'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-contact-more-details.description.myself',
                        ['|role.all', 'proxy'],
                        'applicant-contact-more-details.description.proxy'
                    ],
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Description must be 2000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'applicant-contact-more-details.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-contact-more-details.title.proxy'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-contact-more-details': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-contact-more-details.error.myself',
                        ['|role.all', 'proxy'],
                        'applicant-contact-more-details.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-contact-more-details': 'Some description'
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
