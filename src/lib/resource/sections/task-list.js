'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'task-list': {
                    sectionsTotalCount: 7,
                    sectionsCompletedCount: 1,
                    taskListCompleted: false,
                    sections: [
                        {
                            title: 'Tell us about your application',
                            idPrefix: 'task-list--about-application',
                            tasks: [
                                {
                                    title: {
                                        text: 'About your application'
                                    },
                                    href: '/apply/applicant-who-are-you-applying-for',
                                    status: {
                                        text: 'Completed'
                                    }
                                }
                            ]
                        },
                        {
                            title: 'Provide your details',
                            idPrefix: 'task-list--applicant-details',
                            tasks: [
                                {
                                    title: {
                                        text: 'Your details'
                                    },
                                    href: '/apply/info-context-applicant-details',
                                    status: {
                                        tag: {
                                            text: 'Incomplete',
                                            classes: 'govuk-tag--blue'
                                        }
                                    }
                                },
                                {
                                    title: {
                                        text: 'Your residency and nationality'
                                    },
                                    // href: '/apply/info-context-residency-and-nationality',
                                    status: {
                                        text: 'Cannot start yet'
                                    },
                                    classes: 'govuk-task-list__item--cannot-start'
                                }
                            ]
                        },
                        {
                            title: 'Tell us about the person who died',
                            idPrefix: 'task-list--deceased-details',
                            tasks: [
                                {
                                    title: {
                                        text: 'Your relationship to the person who died'
                                    },
                                    // href: '/apply/info-context-relationship-to-deceased',
                                    status: {
                                        text: 'Cannot start yet'
                                    },
                                    classes: 'govuk-task-list__item--cannot-start'
                                },
                                {
                                    title: {
                                        text: 'About the person who died'
                                    },
                                    // href: '/apply/info-context-deceased-details',
                                    status: {
                                        text: 'Cannot start yet'
                                    },
                                    classes: 'govuk-task-list__item--cannot-start'
                                },
                                {
                                    title: {
                                        text: 'Funeral costs'
                                    },
                                    // href: '/apply/info-context-funeral-costs',
                                    status: {
                                        text: 'Cannot start yet'
                                    },
                                    classes: 'govuk-task-list__item--cannot-start'
                                }
                            ]
                        },
                        {
                            title: 'Provide details of the crime and offender',
                            idPrefix: 'task-list--crime-offender-details',
                            tasks: [
                                {
                                    title: {
                                        text: 'About the crime'
                                    },
                                    // href: '/apply/info-before-you-continue',
                                    status: {
                                        text: 'Cannot start yet'
                                    },
                                    classes: 'govuk-task-list__item--cannot-start'
                                },
                                {
                                    title: {
                                        text: 'About the offender'
                                    },
                                    // href: '/apply/info-context-offender',
                                    status: {
                                        text: 'Cannot start yet'
                                    },
                                    classes: 'govuk-task-list__item--cannot-start'
                                }
                            ]
                        },
                        {
                            title: 'Provide details of other compensation applications',
                            idPrefix: 'task-list--other-compensation-details',
                            tasks: [
                                {
                                    title: {
                                        text: 'Other compensation'
                                    },
                                    // href: '/apply/info-context-compensation',
                                    status: {
                                        text: 'Cannot start yet'
                                    },
                                    classes: 'govuk-task-list__item--cannot-start'
                                }
                            ]
                        },
                        {
                            title: 'Check your answers and submit',
                            idPrefix: 'task-list--check-your-answers',
                            tasks: [
                                {
                                    title: {
                                        text: 'Check your answers and submit application'
                                    },
                                    status: {
                                        text: 'Cannot start yet'
                                    },
                                    classes: 'govuk-task-list__item--cannot-start'
                                }
                            ]
                        }
                    ]
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
                    target: 'p--context-applicant-details'
                }
            ]
        }
    }
};
