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
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'rep'],
                            ['|role.all', 'adult', 'incapable', 'rep']
                        ]
                    ]
                },
                {
                    target: 'p-rep-declaration-12-and-over',
                    cond: [
                        'and',
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
                        ['|role.all', 'childOver12', 'rep', 'nonDeceased']
                    ]
                },
                {
                    target: 'p-rep-declaration-12-and-over-deceased',
                    cond: [
                        'and',
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
                        ['|role.all', 'childOver12', 'rep', 'deceased']
                    ]
                }
            ]
        }
    }
};
