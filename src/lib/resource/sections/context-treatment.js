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
                ns: 'p--context-treatment'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-treatment',
                    resources: {
                        'details-context': {
                            description:
                                '<p class="govuk-body">We\'re going to ask for some details about your treatment</p><p class="govuk-body">We\'ll use these to understand:</p><ul class="govuk-list govuk-list--bullet"><li>if you\'ve told your GP about your injuries</li><li>who has evidence of your injuries</li></ul><p class="govuk-body">We often have to ask your GP or other health service provider for evidence about your injuries and treatment. We will let you know if we need to do this.</p>',
                            'description_someone-else':
                                '<p class="govuk-body">We\'re going to ask for some details about their treatment.</p><p class="govuk-body">We\'ll use these to understand:</p><ul class="govuk-list govuk-list--bullet"><li>if your GP is aware of the victim\'s injuries</li><li>who has evidence of their injuries</li></ul><p class="govuk-body">We often have to ask their GP or other health service provider for evidence about the victim\'s injuries and treatment. We will let you know if we need to do this.</p>',
                            title: 'Your treatment',
                            'title_someone-else': "The victim's treatment"
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
                'details-context': {
                    title: 'l10nt:details-context.title{?lng,context,ns}',
                    description: 'l10nt:details-context.description{?lng,context,ns}'
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
                    target: 'p-applicant-treatment-for-physical-injuries',
                    cond: [
                        '==',
                        '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                        true
                    ]
                },
                {
                    target: 'p-applicant-select-treatments',
                    cond: [
                        '==',
                        '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                        true
                    ]
                },
                {
                    target: 'p-applicant-are-you-registered-with-gp'
                }
            ]
        }
    }
};
