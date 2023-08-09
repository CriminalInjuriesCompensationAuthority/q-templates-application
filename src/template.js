'use strict';

const applicantDeclaration = require('./lib/resource/sections/applicant-declaration.js');
const applicantDeclarationDeceased = require('./lib/resource/sections/applicant-declaration-deceased.js');
const mainapplicantDeclaration12AndOver = require('./lib/resource/sections/mainapplicant-declaration-12-and-over.js');
const mainapplicantDeclarationUnder12 = require('./lib/resource/sections/mainapplicant-declaration-under-12.js');
const mainapplicantDeclarationUnder12Deceased = require('./lib/resource/sections/mainapplicant-declaration-under-12-deceased.js');
const mainapplicantDeclarationOver12Deceased = require('./lib/resource/sections/mainapplicant-declaration-12-and-over-deceased.js');
const repDeclarationUnder12 = require('./lib/resource/sections/rep-declaration-under-12.js');
const repDeclarationUnder12Deceased = require('./lib/resource/sections/rep-declaration-under-12-deceased.js');
const repDeclaration12AndOver = require('./lib/resource/sections/rep-declaration-12-and-over.js');
const repDeclaration12AndOverDeceased = require('./lib/resource/sections/rep-declaration-12-and-over-deceased');
const transitionNoPhoneOrEmail = require('./lib/resource/sections/transition-no-phone-or-email.js');
const applicantConfirmationMethod = require('./lib/resource/sections/applicant-confirmation-method.js');
const applicantBritishCitizenOrEuNational = require('./lib/resource/sections/applicant-british-citizen-or-eu-national.js');
const applicantAreYou18OrOver = require('./lib/resource/sections/applicant-are-you-18-or-over.js');
const applicantWhoAreYouApplyingFor = require('./lib/resource/sections/applicant-who-are-you-applying-for.js');
const beforeYouContinue = require('./lib/resource/sections/before-you-continue.js');
const wasTheCrimeReportedToPolice = require('./lib/resource/sections/was-the-crime-reported-to-police.js');
const whenWasTheCrimeReportedToPolice = require('./lib/resource/sections/when-was-the-crime-reported-to-police.js');
const whatsTheCrimeReferenceNumber = require('./lib/resource/sections/whats-the-crime-reference-number.js');
const applicantDidTheCrimeHappenOnceOrOverTime = require('./lib/resource/sections/applicant-did-the-crime-happen-once-or-over-time.js');
const applicantWhenDidTheCrimeHappen = require('./lib/resource/sections/applicant-when-did-the-crime-happen.js');
const applicantWhenDidTheCrimeStart = require('./lib/resource/sections/applicant-when-did-the-crime-start.js');
const applicantWhenDidTheCrimeStop = require('./lib/resource/sections/applicant-when-did-the-crime-stop.js');
const applicantSelectReasonsForTheDelayInMakingYourApplication = require('./lib/resource/sections/applicant-select-reasons-for-the-delay-in-making-your-application.js');
const applicantWhereDidTheCrimeHappen = require('./lib/resource/sections/applicant-where-did-the-crime-happen.js');
const applicantWhereInEnglandDidItHappen = require('./lib/resource/sections/applicant-where-in-england-did-it-happen.js');
const applicantWhereInScotlandDidItHappen = require('./lib/resource/sections/applicant-where-in-scotland-did-it-happen.js');
const applicantWhereInWalesDidItHappen = require('./lib/resource/sections/applicant-where-in-wales-did-it-happen.js');
const youNeedToContactUs = require('./lib/resource/sections/you-need-to-contact-us.js');
const whichPoliceForceIsInvestigatingTheCrime = require('./lib/resource/sections/which-police-force-is-investigating-the-crime.js');
const applicantSelectReasonsForTheDelayInReportingTheCrimeToPolice = require('./lib/resource/sections/applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police.js');
const offenderDoYouKnowTheNameOfTheOffender = require('./lib/resource/sections/offender-do-you-know-the-name-of-the-offender.js');
const offenderEnterOffendersName = require('./lib/resource/sections/offender-enter-offenders-name.js');
const offenderDoYouHaveContactWithOffender = require('./lib/resource/sections/offender-do-you-have-contact-with-offender.js');
const offenderDescribeContactWithOffender = require('./lib/resource/sections/offender-describe-contact-with-offender.js');
const applicantHaveYouAppliedToUsBefore = require('./lib/resource/sections/applicant-have-you-applied-to-us-before.js');
const applicantHaveYouAppliedForOrReceivedAnyOtherCompensation = require('./lib/resource/sections/applicant-have-you-applied-for-or-received-any-other-compensation.js');
const applicantEnterYourName = require('./lib/resource/sections/applicant-enter-your-name.js');
const applicantHaveYouBeenKnownByAnyOtherNames = require('./lib/resource/sections/applicant-have-you-been-known-by-any-other-names.js');
const applicantWhatOtherNamesHaveYouUsed = require('./lib/resource/sections/applicant-what-other-names-have-you-used.js');
const applicantEnterYourDateOfBirth = require('./lib/resource/sections/applicant-enter-your-date-of-birth.js');
const applicantEnterYourEmailAddress = require('./lib/resource/sections/applicant-enter-your-email-address.js');
const applicantEnterYourAddress = require('./lib/resource/sections/applicant-enter-your-address.js');
const applicantEnterYourTelephoneNumber = require('./lib/resource/sections/applicant-enter-your-telephone-number.js');
const checkYourAnswers = require('./lib/resource/sections/check-your-answers.js');
const confirmation = require('./lib/resource/sections/confirmation.js');
const applicantYouCannotGetCompensation = require('./lib/resource/sections/applicant-you-cannot-get-compensation.js');
const contextOffender = require('./lib/resource/sections/context-offender.js');
const contextCompensation = require('./lib/resource/sections/context-compensation.js');
const applicantAppliedForOtherCompensationBrieflyExplainWhyNot = require('./lib/resource/sections/applicant-applied-for-other-compensation-briefly-explain-why-not.js');
const applicantWhoDidYouApplyTo = require('./lib/resource/sections/applicant-who-did-you-apply-to.js');
const applicantHasADecisionBeenMade = require('./lib/resource/sections/applicant-has-a-decision-been-made.js');
const applicantHowMuchWasAward = require('./lib/resource/sections/applicant-how-much-was-award.js');
const applicantWhenWillYouFindOut = require('./lib/resource/sections/applicant-when-will-you-find-out.js');
const contextApplicantDetails = require('./lib/resource/sections/context-applicant-details.js');
const contextDmiDetails = require('./lib/resource/sections/context-dmi-details.js');
const applicantDoYouHaveDisablingMentalInjury = require('./lib/resource/sections/applicant-do-you-have-disabling-mental-injury.js');
const applicantMentalInjuryDuration = require('./lib/resource/sections/applicant-mental-injury-duration.js');
const applicantSelectTreatments = require('./lib/resource/sections/applicant-select-treatments.js');
const applicantHasYourTreatmentFinishedDmi = require('./lib/resource/sections/applicant-has-your-treatment-finished-dmi.js');
const applicantAffectOnDailyLifeDmi = require('./lib/resource/sections/applicant-affect-on-daily-life-dmi.js');
const applicantAreYouRegisteredWithGp = require('./lib/resource/sections/applicant-are-you-registered-with-gp.js');
const applicantHaveYouSeenAGp = require('./lib/resource/sections/applicant-have-you-seen-a-gp.js');
const gpEnterYourAddress = require('./lib/resource/sections/gp-enter-your-address.js');
const applicantDentistVisited = require('./lib/resource/sections/applicant-dentist-visited.js');
const applicantDentistAddress = require('./lib/resource/sections/applicant-dentist-address.js');
const applicantAreYouClaimingForPhysicalInjuries = require('./lib/resource/sections/applicant-are-you-claiming-for-physical-injuries.js');
const transition = require('./lib/resource/sections/transition.js');
const contextPhysicalInjuries = require('./lib/resource/sections/context-physical-injuries.js');
const applicantPhysicalInjury = require('./lib/resource/sections/applicant-physical-injury.js');
const applicantPhysicalInjuryUpper = require('./lib/resource/sections/applicant-physical-injury-upper.js');
const applicantPhysicalInjuryUpperHead = require('./lib/resource/sections/applicant-physical-injury-upper-head.js');
const applicantPhysicalInjuryUpperFace = require('./lib/resource/sections/applicant-physical-injury-upper-face.js');
const applicantPhysicalInjuryUpperNeck = require('./lib/resource/sections/applicant-physical-injury-upper-neck.js');
const applicantPhysicalInjuryUpperEye = require('./lib/resource/sections/applicant-physical-injury-upper-eye.js');
const applicantPhysicalInjuryUpperEar = require('./lib/resource/sections/applicant-physical-injury-upper-ear.js');
const applicantPhysicalInjuryUpperNose = require('./lib/resource/sections/applicant-physical-injury-upper-nose.js');
const applicantPhysicalInjuryUpperMouth = require('./lib/resource/sections/applicant-physical-injury-upper-mouth.js');
const applicantPhysicalInjuryUpperSkin = require('./lib/resource/sections/applicant-physical-injury-upper-skin.js');
const applicantPhysicalInjuryUpperMuscle = require('./lib/resource/sections/applicant-physical-injury-upper-muscle.js');
const applicantPhysicalInjuryTorso = require('./lib/resource/sections/applicant-physical-injury-torso.js');
const applicantPhysicalInjuryTorsoShoulder = require('./lib/resource/sections/applicant-physical-injury-torso-shoulder.js');
const applicantPhysicalInjuryTorsoChest = require('./lib/resource/sections/applicant-physical-injury-torso-chest.js');
const applicantPhysicalInjuryTorsoAbdomen = require('./lib/resource/sections/applicant-physical-injury-torso-abdomen.js');
const applicantPhysicalInjuryTorsoBack = require('./lib/resource/sections/applicant-physical-injury-torso-back.js');
const applicantPhysicalInjuryTorsoPelvis = require('./lib/resource/sections/applicant-physical-injury-torso-pelvis.js');
const applicantPhysicalInjuryTorsoGenitals = require('./lib/resource/sections/applicant-physical-injury-torso-genitals.js');
const applicantPhysicalInjuryTorsoSkin = require('./lib/resource/sections/applicant-physical-injury-torso-skin.js');
const applicantPhysicalInjuryTorsoMuscle = require('./lib/resource/sections/applicant-physical-injury-torso-muscle.js');
const applicantPhysicalInjuryArms = require('./lib/resource/sections/applicant-physical-injury-arms.js');
const applicantPhysicalInjuryArmsShoulder = require('./lib/resource/sections/applicant-physical-injury-arms-shoulder.js');
const applicantPhysicalInjuryArmsArm = require('./lib/resource/sections/applicant-physical-injury-arms-arm.js');
const applicantPhysicalInjuryArmsElbow = require('./lib/resource/sections/applicant-physical-injury-arms-elbow.js');
const applicantPhysicalInjuryArmsWrist = require('./lib/resource/sections/applicant-physical-injury-arms-wrist.js');
const applicantPhysicalInjuryArmsHand = require('./lib/resource/sections/applicant-physical-injury-arms-hand.js');
const applicantPhysicalInjuryArmsDigit = require('./lib/resource/sections/applicant-physical-injury-arms-digit.js');
const applicantPhysicalInjuryArmsSkin = require('./lib/resource/sections/applicant-physical-injury-arms-skin.js');
const applicantPhysicalInjuryArmsMuscle = require('./lib/resource/sections/applicant-physical-injury-arms-muscle.js');
const applicantPhysicalInjuryLegs = require('./lib/resource/sections/applicant-physical-injury-legs.js');
const applicantPhysicalInjuryLegsHip = require('./lib/resource/sections/applicant-physical-injury-legs-hip.js');
const applicantPhysicalInjuryLegsLeg = require('./lib/resource/sections/applicant-physical-injury-legs-leg.js');
const applicantPhysicalInjuryLegsKnee = require('./lib/resource/sections/applicant-physical-injury-legs-knee.js');
const applicantPhysicalInjuryLegsAnkle = require('./lib/resource/sections/applicant-physical-injury-legs-ankle.js');
const applicantPhysicalInjuryLegsFoot = require('./lib/resource/sections/applicant-physical-injury-legs-foot.js');
const applicantPhysicalInjuryLegsToes = require('./lib/resource/sections/applicant-physical-injury-legs-toes.js');
const applicantPhysicalInjuryLegsSkin = require('./lib/resource/sections/applicant-physical-injury-legs-skin.js');
const applicantPhysicalInjuryLegsMuscle = require('./lib/resource/sections/applicant-physical-injury-legs-muscle.js');
const applicantInfections = require('./lib/resource/sections/applicant-infections.js');
const applicantSelectInfections = require('./lib/resource/sections/applicant-select-infections.js');
const applicantPregnancy = require('./lib/resource/sections/applicant-pregnancy.js');
const contextTreatment = require('./lib/resource/sections/context-treatment.js');
const applicantTreatmentForPhysicalInjuries = require('./lib/resource/sections/applicant-treatment-for-physical-injuries.js');
const applicantMedicalHelp = require('./lib/resource/sections/applicant-medical-help.js');
const applicantTreatmentAddress = require('./lib/resource/sections/applicant-treatment-address.js');
const applicantUnableToWorkDuration = require('./lib/resource/sections/applicant-unable-to-work-duration.js');
const applicantJobWhenCrimeHappened = require('./lib/resource/sections/applicant-job-when-crime-happened.js');
const applicantWorkDetailsOption = require('./lib/resource/sections/applicant-work-details-option.js');
const applicantExpenses = require('./lib/resource/sections/applicant-expenses.js');
const contextMoney = require('./lib/resource/sections/context-money.js');
const applicantPregnancyLoss = require('./lib/resource/sections/applicant-pregnancy-loss.js');
const applicantSelectNonSaInfections = require('./lib/resource/sections/applicant-select-non-sa-infections.js');
const applicantFatalClaim = require('./lib/resource/sections/applicant-fatal-claim.js');
const applicantIncidentType = require('./lib/resource/sections/applicant-incident-type.js');
const applicantProvideAdditionalInformation = require('./lib/resource/sections/applicant-provide-additional-information.js');
const applicantAdditionalInformation = require('./lib/resource/sections/applicant-additional-information.js');
const applicantDescribeIncident = require('./lib/resource/sections/applicant-describe-incident.js');
const applicantIncidentDescription = require('./lib/resource/sections/applicant-incident-description.js');
const applicantHasCrimeReferenceNumber = require('./lib/resource/sections/applicant-has-crime-reference-number.js');
const contextAdditionalInfo = require('./lib/resource/sections/context-additional-info.js');
const system = require('./lib/resource/sections/system.js');
const contextCrimeImpact = require('./lib/resource/sections/context-crime-impact.js');
const mainapplicantParent = require('./lib/resource/sections/mainapplicant-parent');
const contextAuthority = require('./lib/resource/sections/context-authority');
const mainapplicantContextDetails = require('./lib/resource/sections/mainapplicant-context-details.js');
const mainapplicantConfirmationMethod = require('./lib/resource/sections/mainapplicant-confirmation-method.js');
const mainapplicantEnterYourName = require('./lib/resource/sections/mainapplicant-enter-your-name.js');
const mainapplicantEnterYourAddress = require('./lib/resource/sections/mainapplicant-enter-your-address.js');
const mainapplicantEnterYourEmailAddress = require('./lib/resource/sections/mainapplicant-enter-your-email-address.js');
const mainapplicantEnterYourTelephoneNumber = require('./lib/resource/sections/mainapplicant-enter-your-telephone-number.js');
const mainapplicantRelationship = require('./lib/resource/sections/mainapplicant-relationship.js');
const mainapplicantSharedResponsibility = require('./lib/resource/sections/mainapplicant-shared-responsibility.js');
const mainapplicantSharedResponsibilityName = require('./lib/resource/sections/mainapplicant-shared-responsibility-name.js');
const mainapplicantCareOrder = require('./lib/resource/sections/mainapplicant-care-order.js');
const mainapplicantCareOrderAuthority = require('./lib/resource/sections/mainapplicant-care-order-authority.js');
const contextPregnancy = require('./lib/resource/sections/context-pregnancy.js');
const applicantUnableToWork = require('./lib/resource/sections/applicant-unable-to-work.js');
const applicantSeTreatment = require('./lib/resource/sections/applicant-se-treatment.js');
const applicantSeHomeCare = require('./lib/resource/sections/applicant-se-home-care.js');
const applicantSeHomeChanges = require('./lib/resource/sections/applicant-se-home-changes.js');
const applicantSeAids = require('./lib/resource/sections/applicant-se-aids.js');
const applicantSeEquipment = require('./lib/resource/sections/applicant-se-equipment.js');
const applicantSeOther = require('./lib/resource/sections/applicant-se-other.js');
const contextSpecialExpenses = require('./lib/resource/sections/context-special-expenses.js');
const applicantOver16 = require('./lib/resource/sections/applicant-over-16.js');
const applicantAffectedDailyCapacity = require('./lib/resource/sections/applicant-affected-daily-capacity.js');
const applicantAffectDuration = require('./lib/resource/sections/applicant-affect-duration.js');
const applicantAffectFutureDuration = require('./lib/resource/sections/applicant-affect-future-duration.js');
const applicantFutureWork = require('./lib/resource/sections/applicant-future-work.js');
const contextRepDetails = require('./lib/resource/sections/context-rep-details.js');
const repType = require('./lib/resource/sections/rep-type.js');
const repConfirmationMethod = require('./lib/resource/sections/rep-confirmation-method.js');
const repName = require('./lib/resource/sections/rep-name.js');
const repAddress = require('./lib/resource/sections/rep-address.js');
const repOrganisationAddress = require('./lib/resource/sections/rep-organisation-address.js');
const repEmailAddress = require('./lib/resource/sections/rep-email-address.js');
const repTelephoneNumber = require('./lib/resource/sections/rep-telephone-number.js');
const repReferenceNumber = require('./lib/resource/sections/rep-reference-number.js');
const repClaimsManagementRegNumber = require('./lib/resource/sections/rep-claims-management-reg');
const newOrExistingApp = require('./lib/resource/sections/new-or-existing-application');
const contactCica = require('./lib/resource/sections/contact-cica');
const applicantCanHandleAffairs = require('./lib/resource/sections/applicant-can-handle-affairs');
const contextMainAppDetails = require('./lib/resource/sections/context-mainapplicant-details.js');
const mainApplicantAuthorityToApply = require('./lib/resource/sections/mainapplicant-authority');
const downloadAnswers = require('./lib/resource/sections/download-your-answers');
const flowHasLegalAuthority = require('./lib/resource/sections/flow-has-legal-authority');
const flowRepresentsLegalAuthority = require('./lib/resource/sections/flow-represents-legal-authority');
const owner = require('./lib/resource/sections/owner');
const contextDeceasedDetails = require('./lib/resource/sections/context-deceased-details.js');
const deceasedName = require('./lib/resource/sections/deceased-name.js');
const deceasedDateOfBirth = require('./lib/resource/sections/deceased-date-of-birth.js');
const deceasedDateOfDeath = require('./lib/resource/sections/deceased-date-of-death.js');
const deceasedAddress = require('./lib/resource/sections/deceased-address.js');
const contextFuneralCost = require('./lib/resource/sections/context-funeral-costs.js');
const applicantFuneralCostsPaid = require('./lib/resource/sections/applicant-funeral-costs-paid.js');
const applicantFuneralCostsOtherContributor = require('./lib/resource/sections/applicant-funeral-costs-other-contributor');
const applicantFuneralCostsWhoContributed = require('./lib/resource/sections/applicant-funeral-costs-who-contributed.js');
const applicantFuneralCostsTotal = require('./lib/resource/sections/applicant-funeral-costs-total.js');
const contextRelationshipToDeceased = require('./lib/resource/sections/context-relationship-to-deceased.js');
const applicantRelationshipToDeceased = require('./lib/resource/sections/applicant-relationship-to-deceased.js');
const applicantLivingTogether = require('./lib/resource/sections/applicant-living-together.js');
const applicantLivingTogetherDuration = require('./lib/resource/sections/applicant-living-together-duration.js');
const applicantLivingApart = require('./lib/resource/sections/applicant-living-apart.js');
const applicantContactWithDeceased = require('./lib/resource/sections/applicant-contact-with-deceased.js');
const applicantContactMoreDetails = require('./lib/resource/sections/applicant-contact-more-details.js');
const applicantContactOutOfTouch = require('./lib/resource/sections/applicant-contact-out-of-touch.js');
const applicantFinancialHelp = require('./lib/resource/sections/applicant-financial-help.js');
const otherClaimants = require('./lib/resource/sections/other-claimants.js');
const otherClaimantsDetails = require('./lib/resource/sections/other-claimants-details.js');
const contextFuneralCostsProof = require('./lib/resource/sections/context-funeral-costs-proof.js');
const applicantPhysicalHelp = require('./lib/resource/sections/applicant-physical-help.js');
const applicantClaimType = require('./lib/resource/sections/applicant-claim-type.js');
const applicantImmediateAftermath = require('./lib/resource/sections/applicant-immediate-aftermath.js');
const applicantDisablingMentalInjury = require('./lib/resource/sections/applicant-disabling-mental-injury.js');

