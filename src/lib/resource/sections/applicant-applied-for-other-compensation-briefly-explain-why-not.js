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
                ns: 'p-applicant-applied-for-other-compensation-briefly-explain-why-not'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-applied-for-other-compensation-briefly-explain-why-not',
                    resources: {
                        'q-applicant-applied-for-other-compensation-briefly-explain-why-not': {
                            title:
                                'Tell us why you have not applied for or received any other compensation',
                            'title_someone-else':
                                'Tell us why you have not applied for or received any other compensation on behalf of the victim'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            required: ['q-applicant-applied-for-other-compensation-briefly-explain-why-not'],
            properties: {
                'q-applicant-applied-for-other-compensation-briefly-explain-why-not': {
                    title:
                        'l10nt:q-applicant-applied-for-other-compensation-briefly-explain-why-not.title{?lng,context,ns}',
                    type: 'string',
                    maxLength: 500,
                    errorMessage: {
                        maxLength: 'Explanation must be 500 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        },
                        summary: {
                            title: 'Reasons for not applying for other compensation'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-applied-for-other-compensation-briefly-explain-why-not':
                        'Enter a reason'
                }
            },
            examples: [
                {
                    'q-applicant-applied-for-other-compensation-briefly-explain-why-not': 'blah'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-applied-for-other-compensation-briefly-explain-why-not': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-additional-info'
                }
            ]
        }
    }
};
