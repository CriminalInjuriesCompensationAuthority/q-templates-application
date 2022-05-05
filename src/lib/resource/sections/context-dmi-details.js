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
                ns: 'p--context-dmi-details'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-dmi-details',
                    resources: {
                        'details-context': {
                            description:
                                '<p class="govuk-body">We\'re going to ask how the crime affected your mental health.</p><p class="govuk-body">This helps us decide if you\'ll get a payment for mental injury.</p><h2 class="govuk-heading-m">Disabling mental injury</h2><p class="govuk-body">We can only pay for a \'disabling mental injury\' that:</p><ul class="govuk-list govuk-list--bullet"><li>makes it much harder to do things you would normally do</li><li>lasts six weeks or more</li><li>is confirmed by a diagnosis or prognosis by a clinical psychologist or psychiatrist</li></ul><p class="govuk-body">You can apply if you do not have a diagnosis yet. We\'ll tell you what medical evidence you\'ll need. This may be a copy of your medical record, a GP report or a specialist report.</p>',
                            'description_someone-else':
                                '<p class="govuk-body">We\'re going to ask how the crime affected their mental health.</p><p class="govuk-body">This helps us decide if they get a payment for mental injury.</p><h2 class="govuk-heading-m">Disabling mental injury</h2><p class="govuk-body">We can only pay for a \'disabling mental injury\' that:</p><ul class="govuk-list govuk-list--bullet"><li>makes it much harder to do things they would normally do</li><li>lasts six weeks or more</li><li>is confirmed by a diagnosis or prognosis by a clinical psychologist or psychiatrist</li></ul><p class="govuk-body">You can apply if they do not have a diagnosis yet. We\'ll tell you what medical evidence they\'ll need. This may be a copy of their medical record, a GP report or a specialist report.</p>',
                            title: 'Your mental health',
                            'title_someone-else': "The victim's mental health"
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
                    target: 'p-applicant-do-you-have-disabling-mental-injury'
                }
            ]
        }
    }
};
