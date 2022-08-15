'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'applicant-impact-on-you': {
                    title: 'Download a summary of your answers',
                    description:
                        "{% from \"components/warning-text/macro.njk\" import govukWarningText %}<p class=\"govuk-body\">This is the only chance to download your answers when completing this application online. Select <strong>\"Download answers\"</strong> to generate a file with the application answers.</p><p class=\"govuk-body\">If you do not download the application now and want a copy after you've submitted it, you need to contact us. There may be a waiting period before you receive this.</p> {{ govukWarningText({text: 'The application is still incomplete at this stage. To complete it, select \"Continue to declaration\" after downloading your answers.',iconFallbackText: 'Warning'}) }}{{ govukButton({attributes:{'target':'_blank','data-tracking-category':'download-link'},text:'Download answers',href:'/download/application-summary',classes:'govuk-button--secondary govuk-!-margin-right-5 ga-event ga-event--click'}) }}"
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-rep-declaration-under-12',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        [
                            'or',
                            [
                                'dateCompare',
                                '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                                '<', // is less than ...
                                '-12', // 12 ...
                                'years' // years (before, due to the negative (-12) ...
                                // today's date (no second date given. defaults to today's date).
                            ],
                            [
                                '==',
                                '$.answers.p-applicant-can-handle-affairs.q-applicant-can-handle-affairs',
                                false
                            ]
                        ]
                    ]
                },
                {
                    target: 'p-rep-declaration-12-and-over',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                            '>=', // is greater than or equeal too ...
                            '-12', // 12 ...
                            'years' // years (before, due to the negative (-12) ...
                            // today's date (no second date given. defaults to today's date).
                        ]
                    ]
                }
            ]
        }
    }
};
