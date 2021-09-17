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
                ns: 'p-applicant-affect-on-daily-life-dmi'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-affect-on-daily-life-dmi',
                    resources: {
                        'q-applicant-affect-on-daily-life-dmi': {
                            description:
                                'This helps us understand how the crime has affected you. You can leave this blank, but we may have to ask for more information later.',
                            'description_someone-else':
                                'This helps us understand how the crime has affected them. You can leave this blank, but we may have to ask for more information later.',
                            title: 'Briefly say how your injuries have affected your daily life',
                            'title_someone-else':
                                'Briefly say how their injuries have affected their daily life'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            properties: {
                'q-applicant-affect-on-daily-life-dmi': {
                    type: 'string',
                    title: 'l10nt:q-applicant-affect-on-daily-life-dmi.title{?lng,context,ns}',
                    description:
                        'l10nt:q-applicant-affect-on-daily-life-dmi.description{?lng,context,ns}',
                    maxLength: 1000,
                    errorMessage: {
                        maxLength: 'Description must be 1000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'impact'
                        }
                    }
                }
            },
            examples: [
                {
                    'q-applicant-affect-on-daily-life-dmi': 'Some description'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-affect-on-daily-life-dmi': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-special-expenses'
                }
            ]
        }
    }
};
