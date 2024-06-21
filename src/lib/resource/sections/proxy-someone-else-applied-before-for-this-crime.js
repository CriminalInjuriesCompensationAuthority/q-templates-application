'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-proxy-someone-else-applied-before-for-this-crime'],
            additionalProperties: false,
            properties: {
                'q-proxy-someone-else-applied-before-for-this-crime': {
                    type: 'boolean',
                    title: 'Has the victim ever applied before, for injuries related to this crime?',
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
                'proxy-someone-else-applied-before-info': {
                    description: `{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "I don’t know if the victim has applied before",html: "<p class='govuk-body'>If the victim has already applied, for injuries related to this crime, we cannot accept another application. </p><p class='govuk-body'>You should ask the victim about this before continuing with your application.</p>"})}}`
                }
            },
            errorMessage: {
                required: {
                    'q-proxy-someone-else-applied-before-for-this-crime':
                        'Select yes if anyone has applied on your behalf, for injuries related to this crime'
                }
            },
            examples: [
                {
                    'q-proxy-someone-else-applied-before-for-this-crime': true
                },
                {
                    'q-proxy-someone-else-applied-before-for-this-crime': false
                }
            ],
            invalidExamples: [
                {
                    'q-proxy-someone-else-applied-before-for-this-crime': 'foo'
                }
            ],
            options: {
                outputOrder: ['q-proxy-someone-else-applied-before-for-this-crime', 'proxy-someone-else-applied-before-info'],
                signInLink: {
                    visible: false
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-you-should-not-apply-again',
                    cond: [
                        '==',
                        '$.answers.p-proxy-someone-else-applied-before-for-this-crime.q-proxy-someone-else-applied-before-for-this-crime',
                        true
                    ]
                },
                {
                    target: 'p--context-applicant-details'
                }
            ]
        }
    }
};
