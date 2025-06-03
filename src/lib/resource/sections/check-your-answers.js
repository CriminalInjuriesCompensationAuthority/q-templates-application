'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'p-check-your-answers': {
                    title: 'Check your answers',
                    description: 'Check your answers before sending your application',
                    type: 'object',
                    properties: {
                        summaryInfo: {
                            type: 'object',
                            urlPath: 'apply',
                            editAnswerText: 'Change',
                            summaryStructure: [],
                            lookup: {}
                        }
                    }
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ],
            options: {
                ordering: {
                    questions: {
                        'q-applicant-confirmation-method': [
                            'q-applicant-enter-your-email-address',
                            'q-applicant-enter-your-telephone-number'
                        ],
                        'q-applicant-have-you-applied-to-us-before': [
                            'q-enter-your-previous-reference-number'
                        ],
                        'q-applicant-select-treatments-dmi': ['q-applicant-other-treatment-dmi'],
                        'q-applicant-work-details-option': ['q-applicant-work-details-other'],
                        'q-applicant-physical-injuries': [
                            'q-applicant-physical-injuries-upper-head-other',
                            'q-applicant-physical-injuries-upper-face-other',
                            'q-applicant-physical-injuries-upper-neck-other',
                            'q-applicant-physical-injuries-upper-eye-other',
                            'q-applicant-physical-injuries-upper-ear-other',
                            'q-applicant-physical-injuries-upper-nose-other',
                            'q-applicant-physical-injuries-upper-mouth-other',
                            'q-applicant-physical-injuries-upper-skin-other',
                            'q-applicant-physical-injuries-torso-shoulder-other',
                            'q-applicant-physical-injuries-torso-chest-other',
                            'q-applicant-physical-injuries-torso-abdomen-other',
                            'q-applicant-physical-injuries-torso-back-other',
                            'q-applicant-physical-injuries-torso-pelvis-other',
                            'q-applicant-physical-injuries-torso-genitals-other',
                            'q-applicant-physical-injuries-torso-skin-other',
                            'q-applicant-physical-injuries-arms-shoulder-other',
                            'q-applicant-physical-injuries-arms-arm-other',
                            'q-applicant-physical-injuries-arms-elbow-other',
                            'q-applicant-physical-injuries-arms-wrist-other',
                            'q-applicant-physical-injuries-arms-hand-other',
                            'q-applicant-physical-injuries-arms-digit-other',
                            'q-applicant-physical-injuries-arms-skin-other',
                            'q-applicant-physical-injuries-legs-hip-other',
                            'q-applicant-physical-injuries-legs-leg-other',
                            'q-applicant-physical-injuries-legs-knee-other',
                            'q-applicant-physical-injuries-legs-ankle-other',
                            'q-applicant-physical-injuries-legs-foot-other',
                            'q-applicant-physical-injuries-legs-toes-other',
                            'q-applicant-physical-injuries-upper-muscle-other',
                            'q-applicant-physical-injuries-torso-muscle-other',
                            'q-applicant-physical-injuries-arms-muscle-other',
                            'q-applicant-physical-injuries-legs-muscle-other',
                            'q-applicant-physical-injuries-legs-skin-other',
                            'q-applicant-infections-other'
                        ],
                        'q-mainapplicant-confirmation-method': [
                            'q-mainapplicant-enter-your-email-address',
                            'q-mainapplicant-enter-your-telephone-number'
                        ],
                        'q-rep-confirmation-method': [
                            'q-rep-email-address',
                            'q-rep-telephone-number'
                        ],
                        'q-rep-has-reference-number': ['q-rep-reference-number'],
                        'q-applicant-relationship-to-deceased': ['q-applicant-relationship-other'],
                        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                            'q-applicant-explain-reason-for-delay-reporting'
                        ],
                        'q-mainapplicant-shared-responsibility': [
                            'q-mainapplicant-shared-responsibility-name'
                        ],
                        'q-mainapplicant-care-order': ['q-mainapplicant-care-order-authority'],
                        'q-offender-do-you-know-the-name-of-the-offender': [
                            'q-offender-enter-offenders-name'
                        ],
                        'q-applicant-where-did-the-crime-happen': ['q-applicant-crime-location'],
                        'q-applicant-have-you-been-known-by-any-other-names': [
                            'q-applicant-what-other-names-have-you-used'
                        ]
                    },
                    sections: [
                        'about-application',
                        'applicant-details',
                        'residency-and-nationality',
                        'main-applicant-details',
                        'rep-details',
                        'relationship-to-deceased',
                        'deceased',
                        'funeral-costs',
                        'crime',
                        'offender',
                        'injuries',
                        'pregnancy',
                        'mental-health',
                        'impact',
                        'special-expenses',
                        'treatment',
                        'other-compensation',
                        'additional-info'
                    ]
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--download-your-answers',
                    cond: [
                        'or',
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SOLS'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'CMCO'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SUPP'],
                        ['==', '$.answers.p-rep-type.q-rep-type', 'SSER']
                    ]
                },
                {target: 'p--context-paying-awards'}
            ]
        }
    }
};
