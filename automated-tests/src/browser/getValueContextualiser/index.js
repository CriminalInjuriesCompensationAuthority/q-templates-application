'use strict';

const createJsonTranslator = require('json-translator');

function getValueContextualiser(definition, data) {
    const {l10n} = definition;
    const jsonTranslator = createJsonTranslator();
    const translateKeyValueFn = jsonTranslator.getKeyValueTranslator({
        vars: l10n.vars,
        translations: l10n.translations,
        data
    });

    return translateKeyValueFn;
}

module.exports = getValueContextualiser;
