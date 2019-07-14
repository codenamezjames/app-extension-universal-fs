import { Platform } from 'quasar'
import * as shared from './shared'
const deviceReady = () => {
  return new Promise((resolve, reject) => {
    document.addEventListener('deviceready', resolve(), false)
  })
}
const exportKey = 'Q_PUBLIC_EXPORT'

const appendFile = null

const mkdir = null

const readDir = null

const readFile = null

const rmDir = null

const unlink = null

const writeFile = (file, data, options) => {
  if (file === exportKey) shared.downloadFile(data, 'download')

}

const appDir = () => {
  return cordova.file.applicationDirectory
}

const pubDir = () => {
  if (Platform.is.ios) return exportKey
  return cordova.file.externalDataDirectory
}

export default new Promise((resolve, reject) => {
  return deviceReady().then(() => {
    return resolve({ appendFile, mkdir, readDir, readFile, rmDir, unlink, writeFile, ...shared })
  })
})

