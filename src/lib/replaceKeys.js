'use strict';

function replaceKeys(obj, replacementObject) {
    if (obj === null || obj === undefined) {
        return obj;
    }
    const result = obj;
    Object.keys(replacementObject).forEach(keyPlaceholder => {
        Object.keys(result).forEach(key => {
            if (keyPlaceholder === key) {
                const newKey = replacementObject[keyPlaceholder];
                result[newKey] = result[key];
                delete result[key];
            } else if (typeof result[key] === 'object') {
                replaceKeys(result[key], replacementObject);
            }
        });
    });
    return result;
}

module.exports = replaceKeys;
