'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-physical-help'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-help': {
                    title: 'Was the person who died your main carer?',
                    type: 'boolean',
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
                            theme: 'relationship-to-deceased'
                        },
                        summary: {
                            title: 'Was the person who died your main carer?'
                        }
                    }
                },
                'physical-help-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Who is a main carer?",html: \'<p class="govuk-body">A main carer is someone who provides regular help with care needs such as:</p></p><ul class="govuk-list govuk-list--bullet"><li>personal hygiene</li><li>continence management</li><li>food preparation and eating</li><li>medication and simple treatments</li><li>keeping you safe from harm</li></ul>\'}) }}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-help':
                        'Select yes if the person who died was your main carer'
                }
            },
            examples: [
                {
                    'q-applicant-physical-help': 'true'
                },
                {
                    'q-applicant-physical-help': 'false'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-help': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-other-claimants'
                }
            ]
        }
    }
};
