const Dirwatcher = require('./dirwatcher.js');
const Importer = require('./importer.js');

const dirwatcher = new Dirwatcher();
const importer = new Importer();

const dirPath = '/Users/Yahor_Pamakha/js-workspace/data/';

dirwatcher.on('changed', (filename) => {
    console.log(`${filename} changed`);
    importer.import(dirPath + filename);
    //importer.importSync(dirPath + filename);
});

dirwatcher.watch(dirPath, 100);
