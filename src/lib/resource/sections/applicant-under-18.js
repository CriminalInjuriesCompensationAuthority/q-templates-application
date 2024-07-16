'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-under-18'],
            additionalProperties: false,
            properties: {
                'applicant-under-18-info': {
                    title: "You've told us you're under 18",
                    description:
                        '<p class="govuk-body">We need an adult to apply for compensation for you if you\'re under 18. Usually this is a parent, guardian or someone with a care order to look after you.</p>'
                },
                'q-applicant-under-18': {
                    title: 'Do you have someone aged 18 or over who can apply for you?',
                    type: 'boolean',
                    oneOf: [
                        {
                            title: 'I do not have someone who can apply for me',
                            const: true
                        },
                        {
                            title: 'I will get someone to apply for me',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        },
                        summary: "You've told us you're under 18"
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-under-18': 'Select one option'
                }
            },
            examples: [
                {
                    'q-applicant-under-18': false
                },
                {
                    'q-applicant-under-18': true
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-under-18': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--transition-someone-18-or-over-to-apply',
                    cond: ['==', '$.answers.p-applicant-under-18.q-applicant-under-18', false]
                },
                {
                    target: 'p-applicant-what-do-you-want-to-do'
                }
            ]
        }
    }
};
