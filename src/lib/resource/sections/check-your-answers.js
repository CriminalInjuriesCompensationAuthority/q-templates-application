'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'p-check-your-answers': {
                    title: 'Check your answers',
                    type: 'object',
                    properties: {
                        summaryInfo: {
                            type: 'object',
                            urlPath: 'apply',
                            editAnswerText: 'Change',
                            summaryStructure: [],
                            lookup: {}
                        }
                    }
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
                    target: 'p-applicant-declaration',
                    cond: [
                        '==',
                        '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                        'myself'
                    ]
                },
                {
                    target: 'p--download-your-answers',
                    cond: [
                        'or',
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SOLS'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'CMCO'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SUPP'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SSER']
                    ]
                },
                {
                    target: 'p-mainapplicant-declaration-under-12',
                    cond: [
                        'and',
                        [
                            '==',
                            '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                            'someone-else'
                        ],
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                            '<', // is less than ...
                            '-12', // 12 ...
                            'years' // years (before, due to the negative (-12) ...
                            // today's date (no second date given. defaults to today's date).
                        ]
                    ]
                },
                {
                    target: 'p-mainapplicant-declaration-12-and-over'
                }
            ]
        }
    }
};
