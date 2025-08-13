'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p--context-injuries-not-eligible'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-injuries-not-eligible',
                    resources: {
                        'context-injuries-not-eligible': {
                            title: {
                                myself: 'Based on your answers, you may not be eligible',
                                proxy: 'Based on your answers, they may not be eligible'
                            },
                            description: {
                                myself:
                                    '<p class="govuk-body">Based on the injuries you\'ve told us about, you may not be eligible for compensation.</p><ul class="govuk-list govuk-list--bullet"><li>If you want to end your application, you can close this window or tab.</li><li>Or you can continue with your application.</li></ul><p class="govuk-body">You\'ll be able to check your answers later if you decide to continue.</p>',
                                proxy:
                                    '<p class="govuk-body">Based on the injuries you\'ve told us about, they may not be eligible for compensation.</p><ul class="govuk-list govuk-list--bullet"><li>If you want to end your application, you can close this window or tab.</li><li>Or you can continue with your application.</li></ul><p class="govuk-body">You\'ll be able to check your answers later if you decide to continue.</p>'
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
                'context-injuries-not-eligible': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'context-injuries-not-eligible.title.myself',
                        ['|role.all', 'proxy'],
                        'context-injuries-not-eligible.title.proxy'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'context-injuries-not-eligible.description.myself',
                        ['|role.all', 'proxy'],
                        'context-injuries-not-eligible.description.proxy'
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
            ],
            options: {
                submitButton: {
                    text: 'Continue anyway'
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-crime-impact'
                }
            ]
        }
    }
};
