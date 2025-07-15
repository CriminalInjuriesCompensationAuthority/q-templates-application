'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'paying-awards': {
                    title: 'Paying awards',
                    description: `<p class="govuk-body">If you apply for yourself, we'll pay any award to you. You do not have to use a legal or other representative to make a claim.</p>
                        <h2 class="govuk-heading-m">Using a representative</h2>
                        <p class="govuk-body">If you decide to use a representative:</p>
                        <ul class="govuk-list govuk-list--bullet"><li>we cannot pay their costs</li>
                        <li>we'll communicate directly with your representative instead of you</li></ul>
                        <p class="govuk-body">If you decide to stop using a representative, tell us in writing - by post or email - as soon as possible.</p>
                        <p class="govuk-body">If we make an award, we'll pay it to your legal representative.</p>
                        <p class="govuk-body">If you have a dispute with your legal representative about their costs, we'll be unable to pay your full award until the dispute is resolved.</p>
                        <h2 class="govuk-heading-m">Adults with incapacity</h2>
                        <p class="govuk-body">For an adult with incapacity, we'll pay either:</p>
                        <ul class="govuk-list govuk-list--bullet"><li>the person with legal responsibility for them, or</li>
                        <li>that person's legal representative</li></ul>
                        <h2 class="govuk-heading-m">Children</h2>
                        <p class="govuk-body">For a child, we'll put the money in an interest-earning deposit account until they're 18. When they're 18, we'll contact them directly to arrange payment.</p>
                        <h2 class="govuk-heading-m">Trusts</h2>
                        <p class="govuk-body">In some cases, we may decide it's necessary to pay the award into a trust.</p>`
                }
            },
            meta: {
                pageType: 'context'
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-declaration',
                    cond: ['|role.all', 'myself', 'adult', 'nonDeceased']
                },
                {
                    target: 'p-applicant-declaration-deceased',
                    cond: ['|role.all', 'myself', 'adult', 'deceased']
                },
                {
                    target: 'p-rep-declaration-under-12',
                    cond: [
                        'and',
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'rep', 'nonDeceased'],
                            ['|role.all', 'adult', 'incapable', 'rep', 'nonDeceased']
                        ]
                    ]
                },
                {
                    target: 'p-rep-declaration-under-12-deceased',
                    cond: [
                        'and',
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'rep', 'deceased'],
                            ['|role.all', 'adult', 'incapable', 'rep', 'deceased']
                        ]
                    ]
                },
                {
                    target: 'p-rep-declaration-12-and-over',
                    cond: [
                        'and',
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
                        ['|role.all', 'childOver12', 'rep', 'nonDeceased']
                    ]
                },
                {
                    target: 'p-rep-declaration-12-and-over-deceased',
                    cond: [
                        'and',
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
                        ['|role.all', 'childOver12', 'rep', 'deceased']
                    ]
                },
                {
                    target: 'p-mainapplicant-declaration-under-12',
                    cond: [
                        'and',
                        ['|role.all', 'mainapplicant'],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'nonDeceased'],
                            ['|role.all', 'adult', 'incapable', 'nonDeceased']
                        ]
                    ]
                },
                {
                    target: 'p-mainapplicant-declaration-under-12-deceased',
                    cond: [
                        'and',
                        ['|role.all', 'mainapplicant'],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'deceased'],
                            ['|role.all', 'adult', 'incapable', 'deceased']
                        ]
                    ]
                },
                {
                    target: 'p-rep-declaration-under-12',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'nonDeceased'],
                            ['|role.all', 'adult', 'incapable', 'nonDeceased']
                        ]
                    ]
                },
                {
                    target: 'p-rep-declaration-under-12-deceased',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        [
                            'or',
                            ['|role.all', 'childUnder12', 'deceased'],
                            ['|role.all', 'adult', 'incapable', 'deceased']
                        ]
                    ]
                },
                {
                    target: 'p-mainapplicant-declaration-12-and-over',
                    cond: ['|role.all', 'mainapplicant', 'childOver12', 'nonDeceased']
                },
                {
                    target: 'p-mainapplicant-declaration-12-and-over-deceased',
                    cond: ['|role.all', 'mainapplicant', 'childOver12', 'deceased']
                },
                {
                    target: 'p-rep-declaration-12-and-over',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        ['|role.all', 'childOver12', 'nonDeceased']
                    ]
                },
                {
                    target: 'p-rep-declaration-12-and-over-deceased',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        ['|role.all', 'childOver12', 'deceased']
                    ]
                }
            ]
        }
    }
};
