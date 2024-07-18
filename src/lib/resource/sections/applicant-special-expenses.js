'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-special-expenses'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-special-expenses',
                    resources: {
                        'q-applicant-special-expenses': {
                            title: {
                                myself:
                                    'Have you paid for, or will you need to pay for any of these things in the future?',
                                capable:
                                    'Has the victim paid for, or will they need to pay for any of these things in the future',
                                incapable:
                                    'Have you or the victim paid for, or will you need to pay for any of these things in the future'
                            },
                            summary: {
                                myself:
                                    'Have you paid for, or will you need to pay for any special expenses in the future?',
                                capable:
                                    'Has the victim paid for, or will they need to pay for any special expenses in the future',
                                incapable:
                                    'Have you or the victim paid for, or will you need to pay for any special expenses in the future'
                            },
                            error: {
                                myself:
                                    'Select yes if you have paid for, or will need to pay for any of these things in the future',
                                capable:
                                    'Select yes if the victim has paid for, or will need to pay for any of these things in the future',
                                incapable:
                                    'Select yes if you or the victim has paid for, or will need to pay for any of these things in the future'
                            }
                        },
                        'special-expenses-info': {
                            description: {
                                myself:
                                    '<p class="govuk-body">We need to know if you have paid, or will need to pay, for any of the following things in the future, as a result of the crime:</p><ul class="govuk-list govuk-list--bullet"><li><b>NHS or other state health services treatments</b> - such as dental or eye care</li><li><b>care or supervision</b> - such as someone preparing meals</li><li><b>changes to your home</b> - such as installing a stair lift</li><li><b>special equipment</b> - such as a wheel chair or adaptations to a car</li><li><b>replacing or repairing physical aids</b> - such as a walking stick or glasses</li></ul>',
                                capable:
                                    '<p class="govuk-body">We need to know if the victim has paid, or will need to pay, for any of the following things in the future, as a result of the crime:</p><ul class="govuk-list govuk-list--bullet"><li><b>NHS or other state health services treatments</b> - such as dental or eye care</li><li><b>care or supervision</b> - such as someone preparing their meals</li><li><b>changes to their home</b> - such as installing a stair lift</li><li><b>special equipment</b> - such as a wheel chair or adaptations to a car</li><li><b>replacing or repairing physical aids</b> - such as a walking stick or glasses</li></ul>',
                                incapable:
                                    '<p class="govuk-body">We need to know if you or the victim has paid, or will need to pay, for any of the following things in the future, as a result of the crime:</p><ul class="govuk-list govuk-list--bullet"><li><b>NHS or other state health services treatments</b> - such as dental or eye care</li><li><b>care or supervision</b> - such as someone preparing their meals</li><li><b>changes to their home</b> - such as installing a stair lift</li><li><b>special equipment</b> - such as a wheel chair or adaptations to a car</li><li><b>replacing or repairing physical aids</b> - such as a walking stick or glasses</li></ul><p class="govuk-body">We also need to know if you will need to pay for either of the following in the future:</p><ul class="govuk-list govuk-list--bullet"><li>costs of administering their affairs if they lack mental capacity to do so</li><li>fees to the Court of Protection, Public Guardian or Sheriff Court</li></ul>'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-special-expenses'],
            additionalProperties: false,
            properties: {
                'special-expenses-info': {
                    title: 'Special expenses',
                    description: [
                        '|l10nt',
                        ['or', ['|role.all', 'myself'], ['|role.all', 'mainapplicant', 'child']],
                        'special-expenses-info.description.myself',
                        ['|role.all', 'capable'],
                        'special-expenses-info.description.capable',
                        ['|role.all'],
                        'special-expenses-info.description.incapable'
                    ]
                },
                'q-applicant-special-expenses': {
                    type: 'boolean',
                    title: [
                        '|l10nt',
                        ['or', ['|role.all', 'myself'], ['|role.all', 'mainapplicant', 'child']],
                        'q-applicant-special-expenses.title.myself',
                        ['|role.all', 'capable'],
                        'q-applicant-special-expenses.title.capable',
                        ['|role.all'],
                        'q-applicant-special-expenses.title.incapable'
                    ],
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
                            theme: 'special-expenses'
                        },
                        summary: {
                            title: [
                                '|l10nt',
                                [
                                    'or',
                                    ['|role.all', 'myself'],
                                    ['|role.all', 'mainapplicant', 'child']
                                ],
                                'q-applicant-special-expenses.summary.myself',
                                ['|role.all', 'capable'],
                                'q-applicant-special-expenses.summary.capable',
                                ['|role.all'],
                                'q-applicant-special-expenses.summary.incapable'
                            ]
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-special-expenses': [
                        '|l10nt',
                        ['or', ['|role.all', 'myself'], ['|role.all', 'mainapplicant', 'child']],
                        'q-applicant-special-expenses.error.myself',
                        ['|role.all', 'capable'],
                        'q-applicant-special-expenses.error.capable',
                        ['|role.all'],
                        'q-applicant-special-expenses.error.incapable'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-special-expenses': true
                },
                {
                    'q-applicant-special-expenses': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-special-expenses': 'foo'
                }
            ],
            options: {
                outputOrder: ['special-expenses-info', 'q-applicant-special-expenses'],
                properties: {
                    'q-applicant-special-expenses': {
                        options: {
                            macroOptions: {
                                fieldset: {
                                    legend: {
                                        classes: 'govuk-fieldset__legend--m'
                                    }
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
                    target: '#t_applicant_about-treatment'
                }
            ]
        }
    }
};
