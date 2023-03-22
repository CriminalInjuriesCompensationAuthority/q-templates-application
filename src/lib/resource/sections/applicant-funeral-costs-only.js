'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'What do you want to claim?',
                    meta: {
                        classifications: {
                            theme: 'about_application'
                        },
                        summary: {
                            title: 'What do you want to claim?'
                        }
                    },
                    required: ['q-applicant-funeral-costs-only'],
                    propertyNames: {
                        enum: ['q-applicant-funeral-costs-only']
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-funeral-costs-only': {
                                    type: 'boolean',
                                    oneOf: [
                                        {
                                            title: 'I want to claim funeral costs only',
                                            description:
                                                'Anyone who contributed to the cost of the funeral can claim funeral costs',
                                            const: true
                                        },
                                        {
                                            title: 'I want to make a full claim',
                                            description:
                                                'In addition to funeral costs anyone who is a qualifying relative could be eligible for other payments including bereavement, dependency and child payments',
                                            const: false
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-funeral-costs-only-info': {
                                    description:
                                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Other payments that qualifying relatives could be eligible for?", html: \'<p class="govuk-body"><b>Funeral costs</b></p><p class="govuk-body">Anyone who contributed to the cost of the funeral can claim funeral costs</p><p class="govuk-body"><b>Bereavement payment</b></p><p class="govuk-body">Relatives of the person who died who could be eligible for a bereavement payment include:</p></p><ul class="govuk-list govuk-list--bullet"><li>parents</li><li>children   this includes adult children and children born after the crime happened</li><li>a spouse or civil partner who was living in the same household</li><li>a partner who was living in the same housedold for the past two years until the death of the person who died</li><li>a partner, spouse or civil partner who did not live with the person who died because of ill health may also be eligible for this payment</li></ul><p class="govuk-body"><b>Dependency payment</b></p><p>Relatives who were financially or physically dependent on the person who died who could be eligible for a dependency payment include:</p></p><ul class="govuk-list govuk-list--bullet"><li>all those eligible for a bereavement payment</li><li>a former spouse or civil partner</li></ul><p class="govuk-body"><b>Child’s payment</b></p><p>Children of the person who died could also be eligible for a child’s payment. They must have been 18 at the time of the person’s death and reliant on them for parental support</p>\'}) }}'
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-funeral-costs-only': 'Select what you want to claim'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-funeral-costs-only': 'true'
                },
                {
                    'q-applicant-funeral-costs-only': 'false'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-funeral-costs-only': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-deceased-details'
                }
            ]
        }
    }
};
