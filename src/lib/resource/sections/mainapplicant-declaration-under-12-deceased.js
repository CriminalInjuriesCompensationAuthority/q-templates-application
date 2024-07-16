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
                                '<div id="declaration"> <p class="govuk-body"> You have told us that you are ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-title|| ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-first-name|| ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-last-name|| and you are applying on behalf of ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name|| (the claimant).</p> <p class="govuk-body">By submitting this application, you confirm that you understand the following:</p> <ul class="govuk-list govuk-list--bullet"> <li>the information given in this application for compensation is true</li> <li>Criminal Injuries Compensation Authority (CICA) may share and receive information with the following parties for the purposes of processing this application for compensation or verifying information provided:</li> <ul> <li>police, prosecutors and ACRO Criminal Records Office, including for the purposes of obtaining a report of the crime and a record of any criminal convictions the claimant or the person who died may have</li><li>any other individuals or organisations where necessary to process this application</li> <li>any representative appointed to act for the claimant in the course of this application</li> </ul> <li>CICA must be notified immediately of any change in circumstances relevant to this application, including any change of address and information about any other claim or proceedings which may give rise to a separate award or payment in relation to the incident</li> </ul> <h2 class="govuk-heading-m">Providing wrong or misleading information</h2> <p class="govuk-body">If untrue or misleading information is deliberately provided, compensation may be refused and the person(s) responsible may be prosecuted.</p> <p class="govuk-body">Read our privacy notice to see <a href="https://www.gov.uk/guidance/cica-privacy-notice" class="govuk-link" target="_blank">how we use your data (opens in new tab)</a>. </p> <h2 class="govuk-heading-m">Information about appointing a legal or another representative</h2> <p class="govuk-body">It is not necessary to appoint a legal or other representative to act on a claimant’s behalf. If a representative is appointed at any stage, please be aware that:</p> <ul class="govuk-list govuk-list--bullet"> <li>CICA cannot meet their costs </li> <li>we will only communicate directly with any appointed representative</li> </ul> <p class="govuk-body">If we make an award, we will pay it only to the claimant or their legal representative. This is unless the application has been made on behalf of:</p> <ul class="govuk-list govuk-list--bullet"> <li>an adult who cannot manage their own financial affairs</li> <li>a child who is under 18 years of age</li> </ul> <p class="govuk-body"> It is our general policy to put an award for a child in an interest-earning deposit account until they reach the age of 18.</p> <p class="govuk-body"> If a monetary award is to be made and there is a dispute about outstanding legal fees, it is our policy to retain the disputed amount until the dispute has been resolved.</p> <p class="govuk-body"> If it is decided that a representative’s services are no longer required, CICA must be notified in writing as soon as possible.</p> </div>'
                        }
                    }
                },
                {
                    properties: {
                        'q-mainapplicant-declaration': {
                            type: 'string',
                            title: 'I have read and understood the declaration',
                            const: 'i-agree-under-12'
                        }
                    }
                }
            ],
            errorMessage: {
                required: {
                    'q-mainapplicant-declaration': 'Select that you have read and understood'
                }
            },
            examples: [
                {
                    'q-mainapplicant-declaration': 'i-agree-under-12'
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
            'ANSWER__P-MAINAPPLICANT-DECLARATION-UNDER-12-DECEASED': [
                {
                    target: 'p--confirmation'
                }
            ]
        }
    }
};
