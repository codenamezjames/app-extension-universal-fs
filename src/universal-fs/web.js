import { writeFile as writeFileWeb, readFile as readFileWeb, readString, removeFile, mkdir, rmdir, readdir } from 'fs-web'

const appendFile = async (filename, data) => {
  const options = {encoding: 'utf8'}
  const fileData = await readFile(filename, options)
  const newFileData = fileData + data
  return writeFile(filename, newFileData, options)
}

const readFile = (filename, options = {}) => {
  if (options.encoding === 'utf8') return readString(filename)
  return readFileWeb(filename)
}
const writeFile = async (...args) => {
  const [name, data, options] = args
  await writeFileWeb(...args)
  return readFile(name, options)
}
const unlink = (...args) => removeFile(...args)

export default {
  appendFile,
  mkdir,
  readdir,
  readFile,
  rmdir,
  unlink,
  writeFile
}
