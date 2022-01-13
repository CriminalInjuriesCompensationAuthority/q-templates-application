'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Declaration',
                    required: ['q-applicant-declaration'],
                    propertyNames: {
                        enum: ['q-applicant-declaration']
                    },
                    allOf: [
                        {
                            properties: {
                                'applicant-declaration': {
                                    description:
                                        '<div id="declaration"><p class="govuk-body">By submitting this application, I, ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name||, confirm that I understand the following:</p><ul class="govuk-list govuk-list--bullet"><li>the information I’ve given here is true</li><li>CICA may share and receive information with the following parties for the purposes of processing this application for compensation or verifying information provided:</li><ul><li>police, prosecutors and ACRO Criminal Records Office, including for the purposes of obtaining a report of the crime and a record of any criminal convictions I may have</li><li>medical organisations, practitioners, and police medical staff to obtain medical evidence - including medical records and expert reports. CICA will let me know if this is required</li><li>any other individuals or organisations where necessary to process this application</li><li>any representative I may appoint to act for me in the course of this application</li></ul><li>if I deliberately provide information that I know is wrong or misleading, I may be refused compensation and may be prosecuted</li><li>I must notify CICA immediately of any change in circumstances relevant to this application, including my address and information about any other claim or proceedings which may give rise to a separate award or payment in respect of my injuries</li></ul><p class="govuk-body">Read our privacy notice to see <a href="https://www.gov.uk/guidance/cica-privacy-notice" target="_blank">how we use your data (opens in new tab)</a>.</p><h2 class="govuk-heading-m">Information about appointing a legal or another representative</h2><p class="govuk-body">It is not necessary to appoint a legal or other paid representative to act on an applicant’s behalf. If one is appointed at any stage, please be aware that CICA cannot meet their costs. We will communicate directly with any appointed representative.</p><p class="govuk-body">If we make an award, we will pay it only to an applicant or their legal representative. This is unless the application has been made on behalf of an adult who cannot manage their own financial affairs.</p><p class="govuk-body">If it is decided that a representative’s services are no longer required, you must tell us in writing as soon as possible. If a monetary award is to be made and there is a dispute about outstanding legal fees, it is our policy to retain the disputed amount until the parties involved resolve the dispute.</p></div>'
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-declaration': {
                                    type: 'string',
                                    oneOf: [
                                        {
                                            title:
                                                'I have read and understood the <a href="#declaration" class="govuk-link">information and declaration</a>',
                                            const: 'i-agree'
                                        }
                                    ]
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-declaration': 'Select that you agree'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-declaration': ['i-agree']
                }
            ],
            invalidExamples: [
                {},
                {
                    foo: 'bar'
                },
                {
                    'q-applicant-declaration': true
                },
                {
                    'q-applicant-declaration': 'false'
                },
                {
                    'q-applicant-declaration': 123
                },
                {
                    'q-applicant-declaration': [123]
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
