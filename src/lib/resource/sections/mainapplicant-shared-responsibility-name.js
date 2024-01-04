'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-mainapplicant-shared-responsibility-name'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-mainapplicant-shared-responsibility-name',
                    resources: {
                        'mainapplicant-shared-responsibility-name': {
                            details: {
                                nonDeceased:
                                    '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "I share parental rights with more than one person",html: \'<p class="govuk-body">You can add any additional names of shared parental rights holders at the end of this application.</p><p class="govuk-body">Find out if you share parental responsibility with another person <a class="govuk-link" target="_blank" href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="_blank">on the UK Government website(opens in new tab)</a>.</p>\'})}}',
                                deceased:
                                    '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "If parental rights are shared with more than one person",html: \'<p class="govuk-body">You can add any additional names of shared parental rights holders at the end of this application.</p><p class="govuk-body">Find out <a class="govuk-link" target="_blank" href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="_blank">who has parental responsibility(opens in new tab)</a>.</p>\'})}}'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-shared-responsibility-name'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-shared-responsibility-name': {
                    type: 'string',
                    title: 'What is their full name?',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Name must be 50 characters or less'
                    },
                    description:
                        'We will never contact this person without your consent unless there is an exceptional situation where we have to.',
                    meta: {
                        classifications: {
                            theme: 'main-applicant-details'
                        },
                        summary: {
                            title: 'With who?'
                        }
                    }
                },
                'mainapplicant-shared-responsibility-name': {
                    description: [
                        '|l10nt',
                        ['|role.all', 'nonDeceased'],
                        'mainapplicant-shared-responsibility-name.details.nonDeceased',
                        ['|role.all', 'deceased'],
                        'mainapplicant-shared-responsibility-name.details.deceased'
                    ]
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
