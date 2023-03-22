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
                    title: 'Are you applying because someone died from their injuries?',
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
                            theme: 'about-application'
                        },
                        summary: {
                            title: 'Are you applying because someone died?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-fatal-claim':
                        'Select yes if you are applying for someone who died from their injuries'
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
                    target: 'p-applicant-funeral-costs-only',
                    cond: ['|role.all', 'deceased']
                },
                {
                    target: 'p--was-the-crime-reported-to-police',
                    cond: ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', false]
                }
            ]
        }
    }
};
