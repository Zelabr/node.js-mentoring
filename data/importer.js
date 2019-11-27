const fs = require('fs');

class Importer {

    import(path) {
        csv()
        .fromFile(path)
        .then((jsonObj) => {
            console.log(jsonObj);
        });  
    }

    importSync(path, callback) {
        callback(fs.readFileSync(path, 'utf-8'));    
    }
}
module.exports = Importer;