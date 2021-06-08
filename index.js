'use strict';

module.exports = {
    type: 'apply-for-compensation',
    version: '3.0.0',
    sections: {
        'p--before-you-continue': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-lang'],
                additionalProperties: false,
                properties: {
                    'q-lang': {
                        title: 'What is your preferred language? Beth yw eich hoff iaith?',
                        type: 'string',
                        oneOf: [
                            {
                                title: 'English',
                                const: 'en'
                            },
                            {
                                title: 'Cymraeg',
                                const: 'cy'
                            }
                        ]
                    }
                },
                errorMessage: {
                    required: {
                        'q-lang': 'Select prefered language'
                    }
                },
                examples: [
                    {
                        'q-lang': 'en'
                    },
                    {
                        'q-lang': 'cy'
                    }
                ],
                invalidExamples: [
                    {
                        'q-lang': 12345
                    }
                ]
            }
        },
        'p-applicant-who-are-you-applying-for': {
            l10n: {
                vars: {
                    lng: {
                        $data: '/answers/p--before-you-continue/q-lang'
                    },
                    ns: 'p-applicant-who-are-you-applying-for'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-who-are-you-applying-for',
                        resources: {
                            'section-title': 'Who are you applying for?',
                            opt1: 'Myself',
                            opt2: 'Someone else'
                        }
                    },
                    {
                        language: 'cy',
                        namespace: 'p-applicant-who-are-you-applying-for',
                        resources: {
                            'section-title': "Ar gyfer pwy ydych chi'n gwneud cais?",
                            opt1: 'Fy hun',
                            opt2: 'Rhywun arall'
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-who-are-you-applying-for'],
                additionalProperties: false,
                properties: {
                    'q-applicant-who-are-you-applying-for': {
                        title: 'l10nt:section-title{?lng,ns}',
                        type: 'string',
                        oneOf: [
                            {
                                title: 'l10nt:opt1{?lng,ns}',
                                const: 'myself'
                            },
                            {
                                title: 'l10nt:opt2{?lng,ns}',
                                const: 'someone-else'
                            }
                        ]
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-who-are-you-applying-for':
                            'Select myself if you are applying for yourself'
                    }
                },
                examples: [
                    {
                        'q-applicant-who-are-you-applying-for': 'myself'
                    },
                    {
                        'q-applicant-who-are-you-applying-for': 'someone-else'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-who-are-you-applying-for': 12345
                    }
                ]
            }
        },
        'p-applicant-enter-your-address': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-enter-your-address'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-enter-your-address',
                        resources: {
                            'section-title': 'Enter your address',
                            'section-title_someone-else': 'Enter their address'
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                title: 'l10nt:section-title{?lng,context,ns}',
                required: ['q-applicant-building-and-street', 'q-applicant-town-or-city'],
                additionalProperties: false,
                properties: {
                    'q-applicant-building-and-street': {
                        type: 'string',
                        title: 'Building and street',
                        maxLength: 60,
                        errorMessage: {
                            maxLength: 'First line of address must be less than 60 characters'
                        }
                    },
                    'q-applicant-building-and-street-2': {
                        type: 'string',
                        title:
                            "<span class='govuk-visually-hidden'>Building and street line 2</span>",
                        maxLength: 60,
                        errorMessage: {
                            maxLength: 'Second line of address must be less than 60 characters'
                        }
                    },
                    'q-applicant-town-or-city': {
                        type: 'string',
                        title: 'Town or city',
                        maxLength: 32,
                        errorMessage: {
                            maxLength: 'Town or city must be 32 characters or less'
                        }
                    },
                    'q-applicant-county': {
                        type: 'string',
                        title: 'County (optional)',
                        maxLength: 32,
                        errorMessage: {
                            maxLength: 'County must be 32 characters or less'
                        }
                    },
                    'q-applicant-postcode': {
                        type: 'string',
                        title: 'Postcode (optional)',
                        maxLength: 10,
                        errorMessage: {
                            maxLength: 'Postcode must be 10 characters or less'
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-building-and-street':
                            'Enter the building and street where you live',
                        'q-applicant-town-or-city': 'Enter the town or city where you live'
                    }
                },
                examples: [
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-building-and-street': 12345,
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 12345,
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 12345,
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 12345,
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 12345
                    }
                ]
            }
        },
        'p-applicant-declaration': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-declaration'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-declaration',
                        resources: {
                            declaration:
                                '<p class="govuk-body">By submitting the application I agree that:</p><ul class="govuk-list govuk-list--bullet"><li>the information I’ve given here is true as far as I know</li><li>CICA can share the information I’ve given in this claim with:</li><ul><li>police, prosecutors and ACRO Criminal Records Office</li><li>medical organisations and staff, including police medical staff</li><li>any other individuals or organisations needed to process my application (including medical or other experts)</li></ul><li>CICA can receive information from the organisations and individuals described above</li><li>If I deliberately provide information that I know is false or misleading, I may be prosecuted and my application for compensation may be refused.</li></ul><p class="govuk-body">We often have to ask your GP or other health service provider for evidence about your injuries and treatment. We will let you know if we need to do this.</p><p class="govuk-body">Read our privacy notice to see <a class="govuk-link" href="https://www.gov.uk/guidance/cica-privacy-notice">how we use your data</a>.</p>',
                            'declaration_someone-else':
                                '<p class="govuk-body">By submitting the application I agree that:</p><p class="govuk-body"><b>Can be entirely different content...</b></p>'
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                title: 'Declaration',
                properties: {
                    'applicant-declaration': {
                        description: 'l10nt:declaration{?lng,context,ns}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        }
    },
    routes: {
        initial: 'p--before-you-continue',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        summary: 'p-applicant-declaration',
        confirmation: 'p-applicant-declaration',
        states: {
            'p--before-you-continue': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-who-are-you-applying-for'
                        }
                    ]
                }
            },
            'p-applicant-who-are-you-applying-for': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-enter-your-address'
                        }
                    ]
                }
            },
            'p-applicant-enter-your-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-declaration'
                        }
                    ]
                }
            },
            'p-applicant-declaration': {
                type: 'final'
            }
        }
    },
    answers: {},
    progress: ['p--before-you-continue'],
    meta: {
        questionnaireDocumentVersion: '2.0.0'
    }
};
