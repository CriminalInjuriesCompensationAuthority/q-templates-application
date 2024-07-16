'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-context-rep-details'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-context-rep-details',
                    resources: {
                        'context-rep-details': {
                            description: {
                                proxy: {
                                    nonDeceased:
                                        '<p class="govuk-body">We\'re going to ask for some details about you.</p><p class="govuk-body">As you\'re the victim\'s representative, we\'ll use these details to contact you about this application.</p>',
                                    deceased:
                                        '<p class="govuk-body">We\'re going to ask for some details about you.</p><p class="govuk-body">As you\'re the claimant\'s representative, we\'ll use these details to contact you about this application.</p>'
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
            additionalProperties: false,
            properties: {
                'context-rep-details': {
                    title: 'Your details',
                    description: [
                        '|l10nt',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'context-rep-details.description.proxy.nonDeceased',
                        ['|role.all', 'proxy', 'deceased'],
                        'context-rep-details.description.proxy.deceased'
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
            'ANSWER__P--CONTEXT-REP-DETAILS': [
                {
                    target: 'p-rep-type'
                }
            ]
        }
    }
};
