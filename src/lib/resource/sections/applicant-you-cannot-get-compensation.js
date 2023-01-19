'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'you-cannot-get-compensation': {
                    title: 'You cannot get compensation',
                    description:
                        '{% from "components/warning-text/macro.njk" import govukWarningText %}<p class="govuk-body">You cannot get compensation if the crime has not been reported to the police.</p>{{ govukWarningText({text: "If you submit a claim before the crime has been reported to the police, the claim will be refused and you will not be able to try again.",iconFallbackText: "Warning"}) }}'
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
                    target: 'p-applicant-fatal-claim'
                }
            ]
        }
    }
};
