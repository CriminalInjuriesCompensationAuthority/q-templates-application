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
                    title: 'Select any injuries to the shoulder',
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'Broken shoulder blade', const: 'phyinj-076'},
                            {title: 'Dislocated shoulder', const: 'phyinj-100'},
                            {title: 'Separated shoulder', const: 'phyinj-062'},
                            {title: 'Frozen shoulder', const: 'phyinj-101'},
                            {title: 'Other', const: 'phyinj-149'}
                        ]
                    }
                },
                'q-applicant-physical-injuries-arms-shoulder-other': {
                    type: 'string',
                    title: 'Other shoulder injuries',
                    maxLength: 499,
                    errorMessage: {
                        maxLength: 'Other shoulder injuries must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-arms-shoulder-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-arms-shoulder-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-arms-shoulder-other':
                                    'Enter other shoulder injuries'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {'q-applicant-physical-injuries': 'Select an injury from the list'}
            },
            examples: [{'q-applicant-physical-injuries': ['phyinj-076']}],
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
