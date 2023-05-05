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
                    title: 'Were you reliant on the person who died for regular physical help?',
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
                            title:
                                'Were you reliant on the person who died for regular physical help?'
                        }
                    }
                },
                'physical-help-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What physical help means",html: \'<p class="govuk-body">Physical help includes regular help with care needs such as:</p></p><ul class="govuk-list govuk-list--bullet"><li>personal hygiene</li><li>continence management</li><li>food preparation and eating</li><li>medication and simple treatments</li><li>keeping you safe from harm</li></ul>\'}) }}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-help':
                        'Select yes if you were reliant on the person who died for regular physical help'
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
