'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-fatal-claim'],
            additionalProperties: false,
            properties: {
                'q-applicant-fatal-claim': {
                    type: 'boolean',
                    title: 'Select why you are applying',
                    oneOf: [
                        {
                            title: 'I am applying because I was the victim of a violent crime',
                            description:
                                'This could include a physical injury, disabling mental injury or abuse over a period of time. The disabling mental injury could be due to witnessing a loved one being injured in a violent crime.',
                            const: false
                        },
                        {
                            title: 'I am applying because someone died due to a violent crime',
                            description:
                                'If you are paying for the funeral of the person who died, you may be able to get help with the cost. If you are their relative, you may also be eligible for bereavement payments.',
                            const: true
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        },
                        summary: {
                            title: 'Are you applying because someone died?'
                        },
                        integration: {
                            hideOnSummary: true
                        }
                    }
                },
                'applicant-fatal-claim-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "If both options apply", html:\'<p class="govuk-body">If both of the options above apply you’ll need to make 2 separate applications.</p><p class="govuk-body">You can make the applications in any order but you’ll need to select a different option on this page each time.</p>\'}) }}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-fatal-claim': 'Select the reason you’re applying'
                }
            },
            examples: [
                {
                    'q-applicant-fatal-claim': true
                },
                {
                    'q-applicant-fatal-claim': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-fatal-claim': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-claim-type',
                    cond: ['|role.all', 'deceased']
                },
                {
                    target: 'p--context-applicant-details',
                    cond: ['|role.all', 'nonDeceased']
                }
            ]
        }
    }
};
