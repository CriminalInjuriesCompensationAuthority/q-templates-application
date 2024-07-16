'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Where in Scotland did the crime happen?',
                    meta: {
                        compositeId: 'crime-location-scotland',
                        classifications: {
                            theme: 'crime'
                        }
                    },
                    required: [
                        'q-applicant-scottish-town-or-city',
                        'q-applicant-scottish-location'
                    ],
                    propertyNames: {
                        enum: ['q-applicant-scottish-town-or-city', 'q-applicant-scottish-location']
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-scottish-town-or-city': {
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
                                'q-applicant-scottish-location': {
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
                                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "If the crime happened in more than one place",html: \'<p class="govuk-body">If the crime happened in more than one place, you can provide additional details later in this application.</p>\'})}}'
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-scottish-location':
                                'Enter the name of a street, business, building or nearby local landmark',
                            'q-applicant-scottish-town-or-city':
                                'Enter the town or city where the crime happened'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-scottish-town-or-city': 'Some town',
                    'q-applicant-scottish-location': 'Some location'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-scottish-town-or-city': 12345,
                    'q-applicant-scottish-location': 'Some location'
                },
                {
                    'q-applicant-scottish-town-or-city': 'Some town',
                    'q-applicant-scottish-location': 12345
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-WHERE-IN-SCOTLAND-DID-IT-HAPPEN': [
                {
                    target: 'p--which-police-force-is-investigating-the-crime',
                    cond: [
                        'and',
                        ['|role.all', 'deceased'],
                        [
                            '==',
                            '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                            true
                        ]
                    ]
                },
                {
                    target: 'p--context-offender',
                    cond: [
                        'and',
                        ['|role.all', 'deceased'],
                        [
                            '==',
                            '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                            false
                        ]
                    ]
                },
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
