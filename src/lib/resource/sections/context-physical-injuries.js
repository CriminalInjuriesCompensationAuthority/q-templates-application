'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'details-context': {
                    title: 'About your injuries',
                    description:
                        '<p class="govuk-body">We’re going to ask about any physical injuries caused by the crime.</p><p class="govuk-body">This helps us decide if you\'ll get a payment for physical injuries.</p><p class="govuk-body">We’ll ask about your mental health later in the application.</p>'
                }
            },
            examples: [{}],
            invalidExamples: [{foo: 'bar'}]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-infections',
                    cond: [
                        '==',
                        '$.answers.p-applicant-incident-type.q-applicant-incident-type',
                        'SEX'
                    ]
                },
                {target: 'p-applicant-non-sa-infections'}
            ]
        }
    }
};
