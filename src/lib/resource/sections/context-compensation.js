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
                ns: 'p--context-compensation'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-compensation',
                    resources: {
                        'compensation-context': {
                            description:
                                '<p class="govuk-body">We\'re going to ask about any other compensation you\'ve been paid for your injuries.</p><p class="govuk-body">This is so we can work out how much compensation you may receive.</p>',
                            'description_someone-else':
                                '<p class="govuk-body">We\'re going to ask about any other compensation the child has been paid for their injuries.</p><p class="govuk-body">This is so we can work out how much compensation the child may receive.</p>'
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
                    description: 'l10nt:compensation-context.description{?lng,context,ns}'
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
                    target: 'p-applicant-have-you-applied-to-us-before'
                }
            ]
        }
    }
};
