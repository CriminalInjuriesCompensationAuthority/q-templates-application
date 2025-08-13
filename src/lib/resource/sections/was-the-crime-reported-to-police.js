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
                            theme: 'about-application'
                        }
                    }
                },
                'dont-know-if-crime-reported': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know if the crime was reported to the police",html: \'<p class="govuk-body">If you do not know if the crime was reported to the police, call 101 to speak to your local police station. They can help you with this.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q--was-the-crime-reported-to-police':
                        'Select yes if the crime was reported to the police'
                }
            },
            examples: [
                {
                    'q--was-the-crime-reported-to-police': true
                },
                {
                    'q--was-the-crime-reported-to-police': false
                }
            ],
            invalidExamples: [
                {
                    'q--was-the-crime-reported-to-police': 'foo'
                }
            ],
            options: {
                signInLink: {
                    visible: false
                }
            }
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
                    target: 'p--context-crime-ref-no',
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
