const fs = require('fs').promises
import downloadFile from './downloadFile'

const appendFile = fs.appendFile

const mkdir = fs.mkdir

const readDir = fs.readdir

const readFile = fs.readFile

const rmDir = fs.rmdir

const unlink = fs.unlink

const writeFile = fs.writeFile

export default new Promise((resolve, reject) => {
  resolve({ appendFile, mkdir, readDir, readFile, rmDir, unlink, writeFile, downloadFile })
})
