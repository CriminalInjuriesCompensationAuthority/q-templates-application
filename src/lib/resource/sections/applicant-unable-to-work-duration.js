'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                context: {
                    $data:
                        '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                },
                ns: 'p-applicant-unable-to-work-duration'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-unable-to-work-duration',
                    resources: {
                        'q-applicant-unable-to-work-duration': {
                            error: {
                                required:
                                    'Select yes if you have been unable to work for more than 28 weeks',
                                'required_someone-else':
                                    'Select yes if they have been unable to work for more than 28 weeks'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-unable-to-work-duration'],
            additionalProperties: false,
            properties: {
                'q-applicant-unable-to-work-duration': {
                    type: 'boolean',
                    title: 'Has this been for more than 28 weeks?',
                    description:
                        'This can be a single period of time or cover several periods of time since the crime.',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'impact'
                        },
                        summary: {
                            title: 'Has this been for more than 28 weeks?'
                        }
                    }
                },
                'details-work-duration': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding the timeframe of 28 weeks",html: "<p class=\'govuk-body\'>28 weeks is more than six months.</p><p class=\'govuk-body\'>We cannot make a payment for the first 28 weeks of any loss of earnings suffered.</p>"})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-unable-to-work-duration':
                        'l10nt:q-applicant-unable-to-work-duration.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-unable-to-work-duration': true
                },
                {
                    'q-applicant-unable-to-work-duration': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-unable-to-work-duration': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-future-work',
                    cond: ['|role.all', 'proxy', 'adult']

                    // [
                    //     'and',
                    //     [
                    //         '==',
                    //         '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                    //         'someone-else'
                    //     ],
                    //     [
                    //         '==',
                    //         '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                    //         false
                    //     ]
                    // ]
                },
                {
                    target: 'p-applicant-affect-on-daily-life-dmi'
                }
            ]
        }
    }
};
