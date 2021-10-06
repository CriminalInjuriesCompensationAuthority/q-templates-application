'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-physical-injury-arms'],
            additionalProperties: false,
            properties: {
                'q-applicant-physical-injury-arms': {
                    title: 'What part of the arms or hands were injured?',
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'Shoulder', const: 'shoulder'},
                            {title: 'Arm', const: 'arm'},
                            {title: 'Elbow', const: 'elbow'},
                            {title: 'Wrist', const: 'wrist'},
                            {title: 'Hand', const: 'hand'},
                            {title: 'Finger and thumb', const: 'digit'},
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
                    }
                }
            },
            errorMessage: {
                required: {'q-applicant-physical-injury-arms': 'Select an injury from the list'}
            },
            examples: [
                {'q-applicant-physical-injury-arms': ['shoulder']},
                {'q-applicant-physical-injury-arms': ['shoulder', 'arm']},
                {'q-applicant-physical-injury-arms': ['shoulder', 'elbow']},
                {'q-applicant-physical-injury-arms': ['shoulder', 'wrist']},
                {'q-applicant-physical-injury-arms': ['shoulder', 'hand']},
                {'q-applicant-physical-injury-arms': ['shoulder', 'digit']},
                {'q-applicant-physical-injury-arms': ['shoulder', 'skin']},
                {'q-applicant-physical-injury-arms': ['shoulder', 'muscle']},
                {'q-applicant-physical-injury-arms': ['arm']},
                {'q-applicant-physical-injury-arms': ['arm', 'elbow']},
                {'q-applicant-physical-injury-arms': ['arm', 'wrist']},
                {'q-applicant-physical-injury-arms': ['arm', 'hand']},
                {'q-applicant-physical-injury-arms': ['arm', 'digit']},
                {'q-applicant-physical-injury-arms': ['arm', 'skin']},
                {'q-applicant-physical-injury-arms': ['arm', 'muscle']},
                {'q-applicant-physical-injury-arms': ['elbow']},
                {'q-applicant-physical-injury-arms': ['elbow', 'wrist']},
                {'q-applicant-physical-injury-arms': ['elbow', 'hand']},
                {'q-applicant-physical-injury-arms': ['elbow', 'digit']},
                {'q-applicant-physical-injury-arms': ['elbow', 'skin']},
                {'q-applicant-physical-injury-arms': ['elbow', 'muscle']},
                {'q-applicant-physical-injury-arms': ['wrist']},
                {'q-applicant-physical-injury-arms': ['wrist', 'hand']},
                {'q-applicant-physical-injury-arms': ['wrist', 'digit']},
                {'q-applicant-physical-injury-arms': ['wrist', 'skin']},
                {'q-applicant-physical-injury-arms': ['wrist', 'muscle']},
                {'q-applicant-physical-injury-arms': ['hand']},
                {'q-applicant-physical-injury-arms': ['hand', 'digit']},
                {'q-applicant-physical-injury-arms': ['hand', 'skin']},
                {'q-applicant-physical-injury-arms': ['hand', 'muscle']},
                {'q-applicant-physical-injury-arms': ['digit']},
                {'q-applicant-physical-injury-arms': ['digit', 'skin']},
                {'q-applicant-physical-injury-arms': ['digit', 'muscle']},
                {'q-applicant-physical-injury-arms': ['skin']},
                {'q-applicant-physical-injury-arms': ['skin', 'muscle']},
                {'q-applicant-physical-injury-arms': ['muscle']}
            ],
            invalidExamples: [
                {'q-applicant-physical-injury-arms': 'not-an-array'},
                {'q-applicant-physical-injury-arms': ['not-a-key']}
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-physical-injury-arms-shoulder',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'shoulder'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-arm',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'arm'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-elbow',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'elbow'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-wrist',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'wrist'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-hand',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'hand'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-digit',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'digit'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-skin',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'skin'
                    ]
                },
                {
                    target: 'p-applicant-physical-injury-arms-muscle',
                    cond: [
                        'includes',
                        '$.answers.p-applicant-physical-injury-arms.q-applicant-physical-injury-arms',
                        'muscle'
                    ]
                },
                {target: 'p--context-dmi-details'}
            ]
        }
    }
};
