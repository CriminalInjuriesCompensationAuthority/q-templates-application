'use strict';

const {version} = require('../package.json');

const applicantDeclaration = require('./lib/resource/sections/applicant-declaration.js');
const applicantConfirmationMethod = require('./lib/resource/sections/applicant-confirmation-method.js');
const applicantAreYou18OrOver = require('./lib/resource/sections/applicant-are-you-18-or-over.js');
const applicantWhoAreYouApplyingFor = require('./lib/resource/sections/applicant-who-are-you-applying-for.js');
const wasTheCrimeReportedToPolice = require('./lib/resource/sections/was-the-crime-reported-to-police.js');
const applicantEnterYourName = require('./lib/resource/sections/applicant-enter-your-name.js');
const applicantHaveYouBeenKnownByAnyOtherNames = require('./lib/resource/sections/applicant-have-you-been-known-by-any-other-names.js');
const applicantEnterYourDateOfBirth = require('./lib/resource/sections/applicant-enter-your-date-of-birth.js');
const applicantEnterYourEmailAddress = require('./lib/resource/sections/applicant-enter-your-email-address.js');
const applicantEnterYourAddress = require('./lib/resource/sections/applicant-enter-your-address.js');
const applicantEnterYourTelephoneNumber = require('./lib/resource/sections/applicant-enter-your-telephone-number.js');
const applicantYouCannotGetCompensation = require('./lib/resource/sections/applicant-you-cannot-get-compensation.js');
const contextApplicantDetails = require('./lib/resource/sections/context-applicant-details.js');
const confirmation = require('./lib/resource/sections/confirmation.js');
const applicantFatalClaim = require('./lib/resource/sections/applicant-fatal-claim.js');
const contextCrimeReferenceNumber = require('./lib/resource/sections/context-crime-ref-no.js');
const contextResidency = require('./lib/resource/sections/context-residency-and-nationality.js');
const applicantArmedForcesRelative = require('./lib/resource/sections/applicant-armed-forces-relative.js');
const applicantArmedForces = require('./lib/resource/sections/applicant-armed-forces.js');
const applicantAppliedForAsylum = require('./lib/resource/sections/applicant-applied-for-asylum');
const applicantBritishCitizenRelative = require('./lib/resource/sections/applicant-british-citizen-relative.js');
const applicantBritishCitizen = require('./lib/resource/sections/applicant-british-citizen.js');
const applicantEeaCitizenRelative = require('./lib/resource/sections/applicant-eea-citizen-relative.js');
const applicantEeaCitizen = require('./lib/resource/sections/applicant-eea-citizen.js');
const applicantEuCitizenRelative = require('./lib/resource/sections/applicant-eu-citizen-relative.js');
const applicantEuCitizen = require('./lib/resource/sections/applicant-eu-citizen.js');
const applicantOrdinarilyResident = require('./lib/resource/sections/applicant-ordinarily-resident.js');
const applicantOtherCitizen = require('./lib/resource/sections/applicant-other-citizen.js');
const applicantVictimHumanTrafficking = require('./lib/resource/sections/applicant-victim-human-trafficking.js');
const applicantClaimType = require('./lib/resource/sections/applicant-claim-type.js');
const applicantUnder18 = require('./lib/resource/sections/applicant-under-18.js');
const transitionSomeone18OrOverToApply = require('./lib/resource/sections/transition-someone-18-or-over-to-apply.js');
const applicantWhatDoYouWantToDo = require('./lib/resource/sections/applicant-what-do-you-want-to-do.js');
const transitionApplyWhen18 = require('./lib/resource/sections/transition-apply-when-18.js');
const transitionRequestACallBack = require('./lib/resource/sections/transition-request-a-call-back.js');
const transitionContactUs = require('./lib/resource/sections/transition-contact-us.js');
const tasklist = require('./lib/resource/sections/task-list');
const canHandleAffairs = require('./lib/resource/sections/applicant-can-handle-affairs');

