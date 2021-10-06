'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-incident-type'],
            additionalProperties: false,
            properties: {
                'q-applicant-incident-type': {
                    title: 'What led to your injuries?',
                    type: 'string',
                    oneOf: [
                        {title: 'Physical assault', const: 'ASST'},
                        {title: 'Assault with a weapon', const: 'WEAP'},
                        {title: 'Sexual assault or abuse', const: 'SEX'},
                        {title: 'Domestic or family violence', const: 'FMLY'},
                        {title: 'Arson', const: 'ARSN'},
                        {title: 'Poisoning', const: 'PSNG'},
                        {title: 'Animal attack', const: 'ANIMAL'},
                        {title: 'Vehicle attack', const: 'VEHICLE'},
                        {title: 'Witnessing an incident', const: 'SECV'},
                        {title: 'Other', const: 'OTHER'}
                    ]
                }
            },
            errorMessage: {
                required: {'q-applicant-incident-type': 'Select what led to your injuries'}
            },
            examples: [{'q-applicant-incident-type': 'ANIMAL'}],
            invalidExamples: [
                {},
                {'q-applicant-incident-type': 'ABCD'},
                {'q-applicant-incident-type': ''},
                {'q-applicant-incident-type': 123},
                {'q-applicant-incident-type': []},
                {'q-applicant-incident-type': true}
            ]
        }
    },
    route: {on: {ANSWER: [{target: 'p-applicant-did-the-crime-happen-once-or-over-time'}]}}
};
