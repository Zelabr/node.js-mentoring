const fs = require('fs');
const {promisify} = require('util');
const csv = require('csvtojson'); 

const readFileAsync = promisify(fs.readFile);

class Importer {

    import(path) {
        return readFileAsync(path)
        .then(() => {
            csv().fromFile(path).then((jsonObj) => {
                console.log(jsonObj);
            })            
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