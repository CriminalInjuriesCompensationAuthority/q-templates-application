'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-when-did-the-crime-start'],
            additionalProperties: false,
            properties: {
                'q-applicant-when-did-the-crime-start': {
                    title: 'When did it start?',
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
                    description: 'For example, 12 2022. You can enter an approximate date.',
                    errorMessage: {
                        format: 'Enter the date the crime started and include a month and year'
                    }
                },
                'i-dont-know-when-the-crime-started': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know when the crime started",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-when-did-the-crime-start':
                        'Enter the date the crime started and include a month and year'
                }
            },
            examples: [
                {
                    'q-applicant-when-did-the-crime-start': '2020-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-when-did-the-crime-start': 12345
                },
                {
                    'q-applicant-when-did-the-crime-start': 'not a date'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-when-did-the-crime-stop'
                }
            ]
        }
    }
};
