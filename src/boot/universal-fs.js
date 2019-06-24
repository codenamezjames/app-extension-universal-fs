import ufs from '../universal-fs'

export default async ({ Vue, app }) => {
  Vue.prototype.$ufs = await ufs
}
