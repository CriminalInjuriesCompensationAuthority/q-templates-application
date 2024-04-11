'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-describe-incident'],
            additionalProperties: false,
            properties: {
                'describe-incident-info': {
                    title: 'Crime description',
                    description: `
                    <p class="govuk-body">It may help us process this application more quickly if you give us a brief description of the crime. It helps us to:</p>
                    <ul class='govuk-list govuk-list--bullet'>
                    <li>understand what happened</li>
                    <li>reduce the amount of additional information we need as part of the application</li></ul>
                    <p class="govuk-body">If you'd prefer not to give us a brief description of the crime, it will not affect the outcome of this application.</p>
                    `
                },
                'q-applicant-describe-incident': {
                    type: 'boolean',
                    title: 'Do you want to tell us about the crime?',
                    description:
                        'The police will send us a report of the crime. Providing an additional description is optional.',
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
                            theme: 'crime'
                        },
                        summary: {
                            title: 'Do you want to describe the crime?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-describe-incident':
                        'Select yes if you would like to briefly describe the crime'
                }
            },
            examples: [
                {
                    'q-applicant-describe-incident': true
                },
                {
                    'q-applicant-describe-incident': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-describe-incident': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-incident-description',
                    cond: [
                        '==',
                        '$.answers.p-applicant-describe-incident.q-applicant-describe-incident',
                        true
                    ]
                },
                {
                    target: 'p--context-offender',
                    cond: [
                        '==',
                        '$.answers.p-applicant-describe-incident.q-applicant-describe-incident',
                        false
                    ]
                }
            ]
        }
    }
};
