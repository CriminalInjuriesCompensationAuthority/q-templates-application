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
                    title: 'Select any injuries to the leg',
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'Broken leg', const: 'phyinj-117'},
                            {title: 'Nerve damage', const: 'phyinj-169'},
                            {title: 'Keyhole surgery to leg', const: 'phyinj-122'},
                            {title: 'Amputated leg', const: 'phyinj-126'},
                            {title: 'Paralysed leg', const: 'phyinj-127'},
                            {
                                title: 'Paraplegia (paralysis of lower half of the body)',
                                const: 'phyinj-138'
                            },
                            {
                                title: 'Hemiplegia (paralysis of one side of the the body)',
                                const: 'phyinj-137'
                            },
                            {title: 'Other', const: 'phyinj-149'}
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        },
                        summary: {
                            title: 'Leg injuries'
                        }
                    }
                },
                'q-applicant-physical-injuries-legs-leg-other': {
                    type: 'string',
                    title: 'Other leg injuries',
                    maxLength: 499,
                    errorMessage: {maxLength: 'Other leg injuries must be 499 characters or fewer'},
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
                        required: ['q-applicant-physical-injuries-legs-leg-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-legs-leg-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-legs-leg-other':
                                    'Enter other leg injuries'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {'q-applicant-physical-injuries': 'Select an injury from the list'}
            },
            examples: [{'q-applicant-physical-injuries': ['phyinj-117']}],
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
                    target: 'p-applicant-physical-injury-legs-knee',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'knee'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-ankle',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'ankle'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-foot',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'foot'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-toes',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'toes'
                    ]
                },
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
