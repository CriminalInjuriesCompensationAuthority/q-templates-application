'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'se-context': {
                    title: 'Special expenses',
                    description:
                        '<p class="govuk-body">We’re going to ask you about specific payments you may have had to make, or will make, because of the injuries caused by the crime.</p><p class="govuk-body">We can only consider certain expenses – known as “special expenses” – and will ask you questions about these.</p><p class="govuk-body">We’ll consider this application for special expenses if the victim has experienced one of the following for more than 28 weeks due to their injuries:</p><ul class="govuk-list govuk-list--bullet"><li>lost earnings</li><li>lost earning capacity</li><li>or been incapacitated to a similar extent</li></ul><p class="govuk-body">The 28 weeks can be a single period of time or cover several periods of time since the crime. Any special expenses payment will include payment for the first 28 weeks from when they were injured.</p><h2 class="govuk-heading-m">Providing evidence of expenses</h2><p class="govuk-body">We may ask you to provide evidence:</p><ul class="govuk-list govuk-list--bullet"> <li>of any expenses incurred or expected</li><li>that the products or services are not available free of charge</li><li>that they were needed as a result of the injuries</li></ul>'
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-se-treatment'
                }
            ]
        }
    }
};
