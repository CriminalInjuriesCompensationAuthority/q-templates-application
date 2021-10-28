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
                    title: 'Select any injuries to the neck',
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'Broken hyoid (throat bone)', const: 'phyinj-038'},
                            {title: 'Whiplash', const: 'phyinj-039'},
                            {
                                title: 'Quadriplegia or tetraplegia (paralysis of all 4 limbs)',
                                const: 'phyinj-139'
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
                        }
                    }
                },
                'q-applicant-physical-injuries-upper-neck-other': {
                    type: 'string',
                    title: 'Other neck injuries',
                    maxLength: 499,
                    errorMessage: {maxLength: 'Other neck injuries must be 499 characters or fewer'},
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
                        required: ['q-applicant-physical-injuries-upper-neck-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-upper-neck-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-upper-neck-other':
                                    'Enter other neck injuries'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {'q-applicant-physical-injuries': 'Select an injury from the list'}
            },
            examples: [{'q-applicant-physical-injuries': ['phyinj-039']}],
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
                    target: 'p-applicant-physical-injury-upper-eye',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'eye'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-upper-ear',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'ear'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-upper-nose',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'nose'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-upper-mouth',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'mouth'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-upper-skin',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'skin'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-upper-muscle',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'muscle'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'torso'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'arms'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury.q-applicant-physical-injury',
                        'legs'
                    ]
                },
                {target: 'p--context-dmi-details'}
            ]
        }
    }
};
