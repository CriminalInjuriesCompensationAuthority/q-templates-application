'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-physical-injuries'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injuries': {
                    title: 'What parts of the toes were injured?',
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'Broken big toe', const: 'phyinj-129'},
                            {title: 'Broken toe', const: 'phyinj-130'},
                            {title: '2 or more broken toes', const: 'phyinj-136'},
                            {title: 'Amputated big toe', const: 'phyinj-131'},
                            {title: '1 amputated toe', const: 'phyinj-132'},
                            {title: '2 or more amputated toes', const: 'phyinj-133'},
                            {title: 'Paralysed toe', const: 'phyinj-148'},
                            {title: 'Other', const: 'phyinj-149'}
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        },
                        summary: {
                            title: 'Toe injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-legs-toes-other': {
                    type: 'string',
                    title: 'Other toe injuries',
                    maxLength: 499,
                    errorMessage: {maxLength: 'Other toe injuries must be 499 characters or fewer'},
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        }
                    }
                }
            },
            allOf: [{$ref: '#/definitions/if-other-then-other-textbox-is-required'}],
            definitions: {
                'if-other-then-other-textbox-is-required': {
                    if: {
                        properties: {
                            'q-applicant-physical-injuries': {contains: {const: 'phyinj-149'}}
                        },
                        required: ['q-applicant-physical-injuries']
                    },
                    then: {
                        required: ['q-applicant-physical-injuries-legs-toes-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-legs-toes-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-legs-toes-other':
                                    'Enter other toe injuries'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {'q-applicant-physical-injuries': 'Select an injury from the list'}
            },
            examples: [{'q-applicant-physical-injuries': ['phyinj-129']}],
            invalidExamples: [
                {'q-applicant-physical-injuries': 'not-an-array'},
                {'q-applicant-physical-injuries': ['not-a-key']}
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-physical-injury-legs-skin',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'skin'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-muscle',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'muscle'
                    ]
                },
                {target: 'p--context-dmi-details'}
            ]
        }
    }
};
