import Dirwatcher from './modules/dirwatcher.js';
import Importer from './modules/importer.js';
import csv from 'csvtojson';

const dirwatcher = new Dirwatcher();
const importer = new Importer();

const dirPath = './config/';

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