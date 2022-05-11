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
                ns: 'p-offender-describe-contact-with-offender'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-offender-describe-contact-with-offender',
                    resources: {
                        'q-offender-describe-contact-with-offender': {
                            title: 'Describe your contact with the offender',
                            'title_someone-else': 'Describe their contact with the offender',
                            error: {
                                required: 'Describe your contact with the offender',
                                'required_someone-else': 'Describe their contact with the offender'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-offender-describe-contact-with-offender'],
            properties: {
                'q-offender-describe-contact-with-offender': {
                    type: 'string',
                    title: 'l10nt:q-offender-describe-contact-with-offender.title{?lng,context,ns}',
                    description: 'We cannot pay compensation if the offender may benefit from it.',
                    maxLength: 500,
                    errorMessage: {
                        maxLength: 'Description must be 500 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'offender'
                        },
                        summary: {
                            title: 'Brief description'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-offender-describe-contact-with-offender':
                        'l10nt:q-offender-describe-contact-with-offender.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-offender-describe-contact-with-offender': 'Some contact'
                }
            ],
            invalidExamples: [
                {
                    'q-offender-describe-contact-with-offender': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-physical-injuries'
                }
            ]
        }
    }
};
