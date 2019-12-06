const Dirwatcher = require('./dirwatcher.js');
const Importer = require('./importer.js');
const csv = require('csvtojson'); 

const dirwatcher = new Dirwatcher();
const importer = new Importer();

const dirPath = '/Users/Yahor_Pamakha/js-workspace/Homework2/';

dirwatcher.on('changed', (filename) => {
    console.log(`${filename} changed`);
});

dirwatcher.addListener('changed', (filename) => {
    importer.importSync(dirPath + filename, (data) => {
        csv().fromString(data).then((jsonObj) => {
            console.log(jsonObj);
        });
    });
});

dirwatcher.watch(dirPath, 100, (filename) => {
    dirwatcher.emit('changed', filename);
});