module.exports = {
    type: 'apply-for-compensation',
    version,
    sections: {
        'p-applicant-confirmation-method': applicantConfirmationMethod.section,
        'p-applicant-are-you-18-or-over': applicantAreYou18OrOver.section,
        'p-applicant-who-are-you-applying-for': applicantWhoAreYouApplyingFor.section,
        'p--was-the-crime-reported-to-police': wasTheCrimeReportedToPolice.section,
        'p-applicant-enter-your-name': applicantEnterYourName.section,
        'p-applicant-have-you-been-known-by-any-other-names':
            applicantHaveYouBeenKnownByAnyOtherNames.section,
        'p-applicant-enter-your-date-of-birth': applicantEnterYourDateOfBirth.section,
        'p-applicant-enter-your-email-address': applicantEnterYourEmailAddress.section,
        'p-applicant-enter-your-address': applicantEnterYourAddress.section,
        'p-applicant-enter-your-telephone-number': applicantEnterYourTelephoneNumber.section,
        'p--context-applicant-details': contextApplicantDetails.section,
        'p-applicant-fatal-claim': applicantFatalClaim.section,
        'p--context-residency-and-nationality': contextResidency.section,
        'p-applicant-armed-forces-relative': applicantArmedForcesRelative.section,
        'p-applicant-armed-forces': applicantArmedForces.section,
        'p-applicant-applied-for-asylum': applicantAppliedForAsylum.section,
        'p-applicant-british-citizen-relative': applicantBritishCitizenRelative.section,
        'p-applicant-british-citizen': applicantBritishCitizen.section,
        'p-applicant-eea-citizen-relative': applicantEeaCitizenRelative.section,
        'p-applicant-eea-citizen': applicantEeaCitizen.section,
        'p-applicant-eu-citizen-relative': applicantEuCitizenRelative.section,
        'p-applicant-eu-citizen': applicantEuCitizen.section,
        'p-applicant-ordinarily-resident': applicantOrdinarilyResident.section,
        'p-applicant-other-citizen': applicantOtherCitizen.section,
        'p-applicant-victim-human-trafficking': applicantVictimHumanTrafficking.section,
        'p-applicant-under-18': applicantUnder18.section,
        'p--transition-someone-18-or-over-to-apply': transitionSomeone18OrOverToApply.section,
        'p-applicant-what-do-you-want-to-do': applicantWhatDoYouWantToDo.section,
        'p--transition-apply-when-18': transitionApplyWhen18.section,
        'p--transition-request-a-call-back': transitionRequestACallBack.section,
        "p-applicant-declaration": applicantDeclaration.section,
        "p--confirmation": confirmation.section,
        "p-task-list": tasklist.section,
        "p-applicant-claim-type": applicantClaimType.section,
        "p-applicant-you-cannot-get-compensation": applicantYouCannotGetCompensation.section,
        "p--context-crime-ref-no": contextCrimeReferenceNumber.section,
        "p--transition-contact-us": transitionContactUs.section,
        "p-applicant-can-handle-affairs": canHandleAffairs.section
    },
    routes:{
        initial: 't-about-application',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        summary: [
            'p-applicant-declaration'
        ],
        confirmation: 'p--confirmation',
        states: [
            {
                id: 't-about-application',
                initial: 'p-applicant-who-are-you-applying-for',
                states: {
                    'p-applicant-who-are-you-applying-for': applicantWhoAreYouApplyingFor.route,
                    'p-applicant-are-you-18-or-over': applicantAreYou18OrOver.route,
                    'p-applicant-under-18': applicantUnder18.route,
                    'p--transition-apply-when-18': transitionApplyWhen18.route,
                    'p--transition-request-a-call-back': transitionRequestACallBack.route,
                    'p--transition-contact-us': transitionContactUs.route,
                    'p--transition-someone-18-or-over-to-apply': transitionSomeone18OrOverToApply.route,
                    'p-applicant-what-do-you-want-to-do': applicantWhatDoYouWantToDo.route,
                    'p--was-the-crime-reported-to-police': wasTheCrimeReportedToPolice.route,
                    'p--context-crime-ref-no': contextCrimeReferenceNumber.route,
                    'p-applicant-you-cannot-get-compensation': applicantYouCannotGetCompensation.route,
                    'p-applicant-fatal-claim': applicantFatalClaim.route,
                    'p-applicant-claim-type': applicantClaimType.route,
                },
                status: 'incomplete',
                answers:{
                },
                events:[]
            },
            {
                id: 't_applicant_personal-details',
                initial: 'p--context-applicant-details',
                states: {
                    'p--context-applicant-details': contextApplicantDetails.route,
                    'p-applicant-confirmation-method': applicantConfirmationMethod.route,
                    'p-applicant-enter-your-name': applicantEnterYourName.route,
                    'p-applicant-have-you-been-known-by-any-other-names': applicantHaveYouBeenKnownByAnyOtherNames.route,
                    'p-applicant-enter-your-date-of-birth': applicantEnterYourDateOfBirth.route,
                    'p-applicant-enter-your-address': applicantEnterYourAddress.route,
                    'p-applicant-enter-your-email-address': applicantEnterYourEmailAddress.route,
                    'p-applicant-enter-your-telephone-number': applicantEnterYourTelephoneNumber.route,
                    "p-applicant-can-handle-affairs": canHandleAffairs.route
                },
                status: 'incomplete',
                answers:{
                },
                events:[]
            },
            {
                id: 't_applicant_residency-and-nationality',
                initial: 'p--context-residency-and-nationality',
                states: {
                    'p--context-residency-and-nationality': contextResidency.route,
                    'p-applicant-british-citizen': applicantBritishCitizen.route,
                    'p-applicant-british-citizen-relative': applicantBritishCitizenRelative.route,
                    'p-applicant-ordinarily-resident': applicantOrdinarilyResident.route,
                    'p-applicant-eu-citizen': applicantEuCitizen.route,
                    'p-applicant-eu-citizen-relative': applicantEuCitizenRelative.route,
                    'p-applicant-eea-citizen': applicantEeaCitizen.route,
                    'p-applicant-eea-citizen-relative': applicantEeaCitizenRelative.route,
                    'p-applicant-other-citizen': applicantOtherCitizen.route,
                    'p-applicant-armed-forces': applicantArmedForces.route,
                    'p-applicant-armed-forces-relative': applicantArmedForcesRelative.route,
                    'p-applicant-victim-human-trafficking': applicantVictimHumanTrafficking.route,
                    'p-applicant-applied-for-asylum': applicantAppliedForAsylum.route,
                },
                status: 'incomplete',
                answers:{
                },
                events:[]
            },
            {
                "id": 't-check-your-answers',
                "initial": "p-applicant-declaration",
                "states": {
                    "p-applicant-declaration": applicantDeclaration.route,
                    "p--confirmation": confirmation.route,
                    "p-task-list": tasklist.route
                },
                "status": "incomplete",
                answers:{
                },
                events:[]
            }
        ],
        guards: {}
    },
    taskStatuses: {},
    taxonomies: {
        theme: {
            l10n: {
                vars: {
                    lng: 'en',
                    ns: 'theme'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'theme',
                        resources: {
                            'applicant-details': {
                                title: {
                                    adult: {
                                        capable: 'Your details'
                                    },
                                    proxy: 'Victim details',
                                    deceased: 'Claimant details'
                                }
                            },
                            injuries: {
                                title: {
                                    adult: {
                                        capable: 'Your injuries'
                                    },
                                    proxy: "The victim's injuries"
                                }
                            },
                            'mental-health': {
                                title: {
                                    adult: {
                                        capable: 'Your mental health'
                                    },
                                    proxy: "The victim's mental health"
                                }
                            },
                            treatment: {
                                title: {
                                    adult: {
                                        capable: 'Your treatment'
                                    },
                                    proxy: "The victim's treatment"
                                }
                            },
                            'main-applicant-details': {
                                title: {
                                    rep: {
                                        child: 'Person with authority to apply',
                                        adult: {
                                            incapable: 'Person with authority to apply'
                                        }
                                    },
                                    proxy: 'Your details'
                                }
                            },
                            'residency-and-nationality': {
                                title: {
                                    applicant: 'About your residency and nationality',
                                    proxy: "About the victim's residency and nationality",
                                    deceased: "About the claimant's residency and nationality"
                                }
                            }
                        }
                    }
                ]
            },
            taxa: {
                'about-application': {
                    title: 'About your application'
                },
                'applicant-details': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'applicant-details.title.proxy',
                        [
                            'or',
                            ['|role.all', 'myself', 'deceased'],
                            ['|role.all', 'myself', 'nonDeceased']
                        ],
                        'applicant-details.title.adult.capable',
                        ['|role.all', 'proxy', 'deceased'],
                        'applicant-details.title.deceased'
                    ]
                },
                crime: {
                    title: 'About the crime'
                },
                offender: {
                    title: 'About the offender'
                },
                injuries: {
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'injuries.title.proxy',
                        ['|role.all', 'adult', 'capable'],
                        'injuries.title.adult.capable'
                    ]
                },
                pregnancy: {
                    title: 'Pregnancy'
                },
                'mental-health': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'mental-health.title.proxy',
                        ['|role.all', 'adult', 'capable'],
                        'mental-health.title.adult.capable'
                    ]
                },
                impact: {
                    title: 'The impact the injuries have had'
                },
                'special-expenses': {
                    title: 'Special expenses'
                },
                treatment: {
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy'],
                        'treatment.title.proxy',
                        ['|role.all', 'adult', 'capable'],
                        'treatment.title.adult.capable'
                    ]
                },
                'other-compensation': {
                    title: 'Other compensation'
                },
                'additional-info': {
                    title: 'Additional information'
                },
                'main-applicant-details': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'rep', 'child'],
                        'main-applicant-details.title.rep.child',
                        ['|role.all', 'rep', 'adult', 'incapable'],
                        'main-applicant-details.title.rep.adult.incapable',
                        ['|role.all', 'proxy'],
                        'main-applicant-details.title.proxy'
                    ]
                },
                'rep-details': {
                    title: 'Your details'
                },
                'residency-and-nationality': {
                    title: [
                        '|l10nt',
                        ['|role.all', 'proxy', 'deceased'],
                        'residency-and-nationality.title.deceased',
                        ['|role.all', 'proxy', 'nonDeceased'],
                        'residency-and-nationality.title.proxy',
                        ['|role.all'],
                        'residency-and-nationality.title.applicant'
                    ]
                },
                deceased: {
                    title: 'About the deceased'
                },
                'funeral-costs': {
                    title: 'Funeral costs'
                },
                'relationship-to-deceased': {
                    title: 'Relationship to deceased'
                },
                default: {
                    title: 'Other Information'
                }
            }
        }
    },
    meta: {
        questionnaireDocumentVersion: '5.0.0',
        onComplete: {
            actions: [
                {
                    description: 'Confirmation email - applicant:adult',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond:['and',
                        ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'email'],
                        ['|role.all', 'adult', 'nonDeceased']
                    ],
                    data: {
                        templateId: '5d207246-99d7-4bb9-83e1-75a7847bb8fd',
                        emailAddress:
                            '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - applicant:adult.deceased',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'adult', 'deceased'],
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'adult', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: 'aad20568-2726-4d9f-b60c-41257e419c88',
                        emailAddress:
                            '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - applicant:adult.deceased.split',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'email'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'adult', 'deceased']
                    ],
                    data: {
                        templateId: '27a03b8a-d236-4a0d-a1e4-c2713327da96',
                        emailAddress:
                            '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - mainapplicant.applicant:adult:incapable',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'email'],
                        ['|role.all', 'mainapplicant', 'adult', 'incapable', 'nonDeceased']
                    ],
                    data: {
                        templateId: '80843f77-a68c-4d7a-b3c9-42fd0de271c2',
                        emailAddress:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation email - mainapplicant.applicant:adult:incapable.deceased',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'mainapplicant', 'adult', 'incapable', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'mainapplicant', 'adult', 'incapable', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: '21f4d5de-a219-47c8-aa3e-e5489b0fc3ed',
                        emailAddress:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation email - mainapplicant.applicant:adult:incapable.deceased.split',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'email'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'mainapplicant', 'adult', 'incapable', 'deceased']
                    ],
                    data: {
                        templateId: 'b4f6f5ec-c268-4c58-95f8-d0606317b8a2',
                        emailAddress:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - mainapplicant.applicant:child',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'email'],
                        ['|role.all', 'mainapplicant', 'child', 'nonDeceased']
                    ],
                    data: {
                        templateId: '668fac4a-3e1c-40e7-b7ac-090a410fbb03',
                        emailAddress:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - mainapplicant.applicant:child.deceased',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'mainapplicant', 'child', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'mainapplicant', 'child', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: '58708020-d8a5-4d96-b56f-91f5c4c4c590',
                        emailAddress:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation email - mainapplicant.applicant:child.deceased.split',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'email'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'mainapplicant', 'child', 'deceased']
                    ],
                    data: {
                        templateId: 'ec24f2a6-1062-486d-bd13-c6f8812e43c9',
                        emailAddress:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - rep.applicant:adult:capable',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['|role.all', 'rep', 'adult', 'capable', 'nonDeceased']
                    ],
                    data: {
                        templateId: 'b21f1aa7-cc16-41e7-8b8e-5c69e52f21f9',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - rep.applicant:adult:capable.deceased',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'rep', 'adult', 'capable', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'rep', 'adult', 'capable', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: 'ed98bf04-f338-47cf-b949-4367d8f8b707',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - rep.applicant:adult:capable.deceased.split',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'rep', 'adult', 'capable', 'deceased']
                    ],
                    data: {
                        templateId: '12bc4419-5e84-4714-b1c8-0527290bb567',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation email - rep.mainapplicant.applicant:adult:incapable.nonDeceased',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['|role.all', 'rep', 'adult', 'incapable', 'authority', 'nonDeceased']
                    ],
                    data: {
                        templateId: 'a6583a82-51ca-4f8e-b8b8-cbca763dc59a',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation email - rep.mainapplicant.applicant:adult:incapable.deceased',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'rep', 'adult', 'incapable', 'authority', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'rep', 'adult', 'incapable', 'authority', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: 'a70aaff8-8299-448b-ac22-6579c840c8e6',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation email - rep.mainapplicant.applicant:adult:incapable.deceased.split',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'rep', 'adult', 'incapable', 'authority', 'deceased']
                    ],
                    data: {
                        templateId: '74c5f4d2-9c66-4800-8a15-313a64938a43',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - rep.mainapplicant.applicant:child',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['|role.all', 'rep', 'child', 'nonDeceased']
                    ],
                    data: {
                        templateId: 'a0c7b011-b0df-4645-8ce3-6bd8f7905dfc',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - rep.mainapplicant.applicant:child.deceased',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'rep', 'child', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'rep', 'child', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: 'c72a9445-7d08-4db7-b7b9-a8d1900818ed',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation email - rep.mainapplicant.applicant:child.deceased.split',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'rep', 'child', 'deceased']
                    ],
                    data: {
                        templateId: '5d51b70e-0335-44f6-aa33-736997ba90d8',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - rep:no-legal-authority.applicant',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['|role.all', 'rep', 'noauthority', 'nonDeceased']
                    ],
                    data: {
                        templateId: 'fb865d9c-37b1-4077-b519-aacfe42c9951',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation email - rep:no-legal-authority.applicant.deceased',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'rep', 'noauthority', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'rep', 'noauthority', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: '54392a68-d12c-4f0d-8388-e8439fdbfc2f',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation email - rep:no-legal-authority.applicant.deceased.split',
                    type: 'sendEmail',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'rep', 'noauthority', 'deceased']
                    ],
                    data: {
                        templateId: '621093ee-b732-4bdf-9026-0f03977502b7',
                        emailAddress: '||/answers/p-rep-confirmation-method/q-rep-email-address||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - applicant:adult',
                    type: 'sendSms',
                    // prettier-ignore
                    cond:['and',
                        ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'text'],
                        ['|role.all', 'adult', 'nonDeceased']
                    ],
                    data: {
                        templateId: '3f1a741b-20de-4b0d-b8e8-224098291beb',
                        phoneNumber:
                            '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - applicant:adult.deceased',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'adult', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'adult', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: '46e66520-6e0a-412b-a509-18a09c8bfa35',
                        phoneNumber:
                            '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - applicant:adult.deceased.split',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'text'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'adult', 'deceased']
                    ],
                    data: {
                        templateId: 'b9d81762-9125-4a19-a016-f54fab3de0d3',
                        phoneNumber:
                            '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - mainapplicant.applicant:adult:incapable',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'text'],
                        ['|role.all', 'mainapplicant', 'adult', 'incapable', 'nonDeceased']
                    ],
                    data: {
                        templateId: '3e625f9f-75c4-4903-818e-220829bfc2af',
                        phoneNumber:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation sms - mainapplicant.applicant:adult:incapable.deceased',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'mainapplicant', 'adult', 'incapable', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'mainapplicant', 'adult', 'incapable', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: 'fe1997b8-ba0e-4c97-94f2-d4d350868596',
                        phoneNumber:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation sms - mainapplicant.applicant:adult:incapable.deceased.split',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'text'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'mainapplicant', 'adult', 'incapable', 'deceased']
                    ],
                    data: {
                        templateId: '9c4097d0-c617-431b-88ff-4f9893bd203e',
                        phoneNumber:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - mainapplicant.applicant:child',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'text'],
                        ['|role.all', 'mainapplicant', 'child', 'nonDeceased']
                    ],
                    data: {
                        templateId: 'd2185426-2177-4049-a5b1-b9c6b12e1a79',
                        phoneNumber:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - mainapplicant.applicant:child.deceased',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'mainapplicant', 'child', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'mainapplicant', 'child', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: '228454a8-c178-4f50-a7ca-5cb934dcb8b8',
                        phoneNumber:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - mainapplicant.applicant:child.deceased.split',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'text'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'mainapplicant', 'child', 'deceased']
                    ],
                    data: {
                        templateId: 'f9be1af0-7d13-4710-a008-fddec42a9c5c',
                        phoneNumber:
                            '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - rep.applicant:adult:capable',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['|role.all', 'rep', 'adult', 'capable', 'nonDeceased']
                    ],
                    data: {
                        templateId: 'b51e5e19-f469-4f8a-a5a2-00499da6f027',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - rep.applicant:adult:capable.deceased',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'rep', 'adult', 'capable', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'rep', 'adult', 'capable', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: '1e764481-69c1-4d5a-8a05-fbadc09aa47c',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - rep.applicant:adult:capable.deceased.split',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'rep', 'adult', 'capable', 'deceased']
                    ],
                    data: {
                        templateId: '05709516-af2a-4897-905f-0c72fb012d60',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation sms - rep.mainapplicant.applicant:adult:incapable.nonDeceased',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['|role.all', 'rep', 'adult', 'incapable', 'authority', 'nonDeceased']
                    ],
                    data: {
                        templateId: '94a82598-6f6b-4ad0-abc3-ad3a157eb4a3',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation sms - rep.mainapplicant.applicant:adult:incapable.deceased',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'rep', 'adult', 'incapable', 'authority', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'rep', 'adult', 'incapable', 'authority', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: '6151b209-33de-40ec-88b0-7f1a4580bf18',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation sms - rep.mainapplicant.applicant:adult:incapable.deceased.split',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'rep', 'adult', 'incapable', 'authority', 'deceased']
                    ],
                    data: {
                        templateId: 'ee1119cd-3ec1-481c-bd97-ce62a4757eeb',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - rep.mainapplicant.applicant:child',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['|role.all', 'rep', 'child', 'nonDeceased']
                    ],
                    data: {
                        templateId: '38047478-4b70-4add-b06c-62c7d93e8a23',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - rep.mainapplicant.applicant:child.deceased',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'rep', 'child', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'rep', 'child', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: '768165a8-b5cf-4ce5-acfa-a1bb533aca91',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation sms - rep.mainapplicant.applicant:child.deceased.split',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'rep', 'child', 'deceased']
                    ],
                    data: {
                        templateId: '3006bbb8-cd37-483e-8c37-e25519716d3e',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - rep:no-legal-authority.applicant',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['|role.all', 'rep', 'noauthority', 'nonDeceased']
                    ],
                    data: {
                        templateId: '29674076-46ba-4150-adf0-5215c8fe8aa9',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description: 'Confirmation sms - rep:no-legal-authority.applicant.deceased',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true],
                            ['|role.all', 'rep', 'noauthority', 'deceased']
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                            ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                            ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', false],
                            ['|role.all', 'rep', 'noauthority', 'deceased']
                        ]
                    ],
                    data: {
                        templateId: '1ef1b7ae-293c-456d-93b4-8646791450f9',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                {
                    description:
                        'Confirmation sms - rep:no-legal-authority.applicant.deceased.split',
                    type: 'sendSms',
                    // prettier-ignore
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false],
                        ['==', '$.answers.p-applicant-funeral-costs-paid.q-applicant-funeral-costs-paid', true],
                        ['|role.all', 'rep', 'noauthority', 'deceased']
                    ],
                    data: {
                        templateId: '0ce7f91a-ae1d-4bf4-bfec-64ed0019e93d',
                        phoneNumber:
                            '||/answers/p-rep-confirmation-method/q-rep-telephone-number||',
                        personalisation: {
                            content:
                                'Your bereavement application reference number is ||/answers/system/case-reference||. \nYour funeral application reference number is ||/answers/system/secondary-reference||.'
                        },
                        reference: null
                    }
                }
            ]
        },
        attributes: {'q-applicant-physical-injuries': {title: 'What was injured?'}}
    },
    attributes: {
        q__roles: {
            proxy: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'A type of proxy for the applicant e.g. mainapplicant, rep',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['==',
                        '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                        'someone-else'
                    ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            myself: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'Myself journey role',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['==',
                        '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                        'myself'
                    ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            child: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'Child applicant role',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['==',
                    '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                    false
                    ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            adult: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'Adult applicant role',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['==',
                    '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                    true
                    ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            mainapplicant: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'Main Applicant role',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['or',
                        ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', true],
                        ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true]
                    ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            rep: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'Rep role',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['or',
                        [
                            'and',
                            ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
                            ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', false],
                            ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
                            ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
                            ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', true]
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
                            ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
                            ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', false]
                        ],
                        [
                            'and',
                            ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
                            ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
                            ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', true]
                        ]
                    ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            noauthority: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'no authority role',
                    type: 'boolean',
                    // prettier-ignore
                    const:
                        ['and',
                            ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
                            ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', false],
                            ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
                            ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', false]
                        ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            incapable: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'incapable role',
                    type: 'boolean',
                    // prettier-ignore
                    const:  ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', false],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            capable: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'capable role',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['or',
                        ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', true],
                        ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'myself']
                    ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            authority: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'Legal authority role',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['or',
                        ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true],
                        ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', true]
                    ],
                    examples: [true, false],
                    invalidExamples: [{}]
                }
            },
            deceased: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'Deceased role',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', true],
                    examples: [true, false],
                    invalidExamples: [{}]
                }
            },
            nonDeceased: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'Non Deceased journey role',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', false],
                    examples: [true, false],
                    invalidExamples: [{}]
                }
            },
            childUnder12: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'child under the age of 12',
                    type: 'boolean',
                    // prettier-ignore
                    const: [
                        'dateCompare',
                        '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                        '<', // is less than ...
                        '-12', // 12 ...
                        'years' // years (before, due to the negative (-12) ...
                        // today's date (no second date given. defaults to today's date).
                    ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            childOver12: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'child over the age of 12',
                    type: 'boolean',
                    // prettier-ignore
                    const:   [
                        'dateCompare',
                        '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
                        '>=', // is greater than or equeal too ...
                        '-12', // 12 ...
                        'years' // years (before, due to the negative (-12) ...
                        // today's date (no second date given. defaults to today's date).
                    ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            },
            noContactMethod: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'has no email or text contact method',
                    type: 'boolean',
                    // prettier-ignore
                    const: ['or',
                        ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'none'],
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'none'],
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'none']
                    ],
                    examples: [{}],
                    invalidExamples: [{}]
                }
            }
        }
    }
};
