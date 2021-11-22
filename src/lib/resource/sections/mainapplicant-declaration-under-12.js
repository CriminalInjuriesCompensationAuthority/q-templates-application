'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Declaration',
                    required: ['q-mainapplicant-declaration'],
                    propertyNames: {
                        enum: ['q-mainapplicant-declaration']
                    },
                    allOf: [
                        {
                            properties: {
                                'mainapplicant-declaration': {
                                    description:
                                        '<div id="declaration"><p class="govuk-body">MINOR UNDER 12 By submitting the application I, ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name||, agree that:</p><ul class="govuk-list govuk-list--bullet"><li>the information I’ve given here is true as far as I know</li><li>CICA can share the information I’ve given in this claim with:</li><ul><li>police, prosecutors and ACRO Criminal Records Office - includes getting a record of criminal convictions, if one exists</li><li>medical organisations and staff, including police medical staff</li><li>any other individuals or organisations needed to process my application (including medical or other experts)</li></ul><li>CICA can receive information from the organisations and individuals described above</li><li>If I deliberately provide information that I know is false or misleading, I may be prosecuted and my application for compensation may be refused.</li></ul><p class="govuk-body">We often have to ask your GP or other health service provider for evidence about your injuries and treatment. We will let you know if we need to do this.</p><p class="govuk-body">Read our privacy notice to see <a href="https://www.gov.uk/guidance/cica-privacy-notice" class="govuk-link" target="_blank">how we use your data (opens in new tab)</a>.</p></div>'
                                }
                            }
                        },
                        {
                            properties: {
                                'q-mainapplicant-declaration': {
                                    type: 'array',
                                    items: {
                                        anyOf: [
                                            {
                                                title:
                                                    'I have read and agree with the <a href="#declaration" class="govuk-link">declaration</a>',
                                                const: 'i-agree'
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-mainapplicant-declaration': 'Select that you agree'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-mainapplicant-declaration': ['i-agree']
                }
            ],
            invalidExamples: [
                {},
                {
                    foo: 'bar'
                },
                {
                    'q-mainapplicant-declaration': true
                },
                {
                    'q-mainapplicant-declaration': 'false'
                },
                {
                    'q-mainapplicant-declaration': 123
                },
                {
                    'q-mainapplicant-declaration': [123]
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--confirmation'
                }
            ]
        }
    }
};
