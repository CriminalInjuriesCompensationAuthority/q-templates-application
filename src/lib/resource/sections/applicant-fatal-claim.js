'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-fatal-claim'],
            additionalProperties: false,
            properties: {
                'q-applicant-fatal-claim': {
                    type: 'boolean',
                    title: 'Select why you are applying',
                    oneOf: [
                        {
                            title: 'I am applying because of an injury',
                            description:
                                'This could include abuse over a period of time, or a disabling mental injury as a result of witnessing a crime',
                            const: false
                        },
                        {
                            title: 'I am applying because someone has died',
                            const: true
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        },
                        summary: {
                            title: 'Are you applying because someone died?'
                        },
                        integration: {
                            hideOnSummary: true
                        }            
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-fatal-claim': 'Select why you are applying'
                }
            },
            examples: [
                {
                    'q-applicant-fatal-claim': true
                },
                {
                    'q-applicant-fatal-claim': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-fatal-claim': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-claim-type',
                    cond: ['|role.all', 'deceased']
                },
                {
                    target: 'p--context-applicant-details',
                    cond: ['|role.all', 'nonDeceased']
                }
            ]
        }
    }
};
