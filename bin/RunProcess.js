'use strict';

const child_process = require('child_process');
 
 module.exports = class RunProcess {
    constructor(exec_file, args = []) {
        this.exec_file = exec_file;
        this.islem = child_process.spawn(exec_file, args, { shell: true });

        this.islem.stdout.on('data', function (stdout) {
            console.log(exec_file + "::" + stdout);
        });

        this.islem.stderr.on('data', function (stderr) {
            console.log(exec_file + "::" + stderr);
        });

        this.islem.on('close', function (code) {
            console.log(exec_file + "::" + 'Closed. ' + code);
        });
    }
}

  // The other events that we can register handlers for with the ChildProcess instances are 
  // disconnect, error, close, and message.