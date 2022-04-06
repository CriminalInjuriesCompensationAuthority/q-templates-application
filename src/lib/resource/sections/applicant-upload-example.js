'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-upload-example'],
            properties: {
                'q-applicant-upload-example': {
                    type: 'object',
                    title: 'Upload a document for us',
                    description:
                        'Documents can be pdfs, text documents etc',
                    errorMessage: {
                        fileSize: 'Document should be less than 2Gb'
                    },
                    meta: {
                        classifications: {
                            theme: 'additional-info'
                        },
                        summary: {
                            title: 'Uploaded documents'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-upload-example':
                        'Describe what additional information you want to provide'
                }
            },
            examples: [
                {
                    'q-applicant-upload-example': {}
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-upload-example': {}
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--check-your-answers'
                }
            ]
        }
    }
};
