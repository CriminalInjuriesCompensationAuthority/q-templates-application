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
                ns: 'p--context-physical-injuries'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-physical-injuries',
                    resources: {
                        'details-context': {
                            title: 'About your injuries',
                            'title_someone-else': "About the child's injuries",
                            description:
                                '<p class="govuk-body">We’re going to ask about any physical injuries caused by the crime.</p><p class="govuk-body">This helps us decide if a payment can be made for any physical injuries.</p><p class="govuk-body">We’ll ask you about your mental health later in the application.</p>',
                            'description_someone-else':
                                '<p class="govuk-body">We’re going to ask about any physical injuries caused by the crime.</p><p class="govuk-body">This helps us decide if a payment can be made for any physical injuries.</p><p class="govuk-body">We’ll ask you about the child\'s mental health later in the application.</p>'
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
                    target: 'p-applicant-are-you-claiming-for-physical-injuries'
                }
            ]
        }
    }
};
