'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-physical-injury-legs'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-legs': {
                    title: 'What part of the legs or feet were injured?',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Hip',
                                const: 'hip'
                            },
                            {
                                title: 'Leg',
                                const: 'leg'
                            },
                            {
                                title: 'Knee',
                                const: 'knee'
                            },
                            {
                                title: 'Ankle',
                                const: 'ankle'
                            },
                            {
                                title: 'Foot',
                                const: 'foot'
                            },
                            {
                                title: 'Toes',
                                const: 'toes'
                            },
                            {
                                title: 'Skin',
                                const: 'skin',
                                description: 'Including cuts, bruises, burns and scars'
                            },
                            {
                                title: 'Tissue',
                                const: 'muscle',
                                description: 'Including muscles, ligaments, tendons or cartilage'
                            }
                        ]
                    },
                    meta: {
                        classifications: {
                            theme: 'injuries'
                        },
                        summary: {
                            title: 'Leg injuries'
                        },
                        integration: {
                            hideOnSummary: true
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-legs': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-legs': ['hip']
                },
                {
                    'q-applicant-physical-injury-legs': ['hip', 'leg']
                },
                {
                    'q-applicant-physical-injury-legs': ['hip', 'knee']
                },
                {
                    'q-applicant-physical-injury-legs': ['hip', 'ankle']
                },
                {
                    'q-applicant-physical-injury-legs': ['hip', 'foot']
                },
                {
                    'q-applicant-physical-injury-legs': ['hip', 'toes']
                },
                {
                    'q-applicant-physical-injury-legs': ['hip', 'skin']
                },
                {
                    'q-applicant-physical-injury-legs': ['hip', 'muscle']
                },
                {
                    'q-applicant-physical-injury-legs': ['leg']
                },
                {
                    'q-applicant-physical-injury-legs': ['leg', 'knee']
                },
                {
                    'q-applicant-physical-injury-legs': ['leg', 'ankle']
                },
                {
                    'q-applicant-physical-injury-legs': ['leg', 'foot']
                },
                {
                    'q-applicant-physical-injury-legs': ['leg', 'toes']
                },
                {
                    'q-applicant-physical-injury-legs': ['leg', 'skin']
                },
                {
                    'q-applicant-physical-injury-legs': ['leg', 'muscle']
                },
                {
                    'q-applicant-physical-injury-legs': ['knee']
                },
                {
                    'q-applicant-physical-injury-legs': ['knee', 'ankle']
                },
                {
                    'q-applicant-physical-injury-legs': ['knee', 'foot']
                },
                {
                    'q-applicant-physical-injury-legs': ['knee', 'toes']
                },
                {
                    'q-applicant-physical-injury-legs': ['knee', 'skin']
                },
                {
                    'q-applicant-physical-injury-legs': ['knee', 'muscle']
                },
                {
                    'q-applicant-physical-injury-legs': ['ankle']
                },
                {
                    'q-applicant-physical-injury-legs': ['ankle', 'foot']
                },
                {
                    'q-applicant-physical-injury-legs': ['ankle', 'toes']
                },
                {
                    'q-applicant-physical-injury-legs': ['ankle', 'skin']
                },
                {
                    'q-applicant-physical-injury-legs': ['ankle', 'muscle']
                },
                {
                    'q-applicant-physical-injury-legs': ['foot']
                },
                {
                    'q-applicant-physical-injury-legs': ['foot', 'toes']
                },
                {
                    'q-applicant-physical-injury-legs': ['foot', 'skin']
                },
                {
                    'q-applicant-physical-injury-legs': ['foot', 'muscle']
                },
                {
                    'q-applicant-physical-injury-legs': ['toes']
                },
                {
                    'q-applicant-physical-injury-legs': ['toes', 'skin']
                },
                {
                    'q-applicant-physical-injury-legs': ['toes', 'muscle']
                },
                {
                    'q-applicant-physical-injury-legs': ['skin']
                },
                {
                    'q-applicant-physical-injury-legs': ['skin', 'muscle']
                },
                {
                    'q-applicant-physical-injury-legs': ['muscle']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-legs': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-legs': ['not-a-key']
                }
            ]
        }
    },
    route: {
        on: {
            'ANSWER__P-APPLICANT-PHYSICAL-INJURY-LEGS': [
                {
                    target: 'p-applicant-physical-injury-legs-hip',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'hip'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-legs-leg',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-legs.q-applicant-physical-injury-legs',
                        'leg'
                    ]
                },
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
                {target: 'p-applicant-infections'}
            ]
        }
    }
};
