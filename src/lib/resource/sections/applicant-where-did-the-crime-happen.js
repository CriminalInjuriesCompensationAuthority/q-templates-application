'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-where-did-the-crime-happen'],
            additionalProperties: false,
            properties: {
                'q-applicant-where-did-the-crime-happen': {
                    title: 'Where did the crime happen?',
                    type: 'string',
                    oneOf: [
                        {title: 'England', const: 'england'},
                        {title: 'Scotland', const: 'scotland'},
                        {title: 'Wales', const: 'wales'},
                        {title: 'Somewhere else', const: 'somewhere-else'}
                    ]
                },
                'additional-info-help-text': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with where it happened",html: \'<p class="govuk-body">If the crime took place in more than one of these countries, you can provide additional details later in this claim.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-where-did-the-crime-happen':
                        'Select England, Scotland, Wales or Somewhere else'
                }
            },
            examples: [
                {'q-applicant-where-did-the-crime-happen': 'england'},
                {'q-applicant-where-did-the-crime-happen': 'scotland'},
                {'q-applicant-where-did-the-crime-happen': 'wales'},
                {'q-applicant-where-did-the-crime-happen': 'somewhere-else'}
            ],
            invalidExamples: [
                {'q-applicant-where-did-the-crime-happen': 'Japan'},
                {'q-applicant-where-did-the-crime-happen': 12345}
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-where-in-england-did-it-happen',
                    cond: [
                        '==',
                        '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                        'england'
                    ]
                },
                {
                    target: 'p-applicant-where-in-scotland-did-it-happen',
                    cond: [
                        '==',
                        '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                        'scotland'
                    ]
                },
                {
                    target: 'p-applicant-where-in-wales-did-it-happen',
                    cond: [
                        '==',
                        '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                        'wales'
                    ]
                },
                {
                    target: 'p--you-need-to-contact-us',
                    cond: [
                        '==',
                        '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                        'somewhere-else'
                    ]
                }
            ]
        }
    }
};
