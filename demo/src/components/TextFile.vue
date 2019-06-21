<template>
  <div>
    <pre><code>var file = 'foo'
const fileData = await that.$ufs.writeFile('foo.tet', file, { encoding: 'utf8' })</code></pre>
    <q-btn color="primary" icon="save" label="Save File" @click="saveFile" />
  </div>
</template>

<script>
export default {
  methods: {
    async saveFile () {
      const that = this
      var file = 'foo'
      const fileData = await that.$ufs.writeFile('foo.tet', file, { encoding: 'utf8' })

      that.$q.notify({ message: `Text File Contains: "${fileData}"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
