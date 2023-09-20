'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-explain-reason-for-delay-application'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-explain-reason-for-delay-application',
                    resources: {
                        'applicant-explain-reason-for-delay-application': {
                            description: {
                                myself:
                                    'There is a time limit to make this application. The time limit can be extended where you could not apply sooner because of exceptional circumstances and the application can be decided without further extensive enquiries.',
                                proxy:
                                    'There is a time limit to make this application. The time limit can be extended where the claimant could not apply sooner because of exceptional circumstances and the application can be decided without further extensive enquiries.'
                            },
                            details: {
                                myself:
                                    '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with why we ask about this application not being sent before now",html: \'<h2 class="govuk-heading-s">If you were an adult at the time of the crime (18 years or older)</h2><p class="govuk-body">The application must be sent as soon as is reasonably practicable and in any event, no later than 2 years after the crime.</p><h2 class="govuk-heading-s">If you were a child at the time of the crime (under 18 years old)</h2><p class="govuk-body">The application must be received:<ul class="govuk-list govuk-list--bullet"><li>on or before your 20th birthday, if the crime was reported to police before your 18th birthday</li><li>within 2 years of the crime first being reported to police, if the incident was reported on or after your 18th birthday</li></ul></p><h2 class="govuk-heading-s">Extending the time limits</h2><p class="govuk-body">We can only extend the time limits where:<ul class="govuk-list govuk-list--bullet"><li>due to exceptional circumstances, the application could not be made earlier (for example, where illness or injuries stopped you applying)</li></ul><p>and <br></p><ul class="govuk-list govuk-list--bullet"><li>the evidence provided to support the application means it can be decided without further extensive enquiries</li></ul></p><p class="govuk-body">You may have to provide evidence to support any reason for a delay in applying. This evidence may include a letter from your GP or other medical professional.</p><p class="govuk-body">Any evidence to support your application should:<ul class="govuk-list govuk-list--bullet"><li>show why this application could not have been made earlier and explain the entire period of the delay  </li><li>provide us with enough information to make a decision on this application without the need for further extensive enquiries</li></ul></p>\'})}}',
                                proxy:
                                    '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with why we ask about this application not being sent before now",html: \'<h2 class="govuk-heading-s"> If the claimant was an adult at the time of the crime (18 years or older)</h2><p class="govuk-body">The application must be sent as soon as is reasonably practicable and in any event, no later than 2 years after the crime.</p><h2 class="govuk-heading-s"> If the claimant was a child at the time of the crime (under 18 years old)</h2><p class="govuk-body">The application must be received:<ul class="govuk-list govuk-list--bullet"><li>on or before their 20th birthday, if the crime was reported to police before their 18th birthday</li><li>within 2 years of the crime first being reported to police, if the incident was reported on or after their 18th birthday</li></ul></p><h2 class="govuk-heading-s">Extending the time limits</h2><p class="govuk-body">We can only extend the time limits where:<ul class="govuk-list govuk-list--bullet"><li>due to exceptional circumstances, the application could not be made earlier (for example, where illness or injuries stopped the claimant applying)</li></ul><p>and <br></p><ul class="govuk-list govuk-list--bullet"><li>the evidence provided to support the application means it can be decided without further extensive enquiries</li></ul></p><p class="govuk-body">They may have to provide evidence to support any reason for a delay in applying. This evidence may include a letter from their GP or other medical professional.</p><p class="govuk-body">Any evidence to support this application should:<ul class="govuk-list govuk-list--bullet"><li>show why this application could not have been made earlier and explain the entire period of the delay  </li><li>provide us with enough information to make a decision on this application without the need for further extensive enquiries</li></ul></p>\'})}}'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-explain-reason-for-delay-application'],
            additionalProperties: false,
            properties: {
                'q-applicant-explain-reason-for-delay-application': {
                    title: 'Tell us the reason why this application could not be sent before now',
                    type: 'string',
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-explain-reason-for-delay-application.description.myself',
                        ['|role.all', 'proxy'],
                        'applicant-explain-reason-for-delay-application.description.proxy'
                    ],
                    maxLength: 500,
                    errorMessage: {
                        maxLength: 'Explanation must be 500 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'crime'
                        },
                        summary: {
                            title:
                                'Tell us the reason why this application could not be sent before now'
                        }
                    }
                },
                'help-reason-for-delay': {
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-explain-reason-for-delay-application.details.myself',
                        ['|role.all', 'proxy'],
                        'applicant-explain-reason-for-delay-application.details.proxy'
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-explain-reason-for-delay-application':
                        'Tell us the reason why this application could not be sent before now'
                }
            },
            examples: [
                {
                    'q-applicant-explain-reason-for-delay-application': 'some reason'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-explain-reason-for-delay-application': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-where-did-the-crime-happen'
                }
            ]
        }
    }
};
