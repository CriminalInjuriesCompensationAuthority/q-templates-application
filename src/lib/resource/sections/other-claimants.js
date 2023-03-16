'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Do you know if anyone else might claim?',
                    meta: {
                        classifications: {
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: 'Do you know if anyone else might claim?'
                        }
                    },
                    required: ['q-other-claimants'],
                    propertyNames: {
                        enum: ['q-other-claimants']
                    },
                    allOf: [
                        {
                            properties: {
                                'q-other-claimants': {
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
                                    ]
                                }
                            }
                        },
                        {
                            properties: {
                                'q-other-claimants-info': {
                                    description:
                                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Who else could claim?",html: \'<p class="govuk-body">This could include:</p></p><ul class="govuk-list govuk-list--bullet"><li>Parents</li><li>Children</li><li>Spouses or civil partners</li><li>Former spouses or civil partners</li><li>Partners</li></ul>\'}) }}'
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-other-claimants': 'Select yes if you know if anyone else might claim'
                        }
                    }
                }
            ],
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
                    target: 'p--before-you-continue',
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
