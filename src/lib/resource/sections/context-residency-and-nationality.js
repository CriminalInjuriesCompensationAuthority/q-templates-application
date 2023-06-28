'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p--context-residency-and-nationality'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--context-residency-and-nationality',
                    resources: {
                        'residency-context': {
                            title: {
                                applicant: 'About your residency and nationality'
                            },
                            description: {
                                applicant:
                                    '<p class="govuk-body">We\'re going to ask you some questions about your residency and nationality when the crime happened. This is so we can work out if you\'re eligible to get compensation from us for this crime.</p><p class="govuk-body"><a href="https://www.gov.uk/guidance/criminal-injuries-compensation-residency-and-nationality" target="_blank">Find out how the Criminal Injuries Compensation Scheme\'s residency and nationality requirements work</a>.</p>'
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
                'residency-context': {
                    //prettier-ignore
                    title: [
                        '|l10nt',
                        ['|role.all'],
                        'residency-context.title.applicant'
                    ],
                    description: [
                        '|l10nt',
                        ['|role.all'],
                        'residency-context.description.applicant'
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
                    target: 'p-applicant-british-citizen'
                }
            ]
        }
    }
};
