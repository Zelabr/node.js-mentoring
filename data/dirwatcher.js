const fs = require('fs');
const EventEmitter = require('events');

class DirWatcher extends EventEmitter {

    watch(path, delay) {
        let fsWait = false;
        fs.watch(path, (event, filename) => {
            if (filename) {
                if (fsWait) {
                    return;
                }     

                fsWait = setTimeout(() => {
                    fsWait = false;
                }, delay);   

                this.emit('changed', filename);
            }
        });
    }
}   

module.exports = DirWatcher