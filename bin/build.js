const template = require('../index');
const fs = require('fs');

function deleteKeys(obj, unwantedKeyArray) {
    unwantedKeyArray.forEach(unwantedKey => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if(unwantedKey === key){
                    delete obj[key];
                }
                else if ("object" == typeof(obj[key])) {
                    deleteKeys(obj[key], unwantedKeyArray);
                }
            }
        }
    });
}

//ToDo: Parameterise this!
//deleteKeys(template, process.argv[2]);
deleteKeys(template, ['examples', 'invalidExamples']);

fs.writeFile('./bin/generated.json', JSON.stringify(template), (err) => {
    if (err) throw err;
});
