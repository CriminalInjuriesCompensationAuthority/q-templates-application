'use strict';

const applicantDeclaration = require('./lib/resource/sections/applicant-declaration.js');
const mainapplicantDeclaration12AndOver = require('./lib/resource/sections/mainapplicant-declaration-12-and-over.js');
const mainapplicantDeclarationUnder12 = require('./lib/resource/sections/mainapplicant-declaration-under-12.js');
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

module.exports = {
    type: 'apply-for-compensation',
    version: '6.0.0',
    sections: {
        'p-applicant-declaration': applicantDeclaration.section,
        'p-mainapplicant-declaration-12-and-over': mainapplicantDeclaration12AndOver.section,
        'p-mainapplicant-declaration-under-12': mainapplicantDeclarationUnder12.section,
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
        'p-applicant-future-work': applicantFutureWork.section
    },
    routes: {
        initial: 'p-applicant-fatal-claim',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        summary: [
            'p-applicant-declaration',
            'p-mainapplicant-declaration-under-12',
            'p-mainapplicant-declaration-12-and-over'
        ],
        confirmation: 'p--confirmation',
        states: {
            'p-applicant-declaration': applicantDeclaration.route,
            'p-mainapplicant-declaration-12-and-over': mainapplicantDeclaration12AndOver.route,
            'p-mainapplicant-declaration-under-12': mainapplicantDeclarationUnder12.route,
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
            'p-applicant-future-work': applicantFutureWork.route
        }
    },
    answers: {},
    progress: ['p-applicant-fatal-claim'],
    taxonomies: {
        theme: {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'theme'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'theme',
                        resources: {
                            applicant_details: {
                                title: 'Your details',
                                'title_someone-else': 'Victim details'
                            },
                            injuries: {
                                title: 'Your injuries',
                                'title_someone-else': "The child's injuries"
                            },
                            mental_health: {
                                title: 'Your mental health',
                                'title_someone-else': "The child's mental health"
                            },
                            treatment: {
                                title: 'Your treatment',
                                'title_someone-else': "The child's treatment"
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
                    title: 'l10nt:applicant_details.title{?lng,context,ns}'
                },
                crime: {
                    title: 'About the crime'
                },
                offender: {
                    title: 'About the offender'
                },
                injuries: {
                    title: 'l10nt:injuries.title{?lng,context,ns}'
                },
                pregnancy: {
                    title: 'Pregnancy'
                },
                'mental-health': {
                    title: 'l10nt:mental_health.title{?lng,context,ns}'
                },
                impact: {
                    title: 'The impact the injuries have had'
                },
                'special-expenses': {
                    title: 'Special expenses'
                },
                treatment: {
                    title: 'l10nt:treatment.title{?lng,context,ns}'
                },
                'other-compensation': {
                    title: 'Other compensation'
                },
                'additional-info': {
                    title: 'Additional information'
                },
                'main-applicant-details': {
                    title: 'Your details'
                },
                default: {
                    title: 'Other Information'
                }
            }
        }
    },
    meta: {
        questionnaireDocumentVersion: '4.0.0',
        onComplete: {
            tasks: {
                sendEmail: {
                    type: 'sendEmail',
                    l10n: {
                        vars: {
                            lng: 'en',
                            context: {
                                $data:
                                    '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                            },
                            ns: 'notification-confirmation'
                        },
                        translations: [
                            {
                                language: 'en',
                                namespace: 'notification-confirmation',
                                resources: {
                                    templateId: '0a8224c3-9600-4d14-9491-72609dc1dece',
                                    'templateId_someone-else':
                                        'b4b08849-c56f-4e82-9f8a-14ab2a50f607',
                                    emailAddress:
                                        '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||',
                                    'emailAddress_someone-else':
                                        '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||'
                                }
                            }
                        ]
                    },
                    data: {
                        templateId: 'l10nt:templateId{?lng,context,ns}',
                        emailAddress: 'l10nt:emailAddress{?lng,context,ns}',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null // required for notify api
                    }
                },
                sendSms: {
                    type: 'sendSms',
                    l10n: {
                        vars: {
                            lng: 'en',
                            context: {
                                $data:
                                    '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                            },
                            ns: 'notification-confirmation'
                        },
                        translations: [
                            {
                                language: 'en',
                                namespace: 'notification-confirmation',
                                resources: {
                                    templateId: '0905cf29-054a-4650-9044-a58768fd9381',
                                    'templateId_someone-else':
                                        'c2f8f580-3214-4144-bab1-1bbb30863deb',
                                    phoneNumber:
                                        '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||',
                                    'phoneNumber_someone-else':
                                        '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||'
                                }
                            }
                        ]
                    },
                    data: {
                        templateId: 'l10nt:templateId{?lng,context,ns}',
                        phoneNumber: 'l10nt:phoneNumber{?lng,context,ns}',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null // required for notify api
                    }
                }
            }
        },
        attributes: {'q-applicant-physical-injuries': {title: 'What was injured?'}}
    }
};
