'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-shared-responsibility-name'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-shared-responsibility-name': {
                    type: 'string',
                    title: 'What is their full name?',
                    description:
                        'We will never contact this person without your consent unless there is an exceptional situation where we have to.'
                },
                'mainapplicant-shared-responsibility-name': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "I share parental rights with more than one person",html: \'<p class="govuk-body">You can add any additional names of shared parental rights holders at the end of this application.</p><p class="govuk-body">Find out if you share parental responsibility with another person <a target="_blank" href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="new">on the UK Government website(opens in new tab)</a>.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-shared-responsibility-name': 'Enter their full name'
                }
            },
            examples: [
                {
                    'q-mainapplicant-shared-responsibility-name': 'Mr Foo Bar'
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-shared-responsibility-name': 123
                },
                {
                    'q-mainapplicant-shared-responsibility-name': true
                },
                {
                    'q-mainapplicant-shared-responsibility-name': ['Mr Foo Bar']
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-mainapplicant-care-order'
                }
            ]
        }
    }
};
