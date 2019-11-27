const fs = require('fs');
const EventEmitter = require('events');

class DirWatcher extends EventEmitter {

    watch(path, delay, callback) {
        let fsWait = false;
        fs.watch(path, (event, filename) => {
            if (filename) {
                if (fsWait) {
                    return;
                }     

                fsWait = setTimeout(() => {
                    fsWait = false;
                }, delay);   

                callback(filename);
            }
        });
    }
}   

module.exports = DirWatcher