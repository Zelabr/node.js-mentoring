const fs = require('fs');
const concat = require('concat');
const csv = require('csvtojson'); 
const program = require('commander');

function reverse(str) {
    console.log(str.split("").reverse().join(""));
}

function transform(str) {
    console.log(str.toUpperCase());
}

function outputFile(filePath) {
    const reader = fs.createReadStream(filePath, {encoding: 'utf-8'});
    reader.on('readable', () => {
        console.log(reader.read());
    });
}

function convertFromFile(filePath) {
    csv().fromFile(filePath).then((jsonObj) => {
        console.log(jsonObj);
    }) 
}

function convertToFile(filePath) {
    const reader = fs.createReadStream(filePath);
    const writer = fs.createWriteStream(filePath.replace('.csv', '.json'));
    reader.pipe(csv()).pipe(writer);
}

function cssBundler(path) {
    const writer = fs.createWriteStream('bundle.css');

    fs.readdir(path, (err, files) => {
        if(err) {
           console.log(err);
        }
        files.forEach(file => {
            if(file.includes('.css')) {        
                const reader = fs.createReadStream(file);
                reader.pipe(writer);
            }
        });
      });
}

program
    .option('-a, --actiion <value>') 
    .option('-f, --file <value>') 
    .option('-p, --path <value>')
    .option('-h, --help') 
    .action(function (args) {
        if(program.actiion) {
            switch(program.actiion) {
                case 'reverse':
                    reverse(args.rawArgs[4]);
                    break;
                case 'transform':
                    transform(args.rawArgs[4]);
                    break;
                case 'outputFile':
                        if(program.file === undefined) {
                            console.log('Error! This action requires \"-file\" option')
                            break;
                        }
                    outputFile(program.file);
                    break;
                case 'cssBundler':
                    if(program.path === undefined) {
                        console.log('Error! This action requires \"-path\" option')
                        break;
                    }
                    cssBundler(program.path);
                break;
                case 'convertFromFile':
                        if(program.file === undefined) {
                            console.log('Error! This action requires \"-file\" option')
                            break;
                        }
                    convertFromFile(program.file);
                    break;
                case 'convertToFile':
                        if(program.file === undefined) {
                            console.log('Error! This action requires \"-file\" option')
                            break;
                        }
                    convertToFile(program.file);
                    break;
                default:
                    console.log('Error! There is no such action!');
            }
        }
    });

program.parse(process.argv);