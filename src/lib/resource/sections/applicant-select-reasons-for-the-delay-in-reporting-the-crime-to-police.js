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
                ns: 'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police'
            },
            translations: [
                {
                    language: 'en',
                    namespace:
                        'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                    resources: {
                        'q-applicant-explain-reason-for-delay-reporting': {
                            title: 'Tell us why the crime could not be reported sooner',
                            'title_someone-else':
                                'Tell us why the crime could not be reported sooner',
                            description:
                                '<p class="govuk-body">To be eligible for compensation, the crime must have been reported as soon as possible.</p><p class="govuk-body">We need to understand why the crime was not reported before ||/answers/p--when-was-the-crime-reported-to-police/q--when-was-the-crime-reported-to-police||.</p><p class="govuk-body">We\'ll consider things like:</p><ul class="govuk-list govuk-list--bullet"><li>the effect of the crime on you</li><li>your age, capacity and wellbeing at the time</li></ul>',
                            'description_someone-else':
                                '<p class="govuk-body">To be eligible for compensation, the crime must have been reported as soon as possible.</p><p class="govuk-body">We need to understand why the crime was not reported before ||/answers/p--when-was-the-crime-reported-to-police/q--when-was-the-crime-reported-to-police||.</p><p class="govuk-body">We\'ll consider things like:</p><ul class="govuk-list govuk-list--bullet"><li>the effect of the crime on the victim</li><li>their age, capacity and wellbeing at the time</li></ul>',
                            error: {
                                required:
                                    'Explain why the crime could not be reported sooner',
                                'required_someone-else':
                                    'Explain why the crime could not be reported sooner'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Reporting the crime to the police',
                    meta: {
                        compositeId: 'delay-in-reporting-crime',
                        classifications: {
                            theme: 'crime'
                        }
                    },
                    required: ['q-applicant-explain-reason-for-delay-reporting'],
                    propertyNames: {
                        enum: ['q-applicant-explain-reason-for-delay-reporting']
                    },
                    allOf: [
                        {
                            properties: {
                                'delay-in-reporting-description': {
                                    description:
                                        'l10nt:q-applicant-explain-reason-for-delay-reporting.description{?lng,context,ns}'
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-explain-reason-for-delay-reporting': {
                                    title:
                                        'l10nt:q-applicant-explain-reason-for-delay-reporting.title{?lng,context,ns}',
                                    type: 'string',
                                    maxLength: 500,
                                    errorMessage: {
                                        maxLength: 'Explanation must be 500 characters or less'
                                    },
                                    meta: {
                                        classifications: {
                                            theme: 'crime'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-explain-reason-for-delay-reporting':
                                'l10nt:q-applicant-explain-reason-for-delay-reporting.error.required{?lng,context,ns}'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-explain-reason-for-delay-reporting': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--which-police-force-is-investigating-the-crime'
                }
            ]
        }
    }
};
