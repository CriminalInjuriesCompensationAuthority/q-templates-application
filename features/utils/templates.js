'use strict';

const applicationTemplate = require('../../dist/template');

const applicationTemplateAsJson = JSON.stringify(applicationTemplate);

function getApplicationTemplateCopy() {
    return JSON.parse(applicationTemplateAsJson);
}

module.exports = {
    'sexual-assault': id => ({
        id,
        ...getApplicationTemplateCopy()
    })
};
