'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-parent'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-parent': {
                    type: 'boolean',
                    title: "Are you the victim's parent?",
                    description:
                        'This means you have parental responsibility for the victim as their birth, step or adoptive parent.',
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
                        }
                    }
                },
                'can-i-apply-for-child': {
                    description: `{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Can I apply for the victim?",html: "<p class='govuk-body'>You need to prove you have parental responsibility for the victim to apply.</p><p class='govuk-body'>To prove this, you'll need relevant documents your name is on, such as:</p><ul class='govuk-list govuk-list--bullet'><li>the victim's full birth certificate</li><li>adoption documents</li><li>a parental responsibility agreement</li><li>a court order</li></ul><p class='govuk-body'>If you're still unsure about parental responsibility and what it means, you can find out more <a target='_blank' href='https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility'>on the UK Government website(opens in new tab)</a>.</p>"})}}`
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-parent': "Select yes if you are the victim's parent"
                }
            },
            examples: [
                {
                    'q-mainapplicant-parent': true
                },
                {
                    'q-mainapplicant-parent': false
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-parent': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--transition',
                    cond: ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false]
                },
                {
                    target: 'p--context-authority'
                }
            ]
        }
    }
};
