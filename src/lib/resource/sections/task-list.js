'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'task-list': {
                    type: 'object',
                    title: 'Claim criminal injuries compensation',
                    description:
                        'You can <a href="/account/sign-in" class="govuk-link">create a GOV.UK One Login</a> to save your appliciation and return to it later.',
                    properties: {
                        taskListInfo: {
                            type: 'object',
                            labelCompleted: 'Completed',
                            labelIncomplete: 'Incomplete',
                            labelCannotStart: 'Cannot start yet',
                            sections: []
                        }
                    },
                    meta: {
                        classifications: {
                            theme: 'task-list'
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
                    target: 'p--context-applicant-details'
                }
            ]
        }
    }
};
