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
                ns: 'p-applicant-se-home-care'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-se-home-care',
                    resources: {
                        'q-applicant-se-home-care': {
                            title:
                                'Have you required care or supervision because of your injuries?',
                            'title_someone-else':
                                'Have they required care or supervision because of their injuries?',
                            error: {
                                required:
                                    'Select yes if you required care or supervision because of your injuries',
                                'required_someone-else':
                                    'Select yes if they required care or supervision because of their injuries'
                            }
                        },
                        'help-understanding-care': {
                            description:
                                '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding care and supervision",html: \'<h2 class="govuk-heading-s">Care</h2><p class="govuk-body">This means you cannot do daily tasks yourself. For example, care may include but is not limited to:</p><ul class="govuk-list govuk-list--bullet"><li>preparing meals</li><li>help to eat</li><li>help going to the bathroom</li><li>taking medication</li><li>administering medical treatments</li></ul><h2 class="govuk-heading-s">Supervision</h2><p class="govuk-body">This means you pose a substantial danger to yourself or others without supervision.</p>\'})}}',
                            'description_someone-else':
                                '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding care and supervision",html: \'<h2 class="govuk-heading-s">Care</h2><p class="govuk-body">This means they cannot do daily tasks themselves. For example, care for the victim may include but is not limited to:</p><ul class="govuk-list govuk-list--bullet"><li>preparing meals</li><li>helping them to eat</li><li>helping them go to the bathroom</li><li>taking medication</li><li>administering other medical treatments</li></ul><h2 class="govuk-heading-s">Supervision</h2><p class="govuk-body">This means they pose a substantial danger to themselves or others without supervision.</p>\'})}}'
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-se-home-care'],
            additionalProperties: false,
            properties: {
                'q-applicant-se-home-care': {
                    type: 'boolean',
                    title: 'l10nt:q-applicant-se-home-care.title{?lng,context,ns}',
                    description:
                        'This can be care or supervision provided by a family member or other provider.',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'special-expenses'
                        },
                        summary: {
                            title: 'Care or supervision'
                        }
                    }
                },
                'help-understanding-care': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding care and supervision",html: \'<h2 class="govuk-heading-s">Care</h2><p class="govuk-body">This means they cannot do daily tasks themselves. For example, care for the victim may include but is not limited to:</p><ul class="govuk-list govuk-list--bullet"><li>preparing meals</li><li>helping them to eat</li><li>helping them go to the bathroom</li><li>taking medication</li><li>administering other medical treatments</li></ul><h2 class="govuk-heading-s">Supervision</h2><p class="govuk-body">This means they pose a substantial danger to themselves or others without supervision.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-se-home-care':
                        'l10nt:q-applicant-se-home-care.error.required{?lng,context,ns}'
                }
            },
            examples: [
                {
                    'q-applicant-se-home-care': true
                },
                {
                    'q-applicant-se-home-care': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-se-home-care': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-se-home-changes'
                }
            ]
        }
    }
};
