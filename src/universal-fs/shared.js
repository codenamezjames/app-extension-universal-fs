import { saveAs } from 'file-saver'

export const downloadFile = (blob, fileName) => {
  return new Promise(function (resolve, reject) {
    if (typeof blob === 'string') {
      blob = new Blob([blob], { type: 'text/plain;charset=utf-8' })
    }
    saveAs(blob, fileName)
    resolve()
  })
}

export const cwd = process.cwd