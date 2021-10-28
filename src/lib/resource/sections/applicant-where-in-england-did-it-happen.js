'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Where in England did it happen?',
                    meta: {
                        compositeId: 'crime-location-england',
                        classifications: {
                            theme: 'crime'
                        }
                    },
                    required: ['q-applicant-english-town-or-city', 'q-applicant-english-location'],
                    propertyNames: {
                        enum: ['q-applicant-english-town-or-city', 'q-applicant-english-location']
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-english-town-or-city': {
                                    type: 'string',
                                    title: 'Town or city',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength: 'Town or city must be 60 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'crime'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-english-location': {
                                    type: 'string',
                                    title: 'Location',
                                    description:
                                        'For example, the name of a street, business, building or nearby local landmark. You can enter more than one.',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength: 'Location must be 60 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'crime'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'additional-info-help-text': {
                                    description:
                                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with where it happened",html: \'<p class="govuk-body">If the crime took place in more than one place, you can provide additional details later in this claim.</p>\'})}}'
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-english-location':
                                'Enter the name of a street, business, building or nearby local landmark',
                            'q-applicant-english-town-or-city':
                                'Enter the town or city where the crime happened'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-english-town-or-city': 'Some town',
                    'q-applicant-english-location': 'Some location'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-english-town-or-city': 12345,
                    'q-applicant-english-location': 'Some location'
                },
                {'q-applicant-english-town-or-city': 'York', 'q-applicant-english-location': 12345}
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-describe-incident',
                    cond: [
                        '==',
                        '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                        false
                    ]
                },
                {
                    target: 'p--when-was-the-crime-reported-to-police',
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
