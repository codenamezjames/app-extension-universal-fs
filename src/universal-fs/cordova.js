import * as shared from './shared'
const deviceReady = () => {
  return new Promise((resolve, reject) => {
    document.addEventListener('deviceready', resolve(), false)
  })
}

const appendFile = null

const mkdir = null

const readDir = null

const readFile = null

const rmDir = null

const unlink = null

const cwd = process.cwd()

const writeFile = (file, data, options) => {
  console.log(file)
}

export default new Promise((resolve, reject) => {
  return deviceReady().then(() => {
    return resolve({ appendFile, mkdir, readDir, readFile, rmDir, unlink, writeFile, ...shared })
  })
})