module.exports = {
    type: 'apply-for-compensation',
    version: '8.0.4',
    sections: {
        'p-applicant-declaration': applicantDeclaration.section,
        'p-applicant-declaration-deceased': applicantDeclarationDeceased.section,
        'p-mainapplicant-declaration-12-and-over': mainapplicantDeclaration12AndOver.section,
        'p-mainapplicant-declaration-under-12': mainapplicantDeclarationUnder12.section,
        'p-mainapplicant-declaration-12-and-over-deceased':
            mainapplicantDeclarationOver12Deceased.section,
        'p-mainapplicant-declaration-under-12-deceased':
            mainapplicantDeclarationUnder12Deceased.section,
        'p-rep-declaration-under-12': repDeclarationUnder12.section,
        'p-rep-declaration-under-12-deceased': repDeclarationUnder12Deceased.section,
        'p-rep-declaration-12-and-over': repDeclaration12AndOver.section,
        'p-rep-declaration-12-and-over-deceased': repDeclaration12AndOverDeceased.section,
        'p--transition-no-phone-or-email': transitionNoPhoneOrEmail.section,
        'p-applicant-confirmation-method': applicantConfirmationMethod.section,
        'p-applicant-british-citizen-or-eu-national': applicantBritishCitizenOrEuNational.section,
        'p-applicant-are-you-18-or-over': applicantAreYou18OrOver.section,
        'p-applicant-who-are-you-applying-for': applicantWhoAreYouApplyingFor.section,
        'p--before-you-continue': beforeYouContinue.section,
        'p--was-the-crime-reported-to-police': wasTheCrimeReportedToPolice.section,
        'p--when-was-the-crime-reported-to-police': whenWasTheCrimeReportedToPolice.section,
        'p--whats-the-crime-reference-number': whatsTheCrimeReferenceNumber.section,
        'p-applicant-did-the-crime-happen-once-or-over-time':
            applicantDidTheCrimeHappenOnceOrOverTime.section,
        'p-applicant-when-did-the-crime-happen': applicantWhenDidTheCrimeHappen.section,
        'p-applicant-when-did-the-crime-start': applicantWhenDidTheCrimeStart.section,
        'p-applicant-when-did-the-crime-stop': applicantWhenDidTheCrimeStop.section,
        'p-applicant-select-reasons-for-the-delay-in-making-your-application':
            applicantSelectReasonsForTheDelayInMakingYourApplication.section,
        'p-applicant-where-did-the-crime-happen': applicantWhereDidTheCrimeHappen.section,
        'p-applicant-where-in-england-did-it-happen': applicantWhereInEnglandDidItHappen.section,
        'p-applicant-where-in-scotland-did-it-happen': applicantWhereInScotlandDidItHappen.section,
        'p-applicant-where-in-wales-did-it-happen': applicantWhereInWalesDidItHappen.section,
        'p--you-need-to-contact-us': youNeedToContactUs.section,
        'p--which-police-force-is-investigating-the-crime':
            whichPoliceForceIsInvestigatingTheCrime.section,
        'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police':
            applicantSelectReasonsForTheDelayInReportingTheCrimeToPolice.section,
        'p-offender-do-you-know-the-name-of-the-offender':
            offenderDoYouKnowTheNameOfTheOffender.section,
        'p-offender-enter-offenders-name': offenderEnterOffendersName.section,
        'p-offender-do-you-have-contact-with-offender':
            offenderDoYouHaveContactWithOffender.section,
        'p-offender-describe-contact-with-offender': offenderDescribeContactWithOffender.section,
        'p-applicant-have-you-applied-to-us-before': applicantHaveYouAppliedToUsBefore.section,
        'p-applicant-have-you-applied-for-or-received-any-other-compensation':
            applicantHaveYouAppliedForOrReceivedAnyOtherCompensation.section,
        'p-applicant-enter-your-name': applicantEnterYourName.section,
        'p-applicant-have-you-been-known-by-any-other-names':
            applicantHaveYouBeenKnownByAnyOtherNames.section,
        'p-applicant-what-other-names-have-you-used': applicantWhatOtherNamesHaveYouUsed.section,
        'p-applicant-enter-your-date-of-birth': applicantEnterYourDateOfBirth.section,
        'p-applicant-enter-your-email-address': applicantEnterYourEmailAddress.section,
        'p-applicant-enter-your-address': applicantEnterYourAddress.section,
        'p-applicant-enter-your-telephone-number': applicantEnterYourTelephoneNumber.section,
        'p--check-your-answers': checkYourAnswers.section,
        'p--confirmation': confirmation.section,
        'p-applicant-you-cannot-get-compensation': applicantYouCannotGetCompensation.section,
        'p--context-offender': contextOffender.section,
        'p--context-compensation': contextCompensation.section,
        'p-applicant-applied-for-other-compensation-briefly-explain-why-not':
            applicantAppliedForOtherCompensationBrieflyExplainWhyNot.section,
        'p-applicant-who-did-you-apply-to': applicantWhoDidYouApplyTo.section,
        'p-applicant-has-a-decision-been-made': applicantHasADecisionBeenMade.section,
        'p-applicant-how-much-was-award': applicantHowMuchWasAward.section,
        'p-applicant-when-will-you-find-out': applicantWhenWillYouFindOut.section,
        'p--context-applicant-details': contextApplicantDetails.section,
        'p--context-dmi-details': contextDmiDetails.section,
        'p-applicant-do-you-have-disabling-mental-injury':
            applicantDoYouHaveDisablingMentalInjury.section,
        'p-applicant-mental-injury-duration': applicantMentalInjuryDuration.section,
        'p-applicant-select-treatments': applicantSelectTreatments.section,
        'p-applicant-has-your-treatment-finished-dmi': applicantHasYourTreatmentFinishedDmi.section,
        'p-applicant-affect-on-daily-life-dmi': applicantAffectOnDailyLifeDmi.section,
        'p-applicant-are-you-registered-with-gp': applicantAreYouRegisteredWithGp.section,
        'p-applicant-have-you-seen-a-gp': applicantHaveYouSeenAGp.section,
        'p-gp-enter-your-address': gpEnterYourAddress.section,
        'p-applicant-dentist-visited': applicantDentistVisited.section,
        'p-applicant-dentist-address': applicantDentistAddress.section,
        'p-applicant-are-you-claiming-for-physical-injuries':
            applicantAreYouClaimingForPhysicalInjuries.section,
        'p--transition': transition.section,
        'p--context-physical-injuries': contextPhysicalInjuries.section,
        'p-applicant-physical-injury': applicantPhysicalInjury.section,
        'p-applicant-physical-injury-upper': applicantPhysicalInjuryUpper.section,
        'p-applicant-physical-injury-upper-head': applicantPhysicalInjuryUpperHead.section,
        'p-applicant-physical-injury-upper-face': applicantPhysicalInjuryUpperFace.section,
        'p-applicant-physical-injury-upper-neck': applicantPhysicalInjuryUpperNeck.section,
        'p-applicant-physical-injury-upper-eye': applicantPhysicalInjuryUpperEye.section,
        'p-applicant-physical-injury-upper-ear': applicantPhysicalInjuryUpperEar.section,
        'p-applicant-physical-injury-upper-nose': applicantPhysicalInjuryUpperNose.section,
        'p-applicant-physical-injury-upper-mouth': applicantPhysicalInjuryUpperMouth.section,
        'p-applicant-physical-injury-upper-skin': applicantPhysicalInjuryUpperSkin.section,
        'p-applicant-physical-injury-upper-muscle': applicantPhysicalInjuryUpperMuscle.section,
        'p-applicant-physical-injury-torso': applicantPhysicalInjuryTorso.section,
        'p-applicant-physical-injury-torso-shoulder': applicantPhysicalInjuryTorsoShoulder.section,
        'p-applicant-physical-injury-torso-chest': applicantPhysicalInjuryTorsoChest.section,
        'p-applicant-physical-injury-torso-abdomen': applicantPhysicalInjuryTorsoAbdomen.section,
        'p-applicant-physical-injury-torso-back': applicantPhysicalInjuryTorsoBack.section,
        'p-applicant-physical-injury-torso-pelvis': applicantPhysicalInjuryTorsoPelvis.section,
        'p-applicant-physical-injury-torso-genitals': applicantPhysicalInjuryTorsoGenitals.section,
        'p-applicant-physical-injury-torso-skin': applicantPhysicalInjuryTorsoSkin.section,
        'p-applicant-physical-injury-torso-muscle': applicantPhysicalInjuryTorsoMuscle.section,
        'p-applicant-physical-injury-arms': applicantPhysicalInjuryArms.section,
        'p-applicant-physical-injury-arms-shoulder': applicantPhysicalInjuryArmsShoulder.section,
        'p-applicant-physical-injury-arms-arm': applicantPhysicalInjuryArmsArm.section,
        'p-applicant-physical-injury-arms-elbow': applicantPhysicalInjuryArmsElbow.section,
        'p-applicant-physical-injury-arms-wrist': applicantPhysicalInjuryArmsWrist.section,
        'p-applicant-physical-injury-arms-hand': applicantPhysicalInjuryArmsHand.section,
        'p-applicant-physical-injury-arms-digit': applicantPhysicalInjuryArmsDigit.section,
        'p-applicant-physical-injury-arms-skin': applicantPhysicalInjuryArmsSkin.section,
        'p-applicant-physical-injury-arms-muscle': applicantPhysicalInjuryArmsMuscle.section,
        'p-applicant-physical-injury-legs': applicantPhysicalInjuryLegs.section,
        'p-applicant-physical-injury-legs-hip': applicantPhysicalInjuryLegsHip.section,
        'p-applicant-physical-injury-legs-leg': applicantPhysicalInjuryLegsLeg.section,
        'p-applicant-physical-injury-legs-knee': applicantPhysicalInjuryLegsKnee.section,
        'p-applicant-physical-injury-legs-ankle': applicantPhysicalInjuryLegsAnkle.section,
        'p-applicant-physical-injury-legs-foot': applicantPhysicalInjuryLegsFoot.section,
        'p-applicant-physical-injury-legs-toes': applicantPhysicalInjuryLegsToes.section,
        'p-applicant-physical-injury-legs-skin': applicantPhysicalInjuryLegsSkin.section,
        'p-applicant-physical-injury-legs-muscle': applicantPhysicalInjuryLegsMuscle.section,
        'p-applicant-infections': applicantInfections.section,
        'p-applicant-select-infections': applicantSelectInfections.section,
        'p-applicant-pregnancy': applicantPregnancy.section,
        'p--context-treatment': contextTreatment.section,
        'p-applicant-treatment-for-physical-injuries':
            applicantTreatmentForPhysicalInjuries.section,
        'p-applicant-medical-help': applicantMedicalHelp.section,
        'p-applicant-treatment-address': applicantTreatmentAddress.section,
        'p-applicant-unable-to-work-duration': applicantUnableToWorkDuration.section,
        'p-applicant-job-when-crime-happened': applicantJobWhenCrimeHappened.section,
        'p-applicant-work-details-option': applicantWorkDetailsOption.section,
        'p-applicant-expenses': applicantExpenses.section,
        'p--context-money': contextMoney.section,
        'p-applicant-pregnancy-loss': applicantPregnancyLoss.section,
        'p-applicant-select-non-sa-infections': applicantSelectNonSaInfections.section,
        'p-applicant-fatal-claim': applicantFatalClaim.section,
        'p-applicant-incident-type': applicantIncidentType.section,
        'p-applicant-provide-additional-information': applicantProvideAdditionalInformation.section,
        'p-applicant-additional-information': applicantAdditionalInformation.section,
        'p-applicant-describe-incident': applicantDescribeIncident.section,
        'p-applicant-incident-description': applicantIncidentDescription.section,
        'p-applicant-has-crime-reference-number': applicantHasCrimeReferenceNumber.section,
        'p--context-additional-info': contextAdditionalInfo.section,
        system: system.section,
        'p--context-crime-impact': contextCrimeImpact.section,
        'p-mainapplicant-parent': mainapplicantParent.section,
        'p--context-authority': contextAuthority.section,
        'p-mainapplicant-context-details': mainapplicantContextDetails.section,
        'p-mainapplicant-confirmation-method': mainapplicantConfirmationMethod.section,
        'p-mainapplicant-enter-your-name': mainapplicantEnterYourName.section,
        'p-mainapplicant-enter-your-address': mainapplicantEnterYourAddress.section,
        'p-mainapplicant-enter-your-email-address': mainapplicantEnterYourEmailAddress.section,
        'p-mainapplicant-enter-your-telephone-number':
            mainapplicantEnterYourTelephoneNumber.section,
        'p-mainapplicant-relationship': mainapplicantRelationship.section,
        'p-mainapplicant-shared-responsibility': mainapplicantSharedResponsibility.section,
        'p-mainapplicant-shared-responsibility-name': mainapplicantSharedResponsibilityName.section,
        'p-mainapplicant-care-order': mainapplicantCareOrder.section,
        'p-mainapplicant-care-order-authority': mainapplicantCareOrderAuthority.section,
        'p--context-pregnancy': contextPregnancy.section,
        'p-applicant-unable-to-work': applicantUnableToWork.section,
        'p-applicant-se-treatment': applicantSeTreatment.section,
        'p-applicant-se-home-care': applicantSeHomeCare.section,
        'p-applicant-se-home-changes': applicantSeHomeChanges.section,
        'p-applicant-se-aids': applicantSeAids.section,
        'p-applicant-se-equipment': applicantSeEquipment.section,
        'p-applicant-se-other': applicantSeOther.section,
        'p--context-special-expenses': contextSpecialExpenses.section,
        'p-applicant-over-16': applicantOver16.section,
        'p-applicant-affected-daily-capacity': applicantAffectedDailyCapacity.section,
        'p-applicant-affect-duration': applicantAffectDuration.section,
        'p-applicant-affect-future-duration': applicantAffectFutureDuration.section,
        'p-applicant-future-work': applicantFutureWork.section,
        'p--context-rep-details': contextRepDetails.section,
        'p-rep-type': repType.section,
        'p-rep-confirmation-method': repConfirmationMethod.section,
        'p-rep-name': repName.section,
        'p-rep-address': repAddress.section,
        'p-rep-organisation-address': repOrganisationAddress.section,
        'p-rep-email-address': repEmailAddress.section,
        'p-rep-telephone-number': repTelephoneNumber.section,
        'p-rep-reference-number': repReferenceNumber.section,
        'p-rep-claims-management-reg': repClaimsManagementRegNumber.section,
        'p--new-or-existing-application': newOrExistingApp.section,
        'p--contact-cica': contactCica.section,
        'p-applicant-can-handle-affairs': applicantCanHandleAffairs.section,
        'p--context-mainapplicant-details': contextMainAppDetails.section,
        'p-mainapplicant-authority': mainApplicantAuthorityToApply.section,
        'p--download-your-answers': downloadAnswers.section,
        'p--has-legal-authority': flowHasLegalAuthority.section,
        'p--represents-legal-authority': flowRepresentsLegalAuthority.section,
        owner: owner.section,
        'p--context-deceased-details': contextDeceasedDetails.section,
        'p-deceased-name': deceasedName.section,
        'p-deceased-date-of-birth': deceasedDateOfBirth.section,
        'p-deceased-date-of-death': deceasedDateOfDeath.section,
        'p-deceased-address': deceasedAddress.section,
        'p--context-funeral-costs': contextFuneralCost.section,
        'p-applicant-funeral-costs-paid': applicantFuneralCostsPaid.section,
        'p-applicant-funeral-costs-other-contributor':
            applicantFuneralCostsOtherContributor.section,
        'p-applicant-funeral-costs-who-contributed': applicantFuneralCostsWhoContributed.section,
        'p-applicant-funeral-costs-total': applicantFuneralCostsTotal.section,
        'p--context-relationship-to-deceased': contextRelationshipToDeceased.section,
        'p-applicant-relationship-to-deceased': applicantRelationshipToDeceased.section,
        'p-applicant-living-together': applicantLivingTogether.section,
        'p-applicant-living-together-duration': applicantLivingTogetherDuration.section,
        'p-applicant-living-apart': applicantLivingApart.section,
        'p-applicant-contact-with-deceased': applicantContactWithDeceased.section,
        'p-applicant-contact-more-details': applicantContactMoreDetails.section,
        'p-applicant-contact-out-of-touch': applicantContactOutOfTouch.section,
        'p-applicant-financial-help': applicantFinancialHelp.section,
        'p-other-claimants': otherClaimants.section,
        'p-other-claimants-details': otherClaimantsDetails.section,
        'p-context-funeral-costs-proof': contextFuneralCostsProof.section,
        'p-applicant-physical-help': applicantPhysicalHelp.section,
        'p-applicant-claim-type': applicantClaimType.section,
        'p-applicant-immediate-aftermath': applicantImmediateAftermath.section,
        'p-applicant-disabling-mental-injury': applicantDisablingMentalInjury.section
    },
    routes: {
        initial: 'p--new-or-existing-application',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        summary: [
            'p-applicant-declaration',
            'p-applicant-declaration-deceased',
            'p-mainapplicant-declaration-under-12',
            'p-mainapplicant-declaration-under-12-deceased',
            'p-mainapplicant-declaration-12-and-over',
            'p-mainapplicant-declaration-12-and-over-deceased',
            'p-rep-declaration-under-12',
            'p-rep-declaration-12-and-over',
            'p-rep-declaration-under-12-deceased',
            'p-rep-declaration-12-and-over-deceased'
        ],
        confirmation: 'p--confirmation',
        states: {
            'p-applicant-declaration': applicantDeclaration.route,
            'p-applicant-declaration-deceased': applicantDeclarationDeceased.route,
            'p-mainapplicant-declaration-12-and-over': mainapplicantDeclaration12AndOver.route,
            'p-mainapplicant-declaration-under-12': mainapplicantDeclarationUnder12.route,
            'p-mainapplicant-declaration-12-and-over-deceased':
                mainapplicantDeclarationOver12Deceased.route,
            'p-mainapplicant-declaration-under-12-deceased':
                mainapplicantDeclarationUnder12Deceased.route,
            'p-rep-declaration-under-12': repDeclarationUnder12.route,
            'p-rep-declaration-under-12-deceased': repDeclarationUnder12Deceased.route,
            'p-rep-declaration-12-and-over': repDeclaration12AndOver.route,
            'p-rep-declaration-12-and-over-deceased': repDeclaration12AndOverDeceased.route,
            'p-applicant-british-citizen-or-eu-national': applicantBritishCitizenOrEuNational.route,
            'p-applicant-are-you-18-or-over': applicantAreYou18OrOver.route,
            'p-applicant-who-are-you-applying-for': applicantWhoAreYouApplyingFor.route,
            'p--before-you-continue': beforeYouContinue.route,
            'p-applicant-incident-type': applicantIncidentType.route,
            'p--was-the-crime-reported-to-police': wasTheCrimeReportedToPolice.route,
            'p--when-was-the-crime-reported-to-police': whenWasTheCrimeReportedToPolice.route,
            'p--whats-the-crime-reference-number': whatsTheCrimeReferenceNumber.route,
            'p-applicant-did-the-crime-happen-once-or-over-time':
                applicantDidTheCrimeHappenOnceOrOverTime.route,
            'p-applicant-when-did-the-crime-happen': applicantWhenDidTheCrimeHappen.route,
            'p-applicant-when-did-the-crime-start': applicantWhenDidTheCrimeStart.route,
            'p-applicant-when-did-the-crime-stop': applicantWhenDidTheCrimeStop.route,
            'p-applicant-select-reasons-for-the-delay-in-making-your-application':
                applicantSelectReasonsForTheDelayInMakingYourApplication.route,
            'p-applicant-where-did-the-crime-happen': applicantWhereDidTheCrimeHappen.route,
            'p-applicant-where-in-england-did-it-happen': applicantWhereInEnglandDidItHappen.route,
            'p-applicant-where-in-scotland-did-it-happen':
                applicantWhereInScotlandDidItHappen.route,
            'p-applicant-where-in-wales-did-it-happen': applicantWhereInWalesDidItHappen.route,
            'p--you-need-to-contact-us': youNeedToContactUs.route,
            'p--which-police-force-is-investigating-the-crime':
                whichPoliceForceIsInvestigatingTheCrime.route,
            'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police':
                applicantSelectReasonsForTheDelayInReportingTheCrimeToPolice.route,
            'p-offender-do-you-know-the-name-of-the-offender':
                offenderDoYouKnowTheNameOfTheOffender.route,
            'p-offender-enter-offenders-name': offenderEnterOffendersName.route,
            'p-offender-do-you-have-contact-with-offender':
                offenderDoYouHaveContactWithOffender.route,
            'p-offender-describe-contact-with-offender': offenderDescribeContactWithOffender.route,
            'p-applicant-have-you-applied-to-us-before': applicantHaveYouAppliedToUsBefore.route,
            'p-applicant-have-you-applied-for-or-received-any-other-compensation':
                applicantHaveYouAppliedForOrReceivedAnyOtherCompensation.route,
            'p-applicant-applied-for-other-compensation-briefly-explain-why-not':
                applicantAppliedForOtherCompensationBrieflyExplainWhyNot.route,
            'p-applicant-who-did-you-apply-to': applicantWhoDidYouApplyTo.route,
            'p-applicant-has-a-decision-been-made': applicantHasADecisionBeenMade.route,
            'p-applicant-when-will-you-find-out': applicantWhenWillYouFindOut.route,
            'p-applicant-how-much-was-award': applicantHowMuchWasAward.route,
            'p--context-applicant-details': contextApplicantDetails.route,
            'p-applicant-enter-your-name': applicantEnterYourName.route,
            'p-applicant-have-you-been-known-by-any-other-names':
                applicantHaveYouBeenKnownByAnyOtherNames.route,
            'p-applicant-what-other-names-have-you-used': applicantWhatOtherNamesHaveYouUsed.route,
            'p-applicant-enter-your-date-of-birth': applicantEnterYourDateOfBirth.route,
            'p-applicant-enter-your-email-address': applicantEnterYourEmailAddress.route,
            'p-applicant-enter-your-address': applicantEnterYourAddress.route,
            'p-applicant-enter-your-telephone-number': applicantEnterYourTelephoneNumber.route,
            'p--check-your-answers': checkYourAnswers.route,
            'p--confirmation': confirmation.route,
            'p--context-offender': contextOffender.route,
            'p-applicant-you-cannot-get-compensation': applicantYouCannotGetCompensation.route,
            'p-applicant-confirmation-method': applicantConfirmationMethod.route,
            'p--context-compensation': contextCompensation.route,
            'p--transition': transition.route,
            'p--transition-no-phone-or-email': transitionNoPhoneOrEmail.route,
            'p-applicant-are-you-claiming-for-physical-injuries':
                applicantAreYouClaimingForPhysicalInjuries.route,
            'p--context-dmi-details': contextDmiDetails.route,
            'p-applicant-do-you-have-disabling-mental-injury':
                applicantDoYouHaveDisablingMentalInjury.route,
            'p-applicant-mental-injury-duration': applicantMentalInjuryDuration.route,
            'p-applicant-select-treatments': applicantSelectTreatments.route,
            'p-applicant-has-your-treatment-finished-dmi':
                applicantHasYourTreatmentFinishedDmi.route,
            'p-applicant-affect-on-daily-life-dmi': applicantAffectOnDailyLifeDmi.route,
            'p--context-treatment': contextTreatment.route,
            'p-applicant-are-you-registered-with-gp': applicantAreYouRegisteredWithGp.route,
            'p-applicant-have-you-seen-a-gp': applicantHaveYouSeenAGp.route,
            'p-applicant-dentist-visited': applicantDentistVisited.route,
            'p-applicant-dentist-address': applicantDentistAddress.route,
            'p-gp-enter-your-address': gpEnterYourAddress.route,
            'p-applicant-physical-injury': applicantPhysicalInjury.route,
            'p-applicant-physical-injury-upper': applicantPhysicalInjuryUpper.route,
            'p-applicant-physical-injury-upper-head': applicantPhysicalInjuryUpperHead.route,
            'p-applicant-physical-injury-upper-face': applicantPhysicalInjuryUpperFace.route,
            'p-applicant-physical-injury-upper-neck': applicantPhysicalInjuryUpperNeck.route,
            'p-applicant-physical-injury-upper-eye': applicantPhysicalInjuryUpperEye.route,
            'p-applicant-physical-injury-upper-ear': applicantPhysicalInjuryUpperEar.route,
            'p-applicant-physical-injury-upper-nose': applicantPhysicalInjuryUpperNose.route,
            'p-applicant-physical-injury-upper-mouth': applicantPhysicalInjuryUpperMouth.route,
            'p-applicant-physical-injury-upper-skin': applicantPhysicalInjuryUpperSkin.route,
            'p-applicant-physical-injury-upper-muscle': applicantPhysicalInjuryUpperMuscle.route,
            'p-applicant-physical-injury-torso': applicantPhysicalInjuryTorso.route,
            'p-applicant-physical-injury-torso-shoulder':
                applicantPhysicalInjuryTorsoShoulder.route,
            'p-applicant-physical-injury-torso-chest': applicantPhysicalInjuryTorsoChest.route,
            'p-applicant-physical-injury-torso-abdomen': applicantPhysicalInjuryTorsoAbdomen.route,
            'p-applicant-physical-injury-torso-back': applicantPhysicalInjuryTorsoBack.route,
            'p-applicant-physical-injury-torso-pelvis': applicantPhysicalInjuryTorsoPelvis.route,
            'p-applicant-physical-injury-torso-genitals':
                applicantPhysicalInjuryTorsoGenitals.route,
            'p-applicant-physical-injury-torso-skin': applicantPhysicalInjuryTorsoSkin.route,
            'p-applicant-physical-injury-torso-muscle': applicantPhysicalInjuryTorsoMuscle.route,
            'p-applicant-physical-injury-arms': applicantPhysicalInjuryArms.route,
            'p-applicant-physical-injury-arms-shoulder': applicantPhysicalInjuryArmsShoulder.route,
            'p-applicant-physical-injury-arms-arm': applicantPhysicalInjuryArmsArm.route,
            'p-applicant-physical-injury-arms-elbow': applicantPhysicalInjuryArmsElbow.route,
            'p-applicant-physical-injury-arms-wrist': applicantPhysicalInjuryArmsWrist.route,
            'p-applicant-physical-injury-arms-hand': applicantPhysicalInjuryArmsHand.route,
            'p-applicant-physical-injury-arms-digit': applicantPhysicalInjuryArmsDigit.route,
            'p-applicant-physical-injury-arms-skin': applicantPhysicalInjuryArmsSkin.route,
            'p-applicant-physical-injury-arms-muscle': applicantPhysicalInjuryArmsMuscle.route,
            'p-applicant-physical-injury-legs': applicantPhysicalInjuryLegs.route,
            'p-applicant-physical-injury-legs-hip': applicantPhysicalInjuryLegsHip.route,
            'p-applicant-physical-injury-legs-leg': applicantPhysicalInjuryLegsLeg.route,
            'p-applicant-physical-injury-legs-knee': applicantPhysicalInjuryLegsKnee.route,
            'p-applicant-physical-injury-legs-ankle': applicantPhysicalInjuryLegsAnkle.route,
            'p-applicant-physical-injury-legs-foot': applicantPhysicalInjuryLegsFoot.route,
            'p-applicant-physical-injury-legs-toes': applicantPhysicalInjuryLegsToes.route,
            'p-applicant-physical-injury-legs-skin': applicantPhysicalInjuryLegsSkin.route,
            'p-applicant-physical-injury-legs-muscle': applicantPhysicalInjuryLegsMuscle.route,
            'p--context-physical-injuries': contextPhysicalInjuries.route,
            'p-applicant-infections': applicantInfections.route,
            'p-applicant-select-infections': applicantSelectInfections.route,
            'p-applicant-pregnancy': applicantPregnancy.route,
            'p-applicant-treatment-for-physical-injuries':
                applicantTreatmentForPhysicalInjuries.route,
            'p-applicant-medical-help': applicantMedicalHelp.route,
            'p-applicant-treatment-address': applicantTreatmentAddress.route,
            'p--context-money': contextMoney.route,
            'p-applicant-unable-to-work-duration': applicantUnableToWorkDuration.route,
            'p-applicant-job-when-crime-happened': applicantJobWhenCrimeHappened.route,
            'p-applicant-work-details-option': applicantWorkDetailsOption.route,
            'p-applicant-expenses': applicantExpenses.route,
            'p-applicant-pregnancy-loss': applicantPregnancyLoss.route,
            'p-applicant-select-non-sa-infections': applicantSelectNonSaInfections.route,
            'p-applicant-fatal-claim': applicantFatalClaim.route,
            'p-applicant-provide-additional-information':
                applicantProvideAdditionalInformation.route,
            'p-applicant-additional-information': applicantAdditionalInformation.route,
            'p-applicant-describe-incident': applicantDescribeIncident.route,
            'p-applicant-incident-description': applicantIncidentDescription.route,
            'p-applicant-has-crime-reference-number': applicantHasCrimeReferenceNumber.route,
            'p--context-additional-info': contextAdditionalInfo.route,
            system: system.route,
            'p--context-crime-impact': contextCrimeImpact.route,
            'p-mainapplicant-parent': mainapplicantParent.route,
            'p--context-authority': contextAuthority.route,
            'p-mainapplicant-context-details': mainapplicantContextDetails.route,
            'p-mainapplicant-confirmation-method': mainapplicantConfirmationMethod.route,
            'p-mainapplicant-enter-your-name': mainapplicantEnterYourName.route,
            'p-mainapplicant-enter-your-address': mainapplicantEnterYourAddress.route,
            'p-mainapplicant-enter-your-email-address': mainapplicantEnterYourEmailAddress.route,
            'p-mainapplicant-enter-your-telephone-number':
                mainapplicantEnterYourTelephoneNumber.route,
            'p-mainapplicant-relationship': mainapplicantRelationship.route,
            'p-mainapplicant-shared-responsibility': mainapplicantSharedResponsibility.route,
            'p-mainapplicant-shared-responsibility-name':
                mainapplicantSharedResponsibilityName.route,
            'p-mainapplicant-care-order': mainapplicantCareOrder.route,
            'p-mainapplicant-care-order-authority': mainapplicantCareOrderAuthority.route,
            'p--context-pregnancy': contextPregnancy.route,
            'p-applicant-unable-to-work': applicantUnableToWork.route,
            'p-applicant-se-treatment': applicantSeTreatment.route,
            'p-applicant-se-home-care': applicantSeHomeCare.route,
            'p-applicant-se-home-changes': applicantSeHomeChanges.route,
            'p-applicant-se-aids': applicantSeAids.route,
            'p-applicant-se-equipment': applicantSeEquipment.route,
            'p-applicant-se-other': applicantSeOther.route,
            'p--context-special-expenses': contextSpecialExpenses.route,
            'p-applicant-over-16': applicantOver16.route,
            'p-applicant-affected-daily-capacity': applicantAffectedDailyCapacity.route,
            'p-applicant-affect-duration': applicantAffectDuration.route,
            'p-applicant-affect-future-duration': applicantAffectFutureDuration.route,
            'p-applicant-future-work': applicantFutureWork.route,
            'p--context-rep-details': contextRepDetails.route,
            'p-rep-type': repType.route,
            'p-rep-confirmation-method': repConfirmationMethod.route,
            'p-rep-name': repName.route,
            'p-rep-address': repAddress.route,
            'p-rep-organisation-address': repOrganisationAddress.route,
            'p-rep-email-address': repEmailAddress.route,
            'p-rep-telephone-number': repTelephoneNumber.route,
            'p-rep-reference-number': repReferenceNumber.route,
            'p-rep-claims-management-reg': repClaimsManagementRegNumber.route,
            'p--new-or-existing-application': newOrExistingApp.route,
            'p--contact-cica': contactCica.route,
            'p-applicant-can-handle-affairs': applicantCanHandleAffairs.route,
            'p--context-mainapplicant-details': contextMainAppDetails.route,
            'p-mainapplicant-authority': mainApplicantAuthorityToApply.route,
            'p--download-your-answers': downloadAnswers.route,
            'p--has-legal-authority': flowHasLegalAuthority.route,
            'p--represents-legal-authority': flowRepresentsLegalAuthority.route,
            owner: owner.route,
            'p--context-deceased-details': contextDeceasedDetails.route,
            'p-deceased-name': deceasedName.route,
            'p-deceased-date-of-birth': deceasedDateOfBirth.route,
            'p-deceased-date-of-death': deceasedDateOfDeath.route,
            'p-deceased-address': deceasedAddress.route,
            'p--context-funeral-costs': contextFuneralCost.route,
            'p-applicant-funeral-costs-paid': applicantFuneralCostsPaid.route,
            'p-applicant-funeral-costs-other-contributor':
                applicantFuneralCostsOtherContributor.route,
            'p-applicant-funeral-costs-who-contributed': applicantFuneralCostsWhoContributed.route,
            'p-applicant-funeral-costs-total': applicantFuneralCostsTotal.route,
            'p--context-relationship-to-deceased': contextRelationshipToDeceased.route,
            'p-applicant-relationship-to-deceased': applicantRelationshipToDeceased.route,
            'p-applicant-living-together': applicantLivingTogether.route,
            'p-applicant-living-together-duration': applicantLivingTogetherDuration.route,
            'p-applicant-living-apart': applicantLivingApart.route,
            'p-applicant-contact-with-deceased': applicantContactWithDeceased.route,
            'p-applicant-contact-more-details': applicantContactMoreDetails.route,
            'p-applicant-contact-out-of-touch': applicantContactOutOfTouch.route,
            'p-applicant-financial-help': applicantFinancialHelp.route,
            'p-other-claimants': otherClaimants.route,
            'p-other-claimants-details': otherClaimantsDetails.route,
            'p-context-funeral-costs-proof': contextFuneralCostsProof.route,
            'p-applicant-physical-help': applicantPhysicalHelp.route,
            'p-applicant-claim-type': applicantClaimType.route,
            'p-applicant-immediate-aftermath': applicantImmediateAftermath.route,
            'p-applicant-disabling-mental-injury': applicantDisablingMentalInjury.route
        }
    },
    answers: {},
    progress: ['p--new-or-existing-application'],
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
        questionnaireDocumentVersion: '4.2.0',
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
                    cond:['and',
                        ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'email'],
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', true]
                        ['|role.all', 'adult', 'deceased']
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
                        ['==', '$.answers.p-applicant-claim-type.q-applicant-claim-type', false]
                        ['|role.all', 'adult', 'deceased'],
                    ],
                    data: {
                        templateId: '869046d8-18ca-4f75-8f78-03fe0daa50f7',
                        emailAddress: '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||',
                            content: 'Do not reply to this email. Your bereavement application reference number is ||/answers/system/case-reference|| Your funeral application reference number is ||/answers/system/secondary-reference||'
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
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'email'],
                        ['|role.all', 'mainapplicant', 'adult', 'incapable', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'email'],
                        ['|role.all', 'mainapplicant', 'child', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['|role.all', 'rep', 'adult', 'capable', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['|role.all', 'rep', 'adult', 'incapable', 'authority', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['|role.all', 'rep', 'child', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'email'],
                        ['|role.all', 'rep', 'noauthority', 'deceased']
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
                    cond:['and',
                        ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'text'],
                        ['|role.all', 'adult', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'text'],
                        ['|role.all', 'mainapplicant', 'adult', 'incapable', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'text'],
                        ['|role.all', 'mainapplicant', 'child', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['|role.all', 'rep', 'adult', 'capable', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['|role.all', 'rep', 'adult', 'incapable', 'authority', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['|role.all', 'rep', 'child', 'deceased']
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
                    cond: ['and',
                        ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'text'],
                        ['|role.all', 'rep', 'noauthority', 'deceased']
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
            }
        }
    }
};
