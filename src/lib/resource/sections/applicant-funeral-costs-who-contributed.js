'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-funeral-costs-who-contributed'],
            additionalProperties: false,
            properties: {
                'q-applicant-funeral-costs-who-contributed': {
                    title: 'Who else has contributed to the funeral costs?',
                    type: 'string',
                    description:
                        'Enter the names of people, charities or organisations who helped to pay for the funeral.',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Description must be 2000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'funeral-costs'
                        },
                        summary: {
                            title: 'Who else has contributed to the funeral costs?'
                        }
                    }
                },
                'funeral-costs-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What funeral costs you can claim?",html: \'<p class="govuk-body">Funeral costs can include:</p></p><ul class="govuk-list govuk-list--bullet"><li>funeral service (including casket, burial or cremation)</li><li>tombtone/memorial (if reasonable)</li><li>flowers</li><li>newspaper announcements</li><li>catering and refreshments (up to a limit of £500 only)</li><li>costs of transporting the person who died back to their country of origin</li></ul>\'}) }}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-funeral-costs-who-contributed':
                        'Tell us who else has contributed to the funeral costs'
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
                    target: 'p-applicant-funeral-costs-total'
                }
            ]
        }
    }
};
