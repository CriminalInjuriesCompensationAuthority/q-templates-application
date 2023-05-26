'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'context-funeral-costs': {
                    title: 'Funeral costs',
                    description:
                        '<p class="govuk-body">You may be entitled to claim back money spent on the funeral (up to £5,000).</p><p class="govuk-body">We’re now going to ask you some questions about funeral costs. This includes:</p><ul class="govuk-list govuk-list--bullet"><li>if you’re paying any of the funeral costs</li><li>if anyone else is contributing to the funeral costs</li><li>the cost of the funeral</li><li>what type of proof you need to provide and how to send it to us</li></ul>{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What funeral costs can be claimed",html: \'<p class="govuk-body">Funeral costs can include:</p></p><ul class="govuk-list govuk-list--bullet"><li>funeral service (including casket, burial or cremation)</li><li>tombstone</li><li>memorials</li><li>flowers</li><li>newspaper announcements</li><li>catering and non-alcoholic refreshments</li><li>costs of transporting the person who died back to their country of origin</li></ul>\'}) }}'
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
                    target: 'p-applicant-funeral-costs-paid'
                }
            ]
        }
    }
};
