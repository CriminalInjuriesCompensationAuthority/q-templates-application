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
                    type: 'object',
                    properties: {
                        summaryInfo: {
                            type: 'object',
                            urlPath: 'apply',
                            editAnswerText: 'Change',
                            summaryStructure: [
                                {
                                    title: 'About the application',
                                    questions: [
                                        {
                                            id: 'p-applicant-fatal-claim',
                                            label:
                                                'Are you applying because someone died from their injuries?'
                                        },
                                        {
                                            id: 'p-applicant-who-are-you-applying-for',
                                            label: 'Who are you applying for?'
                                        },
                                        {
                                            id: 'p-applicant-are-you-18-or-over',
                                            label: 'Are you 18 or over?'
                                        },
                                        {
                                            id: 'p-applicant-confirmation-method',
                                            label: 'Confirmation method'
                                        },
                                        {
                                            id:
                                                'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                                            label:
                                                'Reasons for the delay in making your application'
                                        }
                                    ]
                                },
                                {
                                    title: 'Your details',
                                    questions: [
                                        {
                                            id: 'p-applicant-enter-your-name',
                                            label: 'Name'
                                        },
                                        {
                                            id:
                                                'p-applicant-have-you-been-known-by-any-other-names',
                                            label: 'Have you been known by any other names?'
                                        },
                                        {
                                            id: 'p-applicant-what-other-names-have-you-used',
                                            label: 'Other names'
                                        },
                                        {
                                            id: 'p-applicant-enter-your-date-of-birth',
                                            label: 'Date of birth'
                                        },
                                        {
                                            id: 'p-applicant-british-citizen-or-eu-national',
                                            label: 'Are you a British citizen or EU National?'
                                        }
                                    ]
                                },
                                {
                                    title: 'About the crime',
                                    questions: [
                                        {
                                            id: 'p-applicant-incident-type',
                                            label: 'Cause of injuries'
                                        },
                                        {
                                            id:
                                                'p-applicant-did-the-crime-happen-once-or-over-time',
                                            label:
                                                'Did the crime happen once or over a period of time?'
                                        },
                                        {
                                            id: 'p-applicant-when-did-the-crime-happen',
                                            label: 'When did the crime happen?'
                                        },
                                        {
                                            id: 'p-applicant-when-did-the-crime-start',
                                            label: 'When did the crime start?'
                                        },
                                        {
                                            id: 'p-applicant-when-did-the-crime-stop',
                                            label: 'When did the crime stop?'
                                        },
                                        {
                                            id: 'p-applicant-where-did-the-crime-happen',
                                            label: 'Where did the crime happen?'
                                        },
                                        {
                                            id: 'p-applicant-where-in-england-did-it-happen',
                                            label: 'Where in England did it happen?'
                                        },
                                        {
                                            id: 'p-applicant-where-in-scotland-did-it-happen',
                                            label: 'Where in Scotland did it happen?'
                                        },
                                        {
                                            id: 'p-applicant-where-in-wales-did-it-happen',
                                            label: 'Where in Wales did it happen?'
                                        },
                                        {
                                            id: 'p-offender-do-you-know-the-name-of-the-offender',
                                            label: 'Do you know the name of the offender?'
                                        },
                                        {
                                            id: 'p-offender-enter-offenders-name',
                                            label: "Offender's name"
                                        },
                                        {
                                            id: 'p-offender-do-you-have-contact-with-offender',
                                            label: 'Do you have contact with the offender?'
                                        },
                                        {
                                            id: 'p-offender-describe-contact-with-offender',
                                            label: 'Contact with offender'
                                        },
                                        {
                                            id: 'p-applicant-describe-incident',
                                            label: 'Would you like to describe the crime?'
                                        },
                                        {
                                            id: 'p-applicant-incident-description',
                                            label: 'Your description'
                                        }
                                    ]
                                },
                                {
                                    title: 'Police report',
                                    questions: [
                                        {
                                            id: 'p--was-the-crime-reported-to-police',
                                            label: 'Was the crime reported to police?'
                                        },
                                        {
                                            id: 'p-applicant-has-crime-reference-number',
                                            label: 'Do you have a crime reference number?'
                                        },
                                        {
                                            id: 'p--when-was-the-crime-reported-to-police',
                                            label: 'When was the crime reported?'
                                        },
                                        {
                                            id: 'p--whats-the-crime-reference-number',
                                            label: 'Crime reference number'
                                        },
                                        {
                                            id: 'p--which-police-force-is-investigating-the-crime',
                                            label: 'Which police force is investigating?'
                                        },
                                        {
                                            id:
                                                'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                                            label: 'Reasons for delay in reporting crime'
                                        }
                                    ]
                                },
                                {
                                    title: 'Your injuries',
                                    questions: [
                                        {
                                            id: 'p-applicant-infections',
                                            label: 'Do you have HIV, hepatitis or an STI?'
                                        },
                                        {
                                            id: 'p-applicant-select-infections',
                                            label: 'Select what infection you have'
                                        },
                                        {
                                            id: 'p-applicant-select-non-sa-infections',
                                            label: 'Select what infection you have'
                                        },
                                        {
                                            id: 'p-applicant-pregnancy',
                                            label: 'Did you become pregnant?'
                                        },
                                        {
                                            id: 'p-applicant-pregnancy-loss',
                                            label: 'Did you lose a pregnancy?'
                                        },
                                        {
                                            id:
                                                'p-applicant-are-you-claiming-for-physical-injuries',
                                            label: 'Do you have physical injuries?'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury',
                                            label: 'What was injured?'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-upper',
                                            label:
                                                'What parts of the head, face or neck were injured?'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-upper-head',
                                            label: 'Head or brain injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-upper-face',
                                            label: 'Face injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-upper-neck',
                                            label: 'Neck injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-upper-eye',
                                            label: 'Eye or eyesight injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-upper-ear',
                                            label: 'Ear or hearing injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-upper-nose',
                                            label: 'Nose injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-upper-mouth',
                                            label: 'Mouth injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-upper-skin',
                                            label: 'Skin on your head, face or neck injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-upper-muscle',
                                            label: 'Tissue on your head, face or neck injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-torso',
                                            label: 'Torso injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-torso-shoulder',
                                            label: 'Shoulder injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-torso-chest',
                                            label: 'Chest injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-torso-abdomen',
                                            label: 'Abdomen injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-torso-back',
                                            label: 'Back injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-torso-pelvis',
                                            label: 'Pelvis injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-torso-genitals',
                                            label: 'Genital injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-torso-skin',
                                            label: 'Torso injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-torso-muscle',
                                            label: 'Tissue on your torso injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-arms',
                                            label: 'What parts of the arms or hands were injured?'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-arms-shoulder',
                                            label: 'Shoulder injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-arms-arm',
                                            label: 'Arm injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-arms-elbow',
                                            label: 'Elbow injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-arms-wrist',
                                            label: 'Wrist injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-arms-hand',
                                            label: 'Hand injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-arms-digit',
                                            label: 'Finger or thumb injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-arms-skin',
                                            label: 'Skin on your arms or hands injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-arms-muscle',
                                            label: 'Tissue on your arms injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-legs',
                                            label: 'What parts of the legs or feet were injured?'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-legs-hip',
                                            label: 'Hip injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-legs-leg',
                                            label: 'Leg injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-legs-knee',
                                            label: 'Knee injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-legs-ankle',
                                            label: 'Ankle injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-legs-foot',
                                            label: 'Foot injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-legs-toes',
                                            label: 'Toe injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-legs-skin',
                                            label: 'Skin on your legs or feet injuries'
                                        },
                                        {
                                            id: 'p-applicant-physical-injury-legs-muscle',
                                            label: 'Tissue on your legs injuries'
                                        },
                                        {
                                            id: 'p-applicant-do-you-have-disabling-mental-injury',
                                            label: 'Do you have a disabling mental injury?'
                                        },
                                        {
                                            id: 'p-applicant-mental-injury-duration',
                                            label: 'Has your mental injury lasted 6 weeks or more?'
                                        },
                                        {
                                            id: 'p-applicant-affect-on-daily-life-dmi',
                                            label:
                                                'Briefly say how the crime has affected your daily life'
                                        }
                                    ]
                                },
                                {
                                    title: 'Your medical details',
                                    questions: [
                                        {
                                            id: 'p-applicant-treatment-for-physical-injuries',
                                            label: 'Treatment for your physical injuries'
                                        },
                                        {
                                            id: 'p-applicant-select-treatments',
                                            label: 'Mental health treatments'
                                        },
                                        {
                                            id: 'p-applicant-has-your-treatment-finished-dmi',
                                            label: 'Have you finished your treatment?'
                                        },
                                        {
                                            id: 'p-applicant-are-you-registered-with-gp',
                                            label: 'Are you registered with a GP practice?'
                                        },
                                        {
                                            id: 'p-applicant-have-you-seen-a-gp',
                                            label: 'Have you seen a GP about your injuries?'
                                        },
                                        {
                                            id: 'p-gp-enter-your-address',
                                            label: "GP's address"
                                        },
                                        {
                                            id: 'p-applicant-medical-help',
                                            label: 'Did you seek other medical help?'
                                        },
                                        {
                                            id: 'p-applicant-treatment-address',
                                            label: 'Where did you have treatment?'
                                        },
                                        {
                                            id: 'p-dentist-visited',
                                            label: 'Have you seen a dentist about your injuries?'
                                        },
                                        {
                                            id: 'p-dentist-details',
                                            label: "What is your dentist's address?"
                                        },
                                        {
                                            id: 'p-applicant-dentist-visited',
                                            label: 'Have you seen a dentist about your injuries?'
                                        },
                                        {
                                            id: 'p-applicant-dentist-address',
                                            label: "What is your dentist's address?"
                                        }
                                    ]
                                },
                                {
                                    title: 'Money',
                                    questions: [
                                        {
                                            id: 'p-applicant-unable-to-work-duration',
                                            label:
                                                'Have you been unable to work for more than 28 weeks?'
                                        },
                                        {
                                            id: 'p-applicant-job-when-crime-happened',
                                            label: 'Did you have a job when the crime happened?'
                                        },
                                        {
                                            id: 'p-applicant-work-details-option',
                                            label: 'Reason for not having paid work'
                                        },
                                        {
                                            id: 'p-applicant-expenses',
                                            label: 'Expenses'
                                        }
                                    ]
                                },
                                {
                                    title: 'Other compensation',
                                    questions: [
                                        {
                                            id: 'p-applicant-have-you-applied-to-us-before',
                                            label: 'Have you applied before?'
                                        },
                                        {
                                            id:
                                                'p-applicant-have-you-applied-for-or-received-any-other-compensation',
                                            label:
                                                'Have you applied for or received any other form of compensation?'
                                        },
                                        {
                                            id: 'p-applicant-who-did-you-apply-to',
                                            label: 'Who did you apply to?'
                                        },
                                        {
                                            id: 'p-applicant-has-a-decision-been-made',
                                            label: 'Have they made a decision?'
                                        },
                                        {
                                            id: 'p-applicant-how-much-was-award',
                                            label: 'How much was the award?'
                                        },
                                        {
                                            id: 'p-applicant-when-will-you-find-out',
                                            label: 'When will you find out?'
                                        },
                                        {
                                            id: 'p-applicant-other-compensation-details',
                                            label: 'Details of other compensation received'
                                        },
                                        {
                                            id:
                                                'p-applicant-applied-for-other-compensation-briefly-explain-why-not',
                                            label:
                                                'Why you have not applied for or received any other form of compensation'
                                        }
                                    ]
                                },
                                {
                                    title: 'Contact details',
                                    questions: [
                                        {
                                            id: 'p-applicant-enter-your-address',
                                            label: 'Address'
                                        },
                                        {
                                            id: 'p-applicant-enter-your-email-address',
                                            label: 'Email address'
                                        },
                                        {
                                            id: 'p-applicant-enter-your-telephone-number',
                                            label: 'Phone number'
                                        }
                                    ]
                                },
                                {
                                    title: 'Additional information',
                                    questions: [
                                        {
                                            id: 'p-applicant-provide-additional-information',
                                            label: 'Would you like to add any information?'
                                        },
                                        {
                                            id: 'p-applicant-additional-information',
                                            label: 'Additional information'
                                        }
                                    ]
                                }
                            ],
                            lookup: {
                                '10000001': 'British Transport Police',
                                '10000033': 'Avon And Somerset Constabulary',
                                '10000035': 'Bedfordshire Police',
                                '10000039': 'Cambridgeshire Constabulary',
                                '10000045': 'Scotland Forth Valley',
                                '10000049': 'Cheshire Constabulary',
                                '10000059': 'City Of London Police',
                                '10000066': 'Cleveland Police',
                                '10000082': 'Cumbria Constabulary',
                                '10000084': 'Derbyshire Constabulary',
                                '10000090': 'Devon & Cornwall Constabulary',
                                '10000093': 'Dorset Police',
                                '10000098': 'Scotland Dumfries & Galloway',
                                '10000102': 'Durham Constabulary',
                                '10000109': 'Dyfed Powys Police',
                                '10000114': 'Essex Police',
                                '10000128': 'Gloucestershire Constabulary',
                                '10000133': 'Scotland North East',
                                '10000140': 'Greater Manchester Police',
                                '10000147': 'Gwent Constabulary',
                                '10000150': 'Hampshire Constabulary',
                                '10000153': 'Hertfordshire Constabulary',
                                '10000169': 'Humberside Police',
                                '10000172': 'Kent County Constabulary',
                                '10000175': 'Lancashire Constabulary',
                                '10000176': 'Leicestershire Police',
                                '10000179': 'Lincolnshire Police',
                                '10000181': 'Merseyside Police',
                                '10000185': 'Norfolk Constabulary',
                                '10000187': 'North Wales Police',
                                '10000189': 'North Yorkshire Police',
                                '10000191': 'Northamptonshire Police',
                                '10000193': 'Scotland Highlands And Islands',
                                '10000195': 'Northumbria Police',
                                '10000199': 'Nottinghamshire Police',
                                '10000215': 'South Wales Police',
                                '10000218': 'South Yorkshire Police',
                                '10000223': 'Staffordshire Police',
                                '10000233': 'Suffolk Constabulary',
                                '10000237': 'Surrey Constabulary',
                                '10000240': 'Sussex Police',
                                '10000243': 'Scotland Tayside',
                                '10000247': 'Thames Valley Police',
                                '10000274': 'Warwickshire Constabulary',
                                '10000279': 'West Mercia Police',
                                '10000285': 'West Midlands Police',
                                '10000291': 'West Yorkshire Police',
                                '10000295': 'Wiltshire Constabulary',
                                '10002424': 'Scotland Fife',
                                '11809683': 'Metropolitan Westminster',
                                '11809691': 'Metropolitan Southwark',
                                '11809693': 'Metropolitan Lambeth',
                                '11809694': 'Metropolitan Camden',
                                '11809698': 'Metropolitan Lewisham',
                                '11809701': 'Metropolitan Newham',
                                '11809709': 'Metropolitan Greenwich',
                                '11809713': 'Metropolitan Croydon',
                                '11809719': 'Metropolitan Barnet',
                                '11809722': 'Metropolitan Brent',
                                '11809726': 'Metropolitan Waltham Forest',
                                '11809738': 'Metropolitan Haringey',
                                '11809743': 'Metropolitan Ealing',
                                '11809760': 'Metropolitan Bromley',
                                '11809763': 'Metropolitan Hackney',
                                '11809765': 'Metropolitan Islington',
                                '11809767': 'Metropolitan Tower Hamlets',
                                '11809771': 'Metropolitan Wandsworth',
                                '11809775': 'Metropolitan Hillingdon',
                                '11809780': 'Metropolitan Hounslow',
                                '11809782': 'Metropolitan Redbridge',
                                '11809783': 'Metropolitan Enfield',
                                '11809785': 'Metropolitan Barking',
                                '11809788': 'Metropolitan Bexley',
                                '11809795': 'Metropolitan Hammersmith',
                                '11809800': 'Metropolitan Havering',
                                '11809801': 'Metropolitan Kensington',
                                '11809803': 'Metropolitan Harrow',
                                '11809805': 'Metropolitan Sutton',
                                '11809861': 'Metropolitan Merton',
                                '11809862': 'Metropolitan Richmond',
                                '11809865': 'Metropolitan Kingston',
                                '12157147': 'Scotland Ayrshire',
                                '12607023': 'Scotland Greater Glasgow',
                                '12607026': 'Scotland Renfrewshire/Inverclyde',
                                '12607027': 'Scotland Argyll/West Dunbartonshire',
                                '12607028': 'Scotland Lanarkshire',
                                '13400412': 'Scotland Edinburgh City',
                                '13400413': 'Scotland Lothian And Borders',
                                true: 'Yes',
                                false: 'No',
                                once: 'Once',
                                'over-a-period-of-time': 'Over a period of time',
                                'i-was-underage': 'I was under 18',
                                'i-was-advised-to-wait': 'I was advised to wait',
                                'medical-reasons': 'Medical reasons',
                                'other-reasons': 'Other reasons',
                                'i-was-under-18': 'I was under 18',
                                'unable-to-report-crime': 'Unable to report the crime',
                                other: 'Other',
                                'option-1:-sexual-assault-or-abuse':
                                    'Option 1: Sexual assault or abuse',
                                'option-2:-sexual-assault-or-abuse-and-other-injuries-or-losses':
                                    'Option 2: Sexual assault or abuse and other injuries or losses',
                                myself: 'Myself',
                                'someone-else': 'Someone else',
                                england: 'England',
                                scotland: 'Scotland',
                                wales: 'Wales',
                                'somewhere-else': 'Somewhere else',
                                'i-have-no-contact-with-the-offender':
                                    'I have no contact with the offender',
                                email: 'Email to ',
                                text: 'Text message to',
                                cbt: 'CBT',
                                emdr: 'EMDR',
                                antidepressants: 'Antidepressants',
                                counselling: 'counselling',
                                psychotherapy: 'psychotherapy',
                                'phyinj-001': 'Burns on head, face or neck',
                                'phyinj-002': 'Scars on head, face or neck',
                                'phyinj-003': 'Brain damage',
                                'phyinj-004': 'Epilepsy',
                                'phyinj-005': 'Nerve damage on Arm',
                                'phyinj-006': 'Broken ear bone',
                                'phyinj-007': 'Hearing loss',
                                'phyinj-008': 'Loss of ear',
                                'phyinj-009': '1 perforated eardrum',
                                'phyinj-010': '2 perforated eardrums',
                                'phyinj-011': 'Tinnitus',
                                'phyinj-012': 'Injury affecting balance',
                                'phyinj-013': 'Broken eye socket',
                                'phyinj-014': 'Temporary blurred or double vision',
                                'phyinj-015': 'Permanent blurred or double vision',
                                'phyinj-016': 'Cataract',
                                'phyinj-017': 'Scratched eye',
                                'phyinj-018': 'Permanent loss of peripheral vision',
                                'phyinj-019': 'Dislocated lens',
                                'phyinj-020': 'Glaucoma',
                                'phyinj-021': 'Bleeding in eye',
                                'phyinj-022': 'Loss of eye',
                                'phyinj-023': 'Blindness',
                                'phyinj-024': 'Sight loss',
                                'phyinj-025': 'Floater',
                                'phyinj-026': 'Damaged or detached retina',
                                'phyinj-027': 'Punctured eyeball',
                                'phyinj-028': 'Damaged eye drain',
                                'phyinj-029': 'Clicking jaw',
                                'phyinj-030': 'Dislocated jaw',
                                'phyinj-031': 'Broken ethmoid (bone at base of nose)',
                                'phyinj-032':
                                    'Broken ethmoid (bone at base of nose) needing operation',
                                'phyinj-033': 'Broken nose',
                                'phyinj-034': 'Broken jaw',
                                'phyinj-035': 'Face fractures',
                                'phyinj-036': 'Face numbness',
                                'phyinj-037': 'Broken cheekbone',
                                'phyinj-038': 'Broken hyoid (throat bone)',
                                'phyinj-039': 'Whiplash',
                                'phyinj-040': 'Loss of smell or taste',
                                'phyinj-041': 'Loss of nose',
                                'phyinj-042': 'Fractured skull',
                                'phyinj-043': 'Damaged or broken teeth',
                                'phyinj-044': 'Loose teeth',
                                'phyinj-045': 'Difficulty speaking',
                                'phyinj-046': 'Permanent loss of speech',
                                'phyinj-047': 'Loss of tongue',
                                'phyinj-048': 'Cuts on head, face or neck',
                                'phyinj-049': 'Bruises on head, face or neck',
                                'phyinj-050': 'Muscle on head, face or neck',
                                'phyinj-051': 'Black eye',
                                'phyinj-052': 'Bloody nose',
                                'phyinj-053': 'Hair pulled out',
                                'phyinj-054': 'Burns on torso',
                                'phyinj-055': 'Scars on torso',
                                'phyinj-056': 'Keyhole surgery on torso',
                                'phyinj-057': 'Chest surgery',
                                'phyinj-058': 'Stoma',
                                'phyinj-059': 'Broken vertebra',
                                'phyinj-060': 'Slipped disc',
                                'phyinj-061': 'Back strain',
                                'phyinj-062': 'Separated shoulder',
                                'phyinj-063': 'Broken collarbone',
                                'phyinj-064': 'Broken tailbone',
                                'phyinj-065': 'Genital injury',
                                'phyinj-066': 'Infertility',
                                'phyinj-067': 'Hernia',
                                'phyinj-068': 'Loss of kidney',
                                'phyinj-069': 'Kidney damage',
                                'phyinj-070': 'Punctured lung',
                                'phyinj-071': 'Collapsed lung',
                                'phyinj-072': 'Lung damage from smoke or chemicals',
                                'phyinj-073': 'Loss of pancreas',
                                'phyinj-074': 'Broken pelvis',
                                'phyinj-075': 'Broken rib',
                                'phyinj-076': 'Broken shoulder blade',
                                'phyinj-077': 'Loss of spleen',
                                'phyinj-078': 'Broken breast bone',
                                'phyinj-079': 'Cuts on torso',
                                'phyinj-080': 'Bruises on torso',
                                'phyinj-081': 'Muscle, ligament, or tendon on torso',
                                'phyinj-082': 'Burns on arm or hand',
                                'phyinj-083': 'Scars on arm or hand',
                                'phyinj-084': 'Loss of arm',
                                'phyinj-085': 'Paralysed arm',
                                'phyinj-086': 'Dislocated elbow',
                                'phyinj-087': 'Broken elbow',
                                'phyinj-088': 'Dislocated finger on one hand',
                                'phyinj-089': 'Dislocated fingers on both hands',
                                'phyinj-090': 'Broken thumb',
                                'phyinj-091': 'Broken index finger',
                                'phyinj-092': 'Broken finger on one hand',
                                'phyinj-093': 'Broken fingers on both hands',
                                'phyinj-094': 'Loss of finger',
                                'phyinj-095': 'Loss of part of finger',
                                'phyinj-096': 'Broken hand',
                                'phyinj-097': 'Loss of use of hand',
                                'phyinj-098': 'Loss of grip',
                                'phyinj-099': 'Broken arm',
                                'phyinj-100': 'Dislocated shoulder',
                                'phyinj-101': 'Frozen shoulder',
                                'phyinj-103': 'Muscle, ligament, or tendon on arm or hand',
                                'phyinj-104': 'Broken wrist',
                                'phyinj-105': 'Sprained wrist',
                                'phyinj-106': 'Loss of fingernail',
                                'phyinj-107': 'Cuts on arm or hand',
                                'phyinj-108': 'Bruises on arm or hand',
                                'phyinj-109': 'Dislocated index finger',
                                'phyinj-110': 'Dislocated thumb',
                                'phyinj-111': 'Loss of thumb',
                                'phyinj-112': 'Burns on legs or feet',
                                'phyinj-113': 'Scars on legs or feet',
                                'phyinj-114': 'Dislocated ankle',
                                'phyinj-115': 'Broken ankle',
                                'phyinj-116': 'Sprained ankle',
                                'phyinj-117': 'Broken leg',
                                'phyinj-118': 'Broken foot',
                                'phyinj-119': 'Broken heel',
                                'phyinj-120': 'Dislocated hip',
                                'phyinj-121': 'Broken hip',
                                'phyinj-122': 'Keyhole surgery to leg',
                                'phyinj-123': 'Dislocated kneecap',
                                'phyinj-124': 'Broken kneecap',
                                'phyinj-125': 'Removal of kneecap',
                                'phyinj-126': 'Amputated leg',
                                'phyinj-127': 'Paralysed leg',
                                'phyinj-129': 'Broken big toe',
                                'phyinj-130': 'Broken toe',
                                'phyinj-131': 'Amputated big toe',
                                'phyinj-132': '1 amputated toe',
                                'phyinj-133': '2 or more amputated toes',
                                'phyinj-134': 'Cuts on legs or feet',
                                'phyinj-135': 'Bruises on legs or feet',
                                'phyinj-136': '2 or more broken toes',
                                'phyinj-137': 'Hemiplegia (paralysis of one side of the the body)',
                                'phyinj-138': 'Paraplegia (paralysis of lower half of the body)',
                                'phyinj-139':
                                    'Quadriplegia or tetraplegia (paralysis of all 4 limbs)',
                                'phyinj-140': 'Loss of pregnancy',
                                'phyinj-141': 'HIV',
                                'phyinj-142': 'Hepatitis B',
                                'phyinj-143': 'Hepatitis C',
                                'phyinj-144': 'Pregnancy',
                                'phyinj-145': 'Sexually transmitted infection (STI)',
                                'phyinj-146':
                                    'Head injury causing concussion, headaches or loss of balance',
                                'phyinj-147': 'Paralysed finger',
                                'phyinj-148': 'Paralysed toe',
                                'phyinj-149': 'Other',
                                'phyinj-150': 'Injury affecting eye movement',
                                'phyinj-151': 'Ligament on head, face or neck',
                                'phyinj-152': 'Tendon on head, face or neck',
                                'phyinj-153': 'Cartilage on head, face or neck',
                                'phyinj-154': 'Muscle on torso',
                                'phyinj-155': 'Ligament on torso',
                                'phyinj-156': 'Tendon on torso',
                                'phyinj-157': 'Cartilage on torso',
                                'phyinj-158': 'Muscle on arm or hand',
                                'phyinj-159': 'Ligament on arm or hand',
                                'phyinj-160': 'Tendon on arm or hand',
                                'phyinj-161': 'Cartilage on arm or hand',
                                'phyinj-162': 'Paralysed foot',
                                'phyinj-164': 'Muscle on Leg or foot',
                                'phyinj-165': 'Ligament on Leg or foot',
                                'phyinj-166': 'Tendon on Leg or foot',
                                'phyinj-167': 'Cartilage on Leg or foot',
                                'phyinj-168': 'Nerve damage on Hand',
                                'phyinj-169': 'Nerve damage on Leg',
                                'phyinj-170': 'Nerve damage on Foot',
                                upper: 'Head or brain',
                                torso: 'Torso',
                                arms: 'Arms',
                                legs: 'Legs',
                                head: 'Head',
                                face: 'Face',
                                eye: 'Eye',
                                ear: 'Ear',
                                nose: 'Nose',
                                mouth: 'Mouth',
                                neck: 'Neck',
                                skin: 'Skin',
                                muscle: 'Tissue',
                                shoulder: 'Shoulder',
                                chest: 'Chest',
                                abdomen: 'Abdomen',
                                back: 'Back',
                                pelvis: 'Pelvis',
                                genitals: 'Genitals',
                                arm: 'Arm',
                                elbow: 'Elbow',
                                wrist: 'Wrist',
                                hand: 'Hand',
                                digit: 'Finger and Thumb',
                                hip: 'Hip',
                                leg: 'Leg',
                                knee: 'Knee',
                                ankle: 'Ankle',
                                foot: 'Foot',
                                toes: 'Toes',
                                aids: 'Buying or repairing physical aids',
                                alterations: 'Alterations to my home',
                                'home-care': 'Home care',
                                treatment: "NHS treatment I've paid for",
                                'no-expenses': 'I have not had these expenses',
                                employed:
                                    'I had been in regular work for at least 3 years before the crime',
                                'underage-for-work': 'I was too young to work',
                                education: 'I was in full-time education',
                                care: 'I was caring for someone',
                                ASST: 'Physical assault',
                                WEAP: 'Assault with a weapon',
                                SEX: 'Sexual assault or abuse',
                                FMLY: 'Domestic or family violence',
                                ARSN: 'Arson',
                                PSNG: 'Poisoning',
                                ANIMAL: 'Animal attack',
                                VEHICLE: 'Vehicle attack',
                                SECV: 'Witnessing an incident',
                                OTHER: 'Other'
                            }
                        }
                    }
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-declaration',
                    cond: [
                        '==',
                        '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                        'myself'
                    ]
                },
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
                {
                    target: 'p-mainapplicant-declaration-under-12',
                    cond: [
                        'and',
                        [
                            'or',
                            ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', true],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true]
                        ],
                        [
                            'or',
                            [
                                'dateCompare',
                                '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                                '<', // is less than ...
                                '-12', // 12 ...
                                'years' // years (before, due to the negative (-12) ...
                                // today's date (no second date given. defaults to today's date).
                            ],
                            [
                                'and',
                                [
                                    '==',
                                    '$.answers.p-applicant-can-handle-affairs.q-applicant-capable',
                                    false
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                    true
                                ]
                            ]
                        ]
                    ]
                },
                {
                    target: 'p-rep-declaration-under-12',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        [
                            'or',
                            [
                                'dateCompare',
                                '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                                '<', // is less than ...
                                '-12', // 12 ...
                                'years' // years (before, due to the negative (-12) ...
                                // today's date (no second date given. defaults to today's date).
                            ],
                            [
                                'and',
                                [
                                    '==',
                                    '$.answers.p-applicant-can-handle-affairs.q-applicant-capable',
                                    false
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                    true
                                ]
                            ]
                        ]
                    ]
                },
                {
                    target: 'p-mainapplicant-declaration-12-and-over',
                    cond: [
                        'and',
                        [
                            'or',
                            ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', true],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true]
                        ],
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                            '>=', // is greater than or equeal too ...
                            '-12', // 12 ...
                            'years' // years (before, due to the negative (-12) ...
                            // today's date (no second date given. defaults to today's date).
                        ]
                    ]
                },

                {
                    target: 'p-rep-declaration-12-and-over',
                    cond: [
                        'and',
                        [
                            'or',
                            [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        [
                            'dateCompare',
                            '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                            '>=', // is greater than or equeal too ...
                            '-12', // 12 ...
                            'years' // years (before, due to the negative (-12) ...
                            // today's date (no second date given. defaults to today's date).
                        ]
                    ]
                }
            ]
        }
    }
};
