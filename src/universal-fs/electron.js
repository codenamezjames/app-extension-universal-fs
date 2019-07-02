const fs = require('fs').promises
import * as shared from './shared'

const appendFile = fs.appendFile

const mkdir = fs.mkdir

const readdir = fs.readdir

const readFile = fs.readFile

const rmdir = fs.rmdir

const unlink = fs.unlink

const writeFile = fs.writeFile

export default new Promise((resolve, reject) => {
  resolve({ appendFile, mkdir, readdir, readFile, rmdir, unlink, writeFile, ...shared })
})
