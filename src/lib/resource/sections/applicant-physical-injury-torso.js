'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-physical-injury-torso'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-torso': {
                    title: 'What parts of the torso were injured?',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Shoulder',
                                const: 'shoulder'
                            },
                            {
                                title: 'Chest',
                                const: 'chest'
                            },
                            {
                                title: 'Abdomen',
                                const: 'abdomen'
                            },
                            {
                                title: 'Back',
                                const: 'back'
                            },
                            {
                                title: 'Pelvis',
                                const: 'pelvis'
                            },
                            {
                                title: 'Genitals',
                                const: 'genitals'
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
                            title: 'Torso injuries'
                        },
                        integration: {
                            hideOnSummary: true
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-torso': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-torso': ['shoulder']
                },
                {
                    'q-applicant-physical-injury-torso': ['shoulder', 'chest']
                },
                {
                    'q-applicant-physical-injury-torso': ['shoulder', 'abdomen']
                },
                {
                    'q-applicant-physical-injury-torso': ['shoulder', 'back']
                },
                {
                    'q-applicant-physical-injury-torso': ['shoulder', 'pelvis']
                },
                {
                    'q-applicant-physical-injury-torso': ['shoulder', 'genitals']
                },
                {
                    'q-applicant-physical-injury-torso': ['shoulder', 'skin']
                },
                {
                    'q-applicant-physical-injury-torso': ['shoulder', 'muscle']
                },
                {
                    'q-applicant-physical-injury-torso': ['chest']
                },
                {
                    'q-applicant-physical-injury-torso': ['chest', 'abdomen']
                },
                {
                    'q-applicant-physical-injury-torso': ['chest', 'back']
                },
                {
                    'q-applicant-physical-injury-torso': ['chest', 'pelvis']
                },
                {
                    'q-applicant-physical-injury-torso': ['chest', 'genitals']
                },
                {
                    'q-applicant-physical-injury-torso': ['chest', 'skin']
                },
                {
                    'q-applicant-physical-injury-torso': ['chest', 'muscle']
                },
                {
                    'q-applicant-physical-injury-torso': ['abdomen']
                },
                {
                    'q-applicant-physical-injury-torso': ['abdomen', 'back']
                },
                {
                    'q-applicant-physical-injury-torso': ['abdomen', 'pelvis']
                },
                {
                    'q-applicant-physical-injury-torso': ['abdomen', 'genitals']
                },
                {
                    'q-applicant-physical-injury-torso': ['abdomen', 'skin']
                },
                {
                    'q-applicant-physical-injury-torso': ['abdomen', 'muscle']
                },
                {
                    'q-applicant-physical-injury-torso': ['back']
                },
                {
                    'q-applicant-physical-injury-torso': ['back', 'pelvis']
                },
                {
                    'q-applicant-physical-injury-torso': ['back', 'genitals']
                },
                {
                    'q-applicant-physical-injury-torso': ['back', 'skin']
                },
                {
                    'q-applicant-physical-injury-torso': ['back', 'muscle']
                },
                {
                    'q-applicant-physical-injury-torso': ['pelvis']
                },
                {
                    'q-applicant-physical-injury-torso': ['pelvis', 'genitals']
                },
                {
                    'q-applicant-physical-injury-torso': ['pelvis', 'skin']
                },
                {
                    'q-applicant-physical-injury-torso': ['pelvis', 'muscle']
                },
                {
                    'q-applicant-physical-injury-torso': ['genitals']
                },
                {
                    'q-applicant-physical-injury-torso': ['genitals', 'skin']
                },
                {
                    'q-applicant-physical-injury-torso': ['genitals', 'muscle']
                },
                {
                    'q-applicant-physical-injury-torso': ['skin']
                },
                {
                    'q-applicant-physical-injury-torso': ['skin', 'muscle']
                },
                {
                    'q-applicant-physical-injury-torso': ['muscle']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-torso': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-torso': ['not-a-key']
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-physical-injury-torso-shoulder',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'shoulder'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-chest',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'chest'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-abdomen',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'abdomen'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-back',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'back'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-pelvis',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'pelvis'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-genitals',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'genitals'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-skin',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'skin'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-torso-muscle',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-torso.q-applicant-physical-injury-torso',
                        'muscle'
                    ]
                }
            ]
        }
    }
};
