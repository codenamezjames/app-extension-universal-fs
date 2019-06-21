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

const writeFile = (file, data, options) => {
  console.log(file)
}

export default {
  appendFile,
  mkdir,
  readDir,
  readFile,
  rmDir,
  unlink,
  writeFile
}
