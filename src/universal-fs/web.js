import * as shared from './shared'

const customArgumentsToken = "__ES6-PROMISIFY--CUSTOM-ARGUMENTS__";
function promisify(original) {
  const argumentNames = original[customArgumentsToken];
  return function(...args) {
    return new Promise((resolve, reject) => {
      original(...args, (err, ...values) => {
        if (err) return reject(err);
        return resolve(...values)
      })
    })
  }
}



export default new Promise((resolve, reject) => {
  const BrowserFS = require('browserfs')
    // Configures BrowserFS to use the LocalStorage file system.
    BrowserFS.configure({
      fs: "IndexedDB",
      options: {}
    }, function(e) {
      if (e) {
        reject(e)
        throw e
      }
      var fs = BrowserFS.BFSRequire('fs');
      const { appendFile, mkdir, readdir, readFile, rmdir, unlink, writeFile } = fs

      const promiseFs = {
        appendFile: promisify(appendFile),
        mkdir: promisify(mkdir),
        readdir: promisify(readdir),
        readFile: promisify(readFile),
        rmdir: promisify(rmdir),
        unlink: promisify(unlink),
        writeFile: promisify(writeFile),
        appDir (){ return `${shared.cwd()}app/` },
        pubDir (){ return `${shared.cwd()}pub/` },
        ...shared
      }
      resolve(promiseFs)
  });
})
