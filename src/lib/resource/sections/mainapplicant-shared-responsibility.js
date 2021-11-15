'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-mainapplicant-shared-responsibility'],
            additionalProperties: false,
            properties: {
                'q-mainapplicant-shared-responsibility': {
                    type: 'boolean',
                    title:
                        'Do you share parental responsibility for the child with another person?',
                    description:
                        'This means you share this with another person named as their birth, step or adoptive parent. Or, someone named on a special guardianship order.',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ]
                },
                'mainapplicant-shared-responsibility': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding shared parental responsibility",html: \'<p class="govuk-body">There are a wide range of situations where a person holds parental responsibility for a child. You may or may not hold parental responsibility for the child and not know.</p><p class="govuk-body">Find out if you have parental responsibility and what this means <a target="_blank" href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="new">on the UK Government website(opens in new tab)</a>.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-mainapplicant-shared-responsibility':
                        'Select yes if you share parental responsibility for the child with another person'
                }
            },
            examples: [
                {
                    'q-mainapplicant-shared-responsibility': true
                },
                {
                    'q-mainapplicant-shared-responsibility': false
                }
            ],
            invalidExamples: [
                {
                    'q-mainapplicant-shared-responsibility': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-mainapplicant-shared-responsibility-name',
                    cond: [
                        '==',
                        '$.answers.p-mainapplicant-shared-responsibility.q-mainapplicant-shared-responsibility',
                        true
                    ]
                },
                {
                    target: 'p-mainapplicant-care-order'
                }
            ]
        }
    }
};
