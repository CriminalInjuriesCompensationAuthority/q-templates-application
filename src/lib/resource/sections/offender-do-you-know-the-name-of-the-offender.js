'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-offender-do-you-know-the-name-of-the-offender'],
            additionalProperties: false,
            properties: {
                'q-offender-do-you-know-the-name-of-the-offender': {
                    title: "Do you know the offender's name?",
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
                            theme: 'offender'
                        }
                    }
                },
                'additional-info-help-text': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with offender\'s name",html: \'<p class="govuk-body">If there was more than one offender, you can provide additional details later in this claim.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-offender-do-you-know-the-name-of-the-offender':
                        "Select yes if you know the offender's name"
                }
            },
            examples: [
                {
                    'q-offender-do-you-know-the-name-of-the-offender': true
                },
                {
                    'q-offender-do-you-know-the-name-of-the-offender': false
                }
            ],
            invalidExamples: [
                {
                    'q-offender-do-you-know-the-name-of-the-offender': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-compensation',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-offender-do-you-know-the-name-of-the-offender.q-offender-do-you-know-the-name-of-the-offender',
                            false
                        ],
                        ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', true]
                    ]
                },
                {
                    target: 'p--context-physical-injuries',
                    cond: [
                        '==',
                        '$.answers.p-offender-do-you-know-the-name-of-the-offender.q-offender-do-you-know-the-name-of-the-offender',
                        false
                    ]
                },
                {
                    target: 'p-offender-enter-offenders-name',
                    cond: [
                        '==',
                        '$.answers.p-offender-do-you-know-the-name-of-the-offender.q-offender-do-you-know-the-name-of-the-offender',
                        true
                    ]
                }
            ]
        }
    }
};
