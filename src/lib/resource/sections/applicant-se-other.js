'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-se-other'],
            additionalProperties: false,
            properties: {
                'q-applicant-se-other': {
                    type: 'boolean',
                    title:
                        'Have you paid for anything else or are you likely to pay for any of the expenses already mentioned in future?',
                    description: 'Add more information about this at the end of the application.',
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
                            theme: 'special-expenses'
                        },
                        summary: {
                            title: 'Any other expenses or future expenses'
                        }
                    }
                },
                'help-understanding-expenses': {
                    description: `{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding your current and future expenses",html: "<p class='govuk-body'>You may have expenses, now or in future, due to the injuries suffered.</p><ul class='govuk-list govuk-list--bullet'><li>NHS or other state health services treatments</li><li>care or supervision</li><li>changes to your home</li><li>special equipment</li><li>replacing or repairing physical aids</li><li>costs of administering their affairs if they lack mental capacity to do so</li><li>fees to the Court of Protection, Public Guardian or Sheriff Court</li></ul>"})}}`
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-se-other':
                        'Select yes if you paid for anything else not already asked about'
                }
            },
            examples: [
                {
                    'q-applicant-se-other': true
                },
                {
                    'q-applicant-se-other': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-se-other': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-treatment'
                }
            ]
        }
    }
};
