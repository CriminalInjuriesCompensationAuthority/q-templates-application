'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'context-crime-impact': {
                    title: 'The impact the injuries have had',
                    description:
                        "<p class='govuk-body'>We’re going to ask you questions about:</p><ul class='govuk-list govuk-list--bullet'><li>how the child’s daily life has been impacted by their injuries</li><li>how long the effects of their injuries are likely to last</li><li>their ability to work now and in future</li></ul><p class='govuk-body'>The answers you give help build an understanding of how their injuries have affected them.</p><p class='govuk-body'>In sending this application, the child will be considered for compensation for loss of earnings and special expenses.</p><h2 class='govuk-heading-m'>Loss of earnings</h2><p class='govuk-body'>If the medical evidence shows the injuries result in very limited or no capacity to work, they may get a loss of earnings payment.</p> <h2 class='govuk-heading-m'>Special expenses</h2> <p class='govuk-body'>If the child cannot work for more than 28 weeks or is likely to lose earnings because of how severe the injuries are, or is incapacitated to a similar extent, they may receive a special expenses payment.</p><p class='govuk-body'>Both of these payment types are to compensate for any financial losses they have because of their injuries.</p>"
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
                    target: 'p-applicant-over-16',
                    cond: [
                        '==',
                        '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                        'someone-else'
                    ]
                },
                {
                    target: 'p-applicant-job-when-crime-happened'
                }
            ]
        }
    }
};
