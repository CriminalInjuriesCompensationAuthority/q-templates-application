'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-offender-enter-offenders-name'],
            additionalProperties: false,
            properties: {
                'q-offender-enter-offenders-name': {
                    title: "Enter the offender's name",
                    type: 'string',
                    description: 'We will never contact the offender.',
                    maxLength: 120,
                    errorMessage: {maxLength: "Offender's name must be 120 characters or less"},
                    meta: {
                        classifications: {
                            theme: 'offender'
                        },
                        summary: {
                            title: 'Offenders name'
                        }
                    }
                },
                'additional-info-help-text': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with offender\'s name",html: \'<p class="govuk-body">If there was more than 1 offender, you can provide additional details later in this claim.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {'q-offender-enter-offenders-name': "Enter the offender's name"}
            },
            examples: [{'q-offender-enter-offenders-name': 'Foo Bar'}],
            invalidExamples: [{'q-offender-enter-offenders-name': 12345}]
        }
    },
    route: {on: {ANSWER: [{target: 'p-offender-do-you-have-contact-with-offender'}]}}
};
