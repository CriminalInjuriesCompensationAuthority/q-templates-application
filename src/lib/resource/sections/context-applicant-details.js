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
                ns: 'p--context-applicant-details'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-applicant-details',
                    resources: {
                        'details-context': {
                            title: 'Your details',
                            'title_someone-else': 'Victim details',
                            description:
                                '<p class="govuk-body">We’re going to ask for some details about you.</p><p class="govuk-body">We’ll use these to:</p><ul class="govuk-list govuk-list--bullet"><li>contact you</li><li>get a report about the crime from the police</li></ul>',
                            'description_someone-else':
                                '<p class="govuk-body">We’re going to ask for some details about the victim.</p><p class="govuk-body">We’ll use these to get a report about the crime from the police.</p>'
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
                    target: 'p-applicant-enter-your-name',
                    cond: ['|role.all', 'proxy']

                    // [
                    //     '==',
                    //     '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                    //     'someone-else'
                    // ]
                },
                {
                    target: 'p-applicant-confirmation-method'
                }
            ]
        }
    }
};
