'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-other-claimants'],
            additionalProperties: false,
            properties: {
                'q-other-claimants': {
                    title: 'Do you know if anyone else might apply?',
                    type: 'boolean',
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
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: 'Do you know if anyone else might apply?'
                        }
                    }
                },
                'other-claimants-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Who else might apply",html: \'<p class="govuk-body">Other people who might apply could include:</p></p><ul class="govuk-list govuk-list--bullet"><li>parents</li><li>children</li><li>spouses or civil partners</li><li>former spouses or former civil partners</li><li>partners</li></ul>\'}) }}'
                }
            },
            errorMessage: {
                required: {
                    'q-other-claimants': 'Select yes if you know if anyone else might apply'
                }
            },
            examples: [
                {
                    'q-other-claimants': 'true'
                },
                {
                    'q-other-claimants': 'false'
                }
            ],
            invalidExamples: [
                {
                    'q-other-claimants': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-deceased-details',
                    cond: ['==', '$.answers.p-other-claimants.q-other-claimants', false]
                },
                {
                    target: 'p-other-claimants-details',
                    cond: ['==', '$.answers.p-other-claimants.q-other-claimants', true]
                }
            ]
        }
    }
};
