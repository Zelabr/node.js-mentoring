const fs = require('fs');
const csv = require('csvtojson'); 

class Importer {

    import(path) {
        csv()
        .fromFile(path)
        .then((jsonObj) => {
            console.log(jsonObj);
        });  
    }

    importSync(path) {
        return csv().fromFile(path)
        .then((jsonObj) => {
            console.log(jsonObj)
        });
    }
}
module.exports = Importer;