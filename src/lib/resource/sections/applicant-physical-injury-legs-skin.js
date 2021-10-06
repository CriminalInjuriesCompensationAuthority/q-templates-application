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
                    title: 'Select any injuries to the skin on your legs or feet',
                    type: 'array',
                    items: {
                        anyOf: [
                            {title: 'Cuts', const: 'phyinj-134'},
                            {title: 'Bruises', const: 'phyinj-135'},
                            {title: 'Scars', const: 'phyinj-113'},
                            {title: 'Burns', const: 'phyinj-112'},
                            {title: 'Other', const: 'phyinj-149'}
                        ]
                    }
                },
                'q-applicant-physical-injuries-legs-skin-other': {
                    type: 'string',
                    title: 'Other skin injuries on legs or feet',
                    maxLength: 499,
                    errorMessage: {
                        maxLength:
                            'Other skin injuries on legs or feet must be 499 characters or fewer'
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
                        required: ['q-applicant-physical-injuries-legs-skin-other'],
                        propertyNames: {
                            enum: [
                                'q-applicant-physical-injuries',
                                'q-applicant-physical-injuries-legs-skin-other'
                            ]
                        },
                        errorMessage: {
                            required: {
                                'q-applicant-physical-injuries-legs-skin-other':
                                    'Enter other skin injuries on legs or feet'
                            }
                        }
                    }
                }
            },
            errorMessage: {
                required: {'q-applicant-physical-injuries': 'Select an injury from the list'}
            },
            examples: [{'q-applicant-physical-injuries': ['phyinj-134']}],
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
