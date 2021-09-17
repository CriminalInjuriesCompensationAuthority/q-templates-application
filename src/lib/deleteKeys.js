'use strict';

function deleteKeys(obj, unwantedKeyArray) {
    if (obj === null || obj === undefined) {
        return obj;
    }
    const result = obj;
    unwantedKeyArray.forEach(unwantedKey => {
        Object.keys(result).forEach(key => {
            if (unwantedKey === key) {
                delete result[key];
            } else if (typeof result[key] === 'object') {
                deleteKeys(result[key], unwantedKeyArray);
            }
        });
    });
    return result;
}

module.exports = deleteKeys;
