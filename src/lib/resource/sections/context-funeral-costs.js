'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'context-funeral-costs': {
                    title: 'Funeral coast',
                    description:
                        '<p class="govuk-body">You maybe entitled to claim back money you have spent on the funeral. You can reimburse anyone who met the cost of the funeral</p>{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What funeral costs you can claim?",html: \'<p class="govuk-body">Funeral costs can include:</p></p><ul class="govuk-list govuk-list--bullet"><li>funeral service (including casket, burial or cremation)</li><li>tombtone/memorial (if reasonable)</li><li>flowers</li><li>newspaper announcements</li><li>catering and refreshments (up to a limit of £500 only)</li><li>costs of transporting the person who died back to their country of origin</li></ul>\'}) }}'
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
