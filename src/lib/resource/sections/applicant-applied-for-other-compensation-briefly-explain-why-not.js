'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-applied-for-other-compensation-briefly-explain-why-not'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-applied-for-other-compensation-briefly-explain-why-not',
                    resources: {
                        'applicant-applied-for-other-compensation-briefly-explain-why-not': {
                            title: {
                                myself:
                                    'Tell us why you have not applied for or received any other compensation or damages',
                                proxy:
                                    'Tell us why no application has been made or payment received for any other form of compensation or damages'
                            }
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
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-applied-for-other-compensation-briefly-explain-why-not.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-applied-for-other-compensation-briefly-explain-why-not.title.proxy'
                    ],
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
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'applicant-applied-for-other-compensation-briefly-explain-why-not.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-applied-for-other-compensation-briefly-explain-why-not.title.proxy'
                            ]
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
            'ANSWER__P-APPLICANT-APPLIED-FOR-OTHER-COMPENSATION-BRIEFLY-EXPLAIN-WHY-NOT': [
                {
                    target: '#task-list'
                }
            ]
        }
    }
};
