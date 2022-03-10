'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-work-details-option'],
            additionalProperties: false,
            properties: {
                'q-applicant-work-details-option': {
                    title: 'Select the option that applies to you',
                    type: 'string',
                    oneOf: [
                        {title: 'I was too young to work', const: 'underage-for-work'},
                        {title: 'I was in full-time education', const: 'education'},
                        {title: 'I was caring for someone', const: 'care'},
                        {
                            title:
                                'I did not have a job but I had been in regular work for at least 3 years before the crime',
                            const: 'employed'
                        },
                        {title: 'Other', const: 'other'}
                    ],
                    meta: {
                        classifications: {
                            theme: 'impact'
                        },
                        summary: {
                            title: 'Reason for not having a job'
                        }
                    }
                },
                'q-applicant-work-details-other': {
                    type: 'string',
                    title: 'Details',
                    maxLength: 100,
                    errorMessage: {maxLength: 'Other details must be 100 characters or less'},
                    meta: {
                        classifications: {
                            theme: 'impact'
                        }
                    }
                }
            },
            allOf: [
                {$ref: '#/definitions/if-other-then-q-applicant-work-details-other-is-required'}
            ],
            definitions: {
                'if-other-then-q-applicant-work-details-other-is-required': {
                    if: {
                        properties: {'q-applicant-work-details-option': {const: 'other'}},
                        required: ['q-applicant-work-details-option']
                    },
                    then: {
                        required: ['q-applicant-work-details-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-work-details-option',
                                'q-applicant-work-details-other'
                            ]
                        },
                        errorMessage: {
                            required: {'q-applicant-work-details-other': 'Enter other details'}
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-work-details-option': 'Select the option that applies to you'
                }
            },
            examples: [
                {'q-applicant-work-details-option': 'care'},
                {
                    'q-applicant-work-details-option': 'other',
                    'q-applicant-work-details-other': 'a string'
                }
            ],
            invalidExamples: [
                {'q-applicant-work-details-option': 1234},
                {'q-applicant-work-details-option': 'other'},
                {'q-applicant-work-details-option': 'other', 'q-applicant-work-details-other': 1234}
            ]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-expenses'}]}}
};
