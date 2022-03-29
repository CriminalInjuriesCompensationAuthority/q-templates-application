'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
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
                                '<div id="declaration"><p class="govuk-body">By submitting this application, I, ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-title|| ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-first-name|| ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-last-name||, confirm that ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name|| understands the following:</p><ul class="govuk-list govuk-list--bullet"><li>the information I\'ve given here is true</li><li>CICA may share and receive information with the following parties for the purposes of processing this application for compensation or verifying information provided:</li><ul><li>police, prosecutors and ACRO Criminal Records Office, including for the purposes of obtaining a report of the crime and a record of any criminal convictions they may have</li><li>medical organisations, practitioners, and police medical staff to obtain medical evidence - including medical records and expert reports. CICA will let me know if this is required</li><li>any other individuals or organisations where necessary to process this application</li><li>any representative I may appoint to act for me in the course of this application</li></ul><li>if we deliberately provide information that we know is wrong or misleading, we may be refused compensation and we may be prosecuted</li><li>we must notify CICA immediately of any change in circumstances relevant to this application, including my address and information about any other claim or proceedings which may give rise to a separate award or payment in respect of their injuries</li></ul><p class="govuk-body">Read our privacy notice to see <a href="https://www.gov.uk/guidance/cica-privacy-notice" class="govuk-link" target="_blank">how we use your data (opens in new tab)</a>.</p><h2 class="govuk-heading-m">Information about appointing a legal or another representative</h2><p class="govuk-body">It is not necessary to appoint a legal or other representative to act on an applicant\'s behalf. If one is appointed at any stage, please be aware that CICA cannot meet their costs. We will communicate directly with any appointed representative.</p><p class="govuk-body">If we make an award, we will pay it only to an applicant or their legal representative. This is unless the application has been made on behalf of an adult who cannot manage their own financial affairs or a child who is under 18 years of age. It is our general policy to put an award for a child in an interest earning deposit account until they reach the age of 18.</p><p class="govuk-body">If it is decided that a representative\'s services are no longer required, you must tell us in writing as soon as possible. If a monetary award is to be made and there is a dispute about outstanding legal fees, it is our policy to retain the disputed amount until the parties involved resolve the dispute.</p></div>'
                        }
                    }
                },
                {
                    properties: {
                        'q-mainapplicant-declaration': {
                            type: 'string',
                            title:
                                'I have read and understood the <a href="#declaration" class="govuk-link">information and declaration</a>',
                            const: 'i-agree-12-and-over'
                        }
                    }
                }
            ],
            errorMessage: {
                required: {
                    'q-mainapplicant-declaration': 'Select that you agree'
                }
            },
            examples: [
                {
                    'q-mainapplicant-declaration': 'i-agree-12-and-over'
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
