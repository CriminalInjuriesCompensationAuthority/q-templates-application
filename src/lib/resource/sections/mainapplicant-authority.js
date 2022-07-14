'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data: '/answers/p-applicant-are-you-18-or-over/q-applicant-are-you-18-or-over'
                },
                ns: 'p-mainapplicant-authority'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-mainapplicant-authority',
                    resources: {
                        'q-mainapplicant-authority': {
                            title: 'Do you have parental responsibility for them?',
                            title_true:
                                'Do you have legal authority to act on behalf of the victim?',
                            error: {
                                required: 'Select yes if you have parental responsibility for them',
                                required_true:
                                    'Select yes if you have legal authority to act on behalf of the victim'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-authority'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-authority': {
                    type: 'boolean',
                    title: 'l10nt:q-mainapplicant-authority.title{?lng,context,ns}',
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
                            theme: 'main-applicant-details'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-authority':
                        'l10nt:q-mainapplicant-authority.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-mainapplicant-authority': true
                },
                {
                    'q-mainapplicant-authority': false
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-authority': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-authority'
                }
            ]
        }
    }
};
