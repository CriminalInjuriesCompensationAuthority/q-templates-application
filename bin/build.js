const template = require('../index');

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
