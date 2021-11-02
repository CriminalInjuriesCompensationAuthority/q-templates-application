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
                    title: 'Select any injuries to the nose',
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'Broken nose', const: 'phyinj-033'},
                            {title: 'Bloody nose', const: 'phyinj-052'},
                            {title: 'Loss of smell or taste', const: 'phyinj-040'},
                            {title: 'Loss of nose', const: 'phyinj-041'},
                            {title: 'Broken ethmoid (bone at base of nose)', const: 'phyinj-031'},
                            {
                                title: 'Broken ethmoid (bone at base of nose) needing operation',
                                const: 'phyinj-032'
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
                'q-applicant-physical-injuries-upper-nose-other': {
                    type: 'string',
                    title: 'Other nose injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other nose injuries must be 499 characters or fewer'
                    },
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
                        required: ['q-applicant-physical-injuries-upper-nose-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-upper-nose-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-upper-nose-other':
                                    'Enter other nose injuries'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {'q-applicant-physical-injuries': 'Select an injury from the list'}
            },
            examples: [{'q-applicant-physical-injuries': ['phyinj-032']}],
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
