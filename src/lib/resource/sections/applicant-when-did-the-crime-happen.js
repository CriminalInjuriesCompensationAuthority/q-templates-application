'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-when-did-the-crime-happen'],
            additionalProperties: false,
            properties: {
                'q-applicant-when-did-the-crime-happen': {
                    title: 'When did the crime happen?',
                    meta: {
                        keywords: {
                            format: {
                                precision: 'YYYY-MM-DD'
                            }
                        },
                        classifications: {
                            theme: 'crime'
                        }
                    },
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 28 2 2020. You can enter an approximate date.',
                    errorMessage: {
                        format:
                            'Enter the date the crime happened and include a day, month and year'
                    }
                },
                'when-did-the-crime-happen': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know when the crime happened",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-when-did-the-crime-happen':
                        'Enter the date the crime happened and include a day, month and year'
                }
            },
            examples: [
                {'q-applicant-when-did-the-crime-happen': '2020-01-01T00:00:00.000Z'},
                {'q-applicant-when-did-the-crime-happen': '2010-01-01T00:00:00.000Z'}
            ],
            invalidExamples: [
                {'q-applicant-when-did-the-crime-happen': 12345},
                {'q-applicant-when-did-the-crime-happen': 'not a date'}
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                    cond: [
                        'dateExceedsTwoYearsFromNow',
                        '$.answers.p-applicant-when-did-the-crime-happen.q-applicant-when-did-the-crime-happen'
                    ]
                },
                {target: 'p-applicant-where-did-the-crime-happen'}
            ]
        }
    }
};
