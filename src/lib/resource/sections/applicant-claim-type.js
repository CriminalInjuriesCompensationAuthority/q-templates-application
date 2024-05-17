'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-claim-type'],
            additionalProperties: false,
            properties: {
                'q-applicant-claim-type': {
                    title: 'What do you want to claim?',
                    type: 'boolean',
                    oneOf: [
                        {
                            title: 'I want to claim funeral costs only',
                            description:
                                'The person who paid for the funeral could be eligible for funeral costs.',
                            const: true
                        },
                        {
                            title: 'I want to make a full claim',
                            description:
                                'In addition to funeral costs anyone who is a qualifying relative could be eligible for other payments including bereavement, dependency, and child’s payments.',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'about-application'
                        },
                        summary: {
                            title: 'What do you want to claim?'
                        }
                    }
                },
                'applicant-claim-type-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Other payments that qualifying relatives could be eligible for", html: \'<p class="govuk-body"><p class="govuk-body"><b>Bereavement payment</b></p><p class="govuk-body">Relatives of the person who died who could be eligible for a bereavement payment include:</p></p><ul class="govuk-list govuk-list--bullet"><li>parents</li><li>children (this includes adult children and children born after the crime happened)</li><li>a spouse or civil partner who was living in the same household or living apart but financially dependent on the person who died</li><li>a partner who was living in the same household continuously for at least 2 years immediately before the person died</li><li>a partner, spouse or civil partner who did not live with the person who died because of ill health</li></ul><p class="govuk-body"><b>Dependency payment</b></p><p>Relatives who were financially or physically dependent on the person who died who could be eligible for a dependency payment include:</p></p><ul class="govuk-list govuk-list--bullet"><li>all those eligible for a bereavement payment</li><li>a former spouse or former civil partner</li></ul><p class="govuk-body"><b>Child’s payment</b></p><p>Children of the person who died could also be eligible for a child’s payment. They must have been under 18 at the time of the person’s death and reliant on them for parental support.</p>\'}) }}'
                }
            },
            meta: {
                'task-list': {
                    task: 't-about-application',
                    taskFinalPage: true
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-claim-type': 'Select what you want to claim'
                }
            },
            examples: [
                {
                    'q-applicant-claim-type': true
                },
                {
                    'q-applicant-claim-type': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-claim-type': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-task-list'
                }
            ]
        }
    }
};
