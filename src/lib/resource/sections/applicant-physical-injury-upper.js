'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-physical-injury-upper'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-upper': {
                    title: 'What parts of the head, face or neck were injured?',
                    description: 'Select all that apply.',
                    type: 'array',
                    items: {
                        anyOf: [
                            {
                                title: 'Head or brain',
                                const: 'head'
                            },
                            {
                                title: 'Face or jaw',
                                const: 'face'
                            },
                            {
                                title: 'Eye or eyesight',
                                const: 'eye'
                            },
                            {
                                title: 'Ear or hearing',
                                const: 'ear'
                            },
                            {
                                title: 'Nose',
                                const: 'nose'
                            },
                            {
                                title: 'Mouth',
                                const: 'mouth'
                            },
                            {
                                title: 'Neck',
                                const: 'neck'
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
                            title: 'Head, face or neck injuries'
                        },
                        integration: {
                            hideOnSummary: true
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-physical-injury-upper': 'Select an injury from the list'
                }
            },
            examples: [
                {
                    'q-applicant-physical-injury-upper': ['head']
                },
                {
                    'q-applicant-physical-injury-upper': ['head', 'face']
                },
                {
                    'q-applicant-physical-injury-upper': ['head', 'eye']
                },
                {
                    'q-applicant-physical-injury-upper': ['head', 'ear']
                },
                {
                    'q-applicant-physical-injury-upper': ['head', 'nose']
                },
                {
                    'q-applicant-physical-injury-upper': ['head', 'mouth']
                },
                {
                    'q-applicant-physical-injury-upper': ['head', 'neck']
                },
                {
                    'q-applicant-physical-injury-upper': ['head', 'skin']
                },
                {
                    'q-applicant-physical-injury-upper': ['head', 'muscle']
                },
                {
                    'q-applicant-physical-injury-upper': ['face']
                },
                {
                    'q-applicant-physical-injury-upper': ['face', 'eye']
                },
                {
                    'q-applicant-physical-injury-upper': ['face', 'ear']
                },
                {
                    'q-applicant-physical-injury-upper': ['face', 'nose']
                },
                {
                    'q-applicant-physical-injury-upper': ['face', 'mouth']
                },
                {
                    'q-applicant-physical-injury-upper': ['face', 'neck']
                },
                {
                    'q-applicant-physical-injury-upper': ['face', 'skin']
                },
                {
                    'q-applicant-physical-injury-upper': ['face', 'muscle']
                },
                {
                    'q-applicant-physical-injury-upper': ['eye']
                },
                {
                    'q-applicant-physical-injury-upper': ['eye', 'ear']
                },
                {
                    'q-applicant-physical-injury-upper': ['eye', 'nose']
                },
                {
                    'q-applicant-physical-injury-upper': ['eye', 'mouth']
                },
                {
                    'q-applicant-physical-injury-upper': ['eye', 'neck']
                },
                {
                    'q-applicant-physical-injury-upper': ['eye', 'skin']
                },
                {
                    'q-applicant-physical-injury-upper': ['eye', 'muscle']
                },
                {
                    'q-applicant-physical-injury-upper': ['ear']
                },
                {
                    'q-applicant-physical-injury-upper': ['ear', 'nose']
                },
                {
                    'q-applicant-physical-injury-upper': ['ear', 'mouth']
                },
                {
                    'q-applicant-physical-injury-upper': ['ear', 'neck']
                },
                {
                    'q-applicant-physical-injury-upper': ['ear', 'skin']
                },
                {
                    'q-applicant-physical-injury-upper': ['ear', 'muscle']
                },
                {
                    'q-applicant-physical-injury-upper': ['nose']
                },
                {
                    'q-applicant-physical-injury-upper': ['nose', 'mouth']
                },
                {
                    'q-applicant-physical-injury-upper': ['nose', 'neck']
                },
                {
                    'q-applicant-physical-injury-upper': ['nose', 'skin']
                },
                {
                    'q-applicant-physical-injury-upper': ['nose', 'muscle']
                },
                {
                    'q-applicant-physical-injury-upper': ['mouth']
                },
                {
                    'q-applicant-physical-injury-upper': ['mouth', 'neck']
                },
                {
                    'q-applicant-physical-injury-upper': ['mouth', 'skin']
                },
                {
                    'q-applicant-physical-injury-upper': ['mouth', 'muscle']
                },
                {
                    'q-applicant-physical-injury-upper': ['neck']
                },
                {
                    'q-applicant-physical-injury-upper': ['neck', 'skin']
                },
                {
                    'q-applicant-physical-injury-upper': ['neck', 'muscle']
                },
                {
                    'q-applicant-physical-injury-upper': ['skin']
                },
                {
                    'q-applicant-physical-injury-upper': ['skin', 'muscle']
                },
                {
                    'q-applicant-physical-injury-upper': ['muscle']
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-physical-injury-upper': 'not-an-array'
                },
                {
                    'q-applicant-physical-injury-upper': ['not-a-key']
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-physical-injury-upper-head',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'head'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-upper-face',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'face'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-upper-neck',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-upper.q-applicant-physical-injury-upper',
                        'neck'
                    ]
                },
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
                }
            ]
        }
    }
};
