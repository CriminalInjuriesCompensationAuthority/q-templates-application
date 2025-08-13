'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                transition: {
                    title:
                        "You've told us you want to get someone aged 18 or over to apply for you",
                    description:
                        '<p class="govuk-body">They\'ll have to <a class="govuk-link" href="/apply/start-or-resume">start a new application</a>.</p>'
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ],
            options: {
                signInLink: {
                    visible: false
                }
            }
        }
    },
    route: {
        type: 'final'
    }
};
