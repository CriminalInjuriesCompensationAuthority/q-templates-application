'use strict';

function deleteKeys(obj, unwantedKeyArray) {
    unwantedKeyArray.forEach(unwantedKey => {
        Object.keys(obj).forEach(key => {
            if (unwantedKey === key) {
                delete obj[key];
            } else if (typeof obj[key] === 'object') {
                deleteKeys(obj[key], unwantedKeyArray);
            }
        });
    });
    return obj;
}

module.exports = deleteKeys;
