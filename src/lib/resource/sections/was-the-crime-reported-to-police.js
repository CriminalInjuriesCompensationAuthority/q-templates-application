'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--was-the-crime-reported-to-police'],
            additionalProperties: false,
            properties: {
                'q--was-the-crime-reported-to-police': {
                    title: 'Was the crime reported to the police?',
                    type: 'boolean',
                    oneOf: [
                        {title: 'Yes', const: true},
                        {title: 'No', const: false}
                    ]
                },
                'dont-know-if-crime-reported': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know if the crime was reported to the police",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                }
            },
            errorMessage: {
                required: {
                    'q--was-the-crime-reported-to-police':
                        'Select yes if the crime was reported to the police'
                }
            },
            examples: [
                {'q--was-the-crime-reported-to-police': true},
                {'q--was-the-crime-reported-to-police': false}
            ],
            invalidExamples: [{'q--was-the-crime-reported-to-police': 'foo'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-you-cannot-get-compensation',
                    cond: [
                        '==',
                        '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                        false
                    ]
                },
                {
                    target: 'p-applicant-has-crime-reference-number',
                    cond: [
                        '==',
                        '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                        true
                    ]
                }
            ]
        }
    }
};
