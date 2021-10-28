'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--when-was-the-crime-reported-to-police'],
            additionalProperties: false,
            properties: {
                'q--when-was-the-crime-reported-to-police': {
                    title: 'When was the crime reported to the police?',
                    meta: {
                        keywords: {
                            format: {
                                precision: 'YYYY-MM-DD'
                            }
                        },
                        classifications: {
                            theme: 'crime'
                        }
                    },
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 28 2 2020. You can enter an approximate date.',
                    errorMessage: {
                        format:
                            'Enter the date the crime was reported to police and include a day, month and year'
                    }
                },
                'additional-info-help-text': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with when it was reported",html: \'<p class="govuk-body">If you enter an approximate date or if you reported the crime on more than one occasion, you can provide additional details later in this claim.</p>\'})}}'
                }
            },
            errorMessage: {
                required: {
                    'q--when-was-the-crime-reported-to-police':
                        'Enter the date the crime was reported to the police'
                }
            },
            examples: [{'q--when-was-the-crime-reported-to-police': '2020-01-01T00:00:00.000Z'}],
            invalidExamples: [
                {'q--when-was-the-crime-reported-to-police': 12345},
                {'q--when-was-the-crime-reported-to-police': 'not a date'}
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target:
                        'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                    cond: [
                        'dateDifferenceGreaterThanTwoDays',
                        '$.answers.p--when-was-the-crime-reported-to-police.q--when-was-the-crime-reported-to-police',
                        '$.answers.p-applicant-when-did-the-crime-happen.q-applicant-when-did-the-crime-happen'
                    ]
                },
                {
                    target:
                        'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                    cond: [
                        'dateDifferenceGreaterThanTwoDays',
                        '$.answers.p--when-was-the-crime-reported-to-police.q--when-was-the-crime-reported-to-police',
                        '$.answers.p-applicant-when-did-the-crime-stop.q-applicant-when-did-the-crime-stop'
                    ]
                },
                {target: 'p--which-police-force-is-investigating-the-crime'}
            ]
        }
    }
};
