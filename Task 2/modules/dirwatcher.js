import fs from 'fs';
import EventEmitter from 'events';

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

export default DirWatcher;