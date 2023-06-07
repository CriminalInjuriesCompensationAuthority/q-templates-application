'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p--context-offender'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-offender',
                    resources: {
                        'offender-context': {
                            description: {
                                myself:
                                    '<p class="govuk-body">We’re going to ask:</p><ul class="govuk-list govuk-list--bullet"><li>the offender\'s name (if you know it)</li><li>if you have contact with the offender</li></ul><p class="govuk-body">This is so we can make sure the offender does not benefit from any compensation you get.</p><p class="govuk-body">We will never contact the offender.</p>',
                                proxy:
                                    '<p class="govuk-body">We’re going to ask:</p><ul class="govuk-list govuk-list--bullet"><li>the offender\'s name (if you know it)</li><li>if the victim has contact with the offender</li></ul><p class="govuk-body">This is so we can make sure the offender does not benefit from any compensation.</p><p class="govuk-body">We will never contact the offender.</p>',
                                deceased:
                                    '<p class="govuk-body">We’re going to ask you the offender’s name (if you know it)</p><p class="govuk-body">This is so we can make sure the offender would not benefit from any compensation the claimant may be entitled to.</p><p class="govuk-body">We will never contact the offender.</p>'
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
                'offender-context': {
                    title: 'About the offender',
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself', 'nonDeceased'],
                        'offender-context.description.myself',
                        ['|role.all', 'myself', 'deceased'],
                        'offender-context.description.myself',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'offender-context.description.proxy',
                        ['|role.all', 'proxy', 'deceased'],
                        'offender-context.description.deceased'
                    ]
                }
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
                    target: 'p-offender-do-you-know-the-name-of-the-offender'
                }
            ]
        }
    }
};
