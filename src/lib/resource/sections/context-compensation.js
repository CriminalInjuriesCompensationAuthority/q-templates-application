'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p--context-compensation'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-compensation',
                    resources: {
                        'compensation-context': {
                            description: {
                                myself:
                                    '<p class="govuk-body">We\'re going to ask about any other compensation or damages you are or may be entitled to, in connection with this crime.</p><p class="govuk-body">This includes any compensation or damages you\'ve not already received.</p><p class="govuk-body">This is so we can work out how much compensation you may receive from us.</p>',
                                proxy:
                                    '<p class="govuk-body">We\'re going to ask about any other compensation or damages the victim is or may be entitled to, in connection with this crime.</p><p class="govuk-body">This includes any compensation or damages they have not already received.</p><p class="govuk-body">This is so we can work out how much compensation they may receive from us.</p>',
                                deceased:
                                    '<p class="govuk-body">We\'re going to ask about any other compensation or damages the claimant may be entitled to, in connection with this crime.</p><p class="govuk-body">This includes any compensation or damages they have not already received.</p><p class="govuk-body">This is so we can work out how much compensation they may receive from us.</p>'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'compensation-context': {
                    title: 'Other compensation',
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'compensation-context.description.myself',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'compensation-context.description.proxy',
                        ['|role.all', 'proxy', 'deceased'],
                        'compensation-context.description.deceased'
                    ]
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
                    target: 'p-applicant-have-you-applied-to-us-before'
                }
            ]
        }
    }
};
