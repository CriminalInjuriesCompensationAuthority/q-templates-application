'use strict';

module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p-applicant-financial-help'
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p-applicant-financial-help',
                    resources: {
                        'applicant-financial-help': {
                            title: {
                                myself:
                                    'Were you reliant on the person who died for regular financial help?',
                                proxy:
                                    'Was the claimant reliant on the person who died for regular financial help?'
                            },
                            error: {
                                myself:
                                    'Select yes if you were reliant on the person who died for regular financial help',
                                proxy:
                                    'Select yes if the claimant was reliant on the person who died for regular financial help.'
                            }
                        }
                    }
                }
            ]
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-financial-help'],
            additionalProperties: false,
            properties: {
                'q-applicant-financial-help': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-financial-help.title.myself',
                        ['|role.all', 'proxy'],
                        'applicant-financial-help.title.proxy'
                    ],
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
                            title: [
                                '|l10nt',
                                ['|role.all', 'myself'],
                                'applicant-financial-help.title.myself',
                                ['|role.all', 'proxy'],
                                'applicant-financial-help.title.proxy'
                            ]
                        }
                    }
                },
                'financial-help-info': {
                    description:
                        '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "What financial help means",html: \'<p class="govuk-body">Financial help includes regular help with the cost of household bills, or day to day expenses and living costs.</p>\'}) }}'
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-financial-help': [
                        '|l10nt',
                        ['|role.all', 'myself'],
                        'applicant-financial-help.error.myself',
                        ['|role.all', 'proxy'],
                        'applicant-financial-help.error.proxy'
                    ]
                }
            },
            examples: [
                {
                    'q-applicant-financial-help': true
                },
                {
                    'q-applicant-financial-help': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-financial-help': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-physical-help'
                }
            ]
        }
    }
};
