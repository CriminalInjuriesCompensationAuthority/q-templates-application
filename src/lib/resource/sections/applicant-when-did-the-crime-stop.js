'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-when-did-the-crime-stop'],
            additionalProperties: false,
            properties: {
                'q-applicant-when-did-the-crime-stop': {
                    title: 'When did it stop?',
                    meta: {
                        keywords: {
                            format: {
                                precision: 'YYYY-MM',
                                defaults: {
                                    DD: '01'
                                }
                            }
                        },
                        classifications: {
                            theme: 'crime'
                        }
                    },
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 03 2020. You can enter an approximate date.',
                    errorMessage: {
                        format: 'Enter the date the crime stopped and include a month and year'
                    }
                },
                'i-dont-know-when-the-crime-stopped': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know when the crime stopped",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-when-did-the-crime-stop':
                        'Enter the date the crime stopped and include a month and year'
                }
            },
            examples: [
                {'q-applicant-when-did-the-crime-stop': '2020-01-10T00:00:00.000Z'},
                {'q-applicant-when-did-the-crime-stop': '2010-01-01T00:00:00.000Z'}
            ],
            invalidExamples: [
                {'q-applicant-when-did-the-crime-stop': 12345},
                {'q-applicant-when-did-the-crime-stop': 'not a date'}
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
                        '$.answers.p-applicant-when-did-the-crime-stop.q-applicant-when-did-the-crime-stop'
                    ]
                },
                {target: 'p-applicant-where-did-the-crime-happen'}
            ]
        }
    }
};
