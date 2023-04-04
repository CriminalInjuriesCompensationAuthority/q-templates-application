'use strict';

const applicationTemplate = require('../../dist/template.json');

const applicationTemplateAsJson = JSON.stringify(applicationTemplate);

function getApplicationTemplateCopy() {
    return JSON.parse(applicationTemplateAsJson);
}

// Line 14/16: Unexpected token ...
// Need to fix this ??......
module.exports = {
    'sexual-assault': id => ({
        id,
        ...getApplicationTemplateCopy()
    })
};
