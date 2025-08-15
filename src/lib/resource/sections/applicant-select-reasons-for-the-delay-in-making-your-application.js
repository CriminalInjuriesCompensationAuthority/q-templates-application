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
                        'q-applicant-explain-reason-for-delay-application': {
                            title: {
                                adultWhenCrimeHappened:
                                    "Tell us why you're applying for compensation more than 2 years after the crime happened",
                                childWhenCrimeHappened:
                                    "Tell us why you're applying for compensation after the time limit"
                            }
                        },
                        'explain-reason-info': {
                            title: {
                                adultWhenCrimeHappened:
                                    'Applying for compensation more than 2 years after the crime happened',
                                childWhenCrimeHappened:
                                    'Applying for compensation after the time limit'
                            },
                            description: {
                                adultWhenCrimeHappened: {
                                    myself: `
                    <p class="govuk-body">Based on the information you've given us, the crime happened more than 2 years ago.</p>
                    <p class="govuk-body">As you were an adult (18 years or older) when the crime happened, you must apply as soon as is reasonably practical. This means in most cases you must apply for criminal injuries compensation within 2 years of the crime happening.</p>
                    <p class="govuk-body">In some cases you may be eligible for compensation for a crime that happened more than 2 years ago if there are exceptional circumstances. For example, you could not claim earlier because your mental or physical health stopped you.</p>
                    <p class="govuk-body"><a class="govuk-link" href="https://www.gov.uk/guidance/criminal-injuries-compensation-a-guide#time-limits-for-applying" target="_blank">Find out more about the time limit for applying for compensation (opens in a new tab).</a></p>
                    `,
                                    proxy: `
                    <p class="govuk-body">Based on the information you've given us, the crime happened more than 2 years ago.</p>
                    <p class="govuk-body">As the victim was an adult (18 years or older) when the crime happened, they must apply as soon as is reasonably practical. This means in most cases they must apply for criminal injuries compensation within 2 years of the crime happening.</p>
                    <p class="govuk-body">In some cases they may be eligible for compensation for a crime that happened more than 2 years ago if there are exceptional circumstances. For example, they could not claim earlier because their mental or physical health stopped them.</p>
                    <p class="govuk-body"><a class="govuk-link" href="https://www.gov.uk/guidance/criminal-injuries-compensation-a-guide#time-limits-for-applying" target="_blank">Find out more about the time limit for applying for compensation (opens in a new tab).</a></p>
                    `,
                                    deceased: `
                    <p class="govuk-body">Based on the information you've given us, the crime happened more than 2 years ago.</p>
                    <p class="govuk-body">As the claimant was an adult (18 years or older) when the crime happened, they must apply as soon as is reasonably practical. This means in most cases they must apply for criminal injuries compensation within 2 years of the crime happening.</p>
                    <p class="govuk-body">In some cases they may be eligible for compensation for a crime that happened more than 2 years ago if there are exceptional circumstances. For example, they could not claim earlier because their mental or physical health stopped them.</p>
                    <p class="govuk-body"><a class="govuk-link" href="https://www.gov.uk/guidance/criminal-injuries-compensation-a-guide#time-limits-for-applying" target="_blank">Find out more about the time limit for applying for compensation (opens in a new tab).</a></p>
                    `
                                },
                                childWhenCrimeHappened: {
                                    myself: `<p class="govuk-body">Based on the information you've given us, you were a child (under 18 years old) when the crime happened.</p>
                                    <p class="govuk-body">Because of this, you must apply for compensation within either of the following time frames.</p>
                                    <p class="govuk-body"><b>If the crime was reported to the police before you turned 18</b>, you must apply by your 20th birthday.</p>
                                    <p class="govuk-body"><b>If the crime was reported to the police after you turned 18</b>, you must apply within 2 years. This means you need to apply within 2 years of the date of reporting.</p>
                                    <p class="govuk-body">This time limit may be extended if there are exceptional circumstances. For example, you could not claim earlier because your mental or physical health stopped you.</p>
                                    <p class="govuk-body"><a class="govuk-link" href="https://www.gov.uk/guidance/criminal-injuries-compensation-a-guide#time-limits-for-applying" target="_blank">Find out more about the time limit for applying for compensation (opens in a new tab).</a></p>
                                    `,
                                    proxy: `<p class="govuk-body">Based on the information you've given us, the victim was a child (under 18 years old) when the crime happened.</p>
                                    <p class="govuk-body">Because of this, you must apply for compensation within either of the following time frames.</p>
                                    <p class="govuk-body"><b>If the crime was reported to the police before the victim turned 18</b>, you must apply by their 20th birthday.</p>
                                    <p class="govuk-body"><b>If the crime was reported to the police after the victim turned 18</b>, you must apply within 2 years. This means you need to apply within 2 years of the date of reporting.</p>
                                    <p class="govuk-body">This time limit may be extended if there are exceptional circumstances. For example, the victim could not claim earlier because their mental or physical health stopped them.</p>
                                    <p class="govuk-body"><a class="govuk-link" href="https://www.gov.uk/guidance/criminal-injuries-compensation-a-guide#time-limits-for-applying" target="_blank">Find out more about the time limit for applying for compensation (opens in a new tab).</a></p>
                                    `,
                                    deceased: `<p class="govuk-body">Based on the information you've given us, the claimant was a child (under 18 years old) when the crime happened.</p>
                                    <p class="govuk-body">Because of this, you must apply for compensation within either of the following time frames.</p>
                                    <p class="govuk-body"><b>If the crime was reported to the police before the claimant turned 18</b>, you must apply by their 20th birthday.</p>
                                    <p class="govuk-body"><b>If the crime was reported to the police after the claimant turned 18</b>, you must apply within 2 years. This means you need to apply within 2 years of the date of reporting.</p>
                                    <p class="govuk-body">This time limit may be extended if there are exceptional circumstances. For example, the claimant could not claim earlier because their mental or physical health stopped them.</p>
                                    <p class="govuk-body"><a class="govuk-link" href="https://www.gov.uk/guidance/criminal-injuries-compensation-a-guide#time-limits-for-applying" target="_blank">Find out more about the time limit for applying for compensation (opens in a new tab).</a></p>
                                    `
                                }
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
                'explain-reason-info': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'childWhenCrimeHappened'],
                        'explain-reason-info.title.childWhenCrimeHappened',
                        ['|role.all'],
                        'explain-reason-info.title.adultWhenCrimeHappened'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'childWhenCrimeHappened', 'myself'],
                        'explain-reason-info.description.childWhenCrimeHappened.myself',
                        ['|role.all', 'childWhenCrimeHappened', 'proxy', 'deceased'],
                        'explain-reason-info.description.childWhenCrimeHappened.deceased',
                        ['|role.all', 'childWhenCrimeHappened', 'proxy'],
                        'explain-reason-info.description.childWhenCrimeHappened.proxy',
                        ['|role.all', 'myself'],
                        'explain-reason-info.description.adultWhenCrimeHappened.myself',
                        ['|role.all', 'proxy', 'deceased'],
                        'explain-reason-info.description.adultWhenCrimeHappened.deceased',
                        ['|role.all', 'proxy'],
                        'explain-reason-info.description.adultWhenCrimeHappened.proxy'
                    ]
                },
                'q-applicant-explain-reason-for-delay-application': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'childWhenCrimeHappened'],
                        'q-applicant-explain-reason-for-delay-application.title.childWhenCrimeHappened',
                        ['|role.all'],
                        'q-applicant-explain-reason-for-delay-application.title.adultWhenCrimeHappened'
                    ],
                    type: 'string',
                    description:
                        "You'll need to provide supporting evidence for this. We'll let you know how to do this.",
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Explanation must be 2,000 characters or less'
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
            ],
            options: {
                outputOrder: [
                    'explain-reason-info',
                    'q-applicant-explain-reason-for-delay-application'
                ],
                properties: {
                    'q-applicant-explain-reason-for-delay-application': {
                        options: {
                            outputOrder: [
                                'q-applicant-explain-reason-for-delay-application',
                                'help-reason-for-delay'
                            ],
                            macroOptions: {
                                label: {
                                    classes: 'govuk-label--m'
                                }
                            }
                        }
                    }
                }
            }
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
