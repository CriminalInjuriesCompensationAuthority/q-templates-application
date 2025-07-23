function countWords(property) {
    if (!property) {
        return 0;
    } else if (typeof property !== 'string') {
        return 0;
    } else if (property.startsWith('l10n')) {
        return 0;
    } else {
        return property.trim().split(/\s+/).length;
    }
}
function findString(obj) {
    var words = 0;
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'string') {
            words += countWords(obj[key]);
        } else if (typeof obj[key] === 'object') {
            words += findString(obj[key]);
        }
    });
    return words;
}
function countWordsInObjects(arr) {
    var words = 0;
    if (!arr) {
        return words;
    }
    arr.forEach(obj => {
        words += countWords(obj.title);
        words += countWords(obj.description);
    });
    return words;
}

function countWordsInProperty(prop) {
    var words = 0;
    words += countWords(prop.title);
    words += countWords(prop.description);
    words += countWords(prop.errorMessage?.maxLength);
    words += countWordsInObjects(prop.oneOf);
    words += countWordsInObjects(prop.items?.anyof);
    return words;
}

const template = require('./dist/template.json');
const unwantedPagesArray = ['owner', 'origin', 'system'];

const sections = template.sections;
var words = 0;
var pages = 0;
Object.keys(sections).forEach(key => {
    const section = sections[key];
    pages += 1;
    if (unwantedPagesArray.includes(key)) {
        words += 0;
    } else {
        if (section.l10n) {
            const resources = section.l10n.translations[0].resources;
            Object.keys(resources).forEach(property => {
                words += findString(resources[property]);
            });
        }
        const schema = section.schema;
        if (schema.properties) {
            Object.keys(schema.properties).forEach(property => {
                prop = schema.properties[property];
                words += countWordsInProperty(prop);
            });
            if (section.schema.errorMessage?.required) {
                Object.keys(section.schema.errorMessage.required).forEach(message => {
                    words += countWords(section.schema.errorMessage.required[message]);
                });
            }
        } else if (schema.allOf) {
            if (schema.allOf[0].allOf) {
                words += countWords(schema.allOf[0].title);
                schema.allOf[0].allOf.forEach(prop => {
                    Object.keys(prop.properties).forEach(p => {
                        words += countWordsInProperty(prop.properties[p]);
                    });
                });
                Object.keys(schema.allOf[0].errorMessage.required).forEach(message => {
                    words += countWords(schema.allOf[0].errorMessage.required[message]);
                });
            } else {
                schema.allOf.forEach(prop => {
                    Object.keys(prop.properties).forEach(p => {
                        words += countWordsInProperty(prop.properties[p]);
                    });
                });
            }
        }
    }
});
console.log(`There are ${words} words on ${pages} pages across the apply service`);
