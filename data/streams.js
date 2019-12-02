const fs = require('fs');
const csv = require('csvtojson'); 
const program = require('commander');

function reverse(str) {
    console.log(str.split("").reverse().join(""));
}

function transform(str) {
    console.log(str.toUpperCase());
}

function outputFile(filePath, errorMessage) {
    if(errorMessage !== null) {
        console.log(errorMessage);
        return;
    }
    const reader = fs.createReadStream(filePath);
    reader.pipe(process.stdout);
}

function convertFromFile(filePath, errorMessage) {
    if(errorMessage !== null) {
        console.log(errorMessage);
        return;
    }
    const reader = fs.createReadStream(filePath);
    reader.pipe(csv()).pipe(process.stdout);
}

function convertToFile(filePath, errorMessage) {
    if(errorMessage !== null) {
        console.log(errorMessage);
        return;
    }
    const reader = fs.createReadStream(filePath);
    const writer = fs.createWriteStream(filePath.replace('.csv', '.json'));
    reader.pipe(csv()).pipe(writer);
}

function cssBundler(path, errorMessage) {
    if(errorMessage !== null) {
        console.log(errorMessage);
        return;
    }
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
    .option('-a, --action <value>') 
    .option('-f, --file <value>') 
    .option('-p, --path <value>')
    .option('-h, --help') 
    .action(function (args) {
        var errorMessage = null;
        if(program.file === undefined) {
            errorMessage = 'Error! This action requires additional option. Run app with --help (-h) flag.';
        }
        switch(program.action) {
            case 'reverse':
                reverse(args);
                break;
            case 'transform':
                transform(args);
                break;
            case 'outputFile':                    
                outputFile(program.file, errorMessage);
                break;
            case 'cssBundler':                
                cssBundler(program.path, errorMessage);
            break;
            case 'convertFromFile':                  
                convertFromFile(program.file, errorMessage);
                break;
            case 'convertToFile':                   
                convertToFile(program.file, errorMessage);
                break;
            default:
                console.log('Error! There is no such action!');
        }
    });

program.parse(process.argv);