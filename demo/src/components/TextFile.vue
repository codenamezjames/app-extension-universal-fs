<template>
  <div>
    <pre><code>var file = 'foo'
await this.$ufs.writeFile('foo.tet', file, { encoding: 'utf8' })</code></pre>
    <q-btn color="primary" label="Save Text File" @click="saveFile" />
  </div>
</template>

<script>
export default {
  methods: {
    async saveFile () {
      var file = 'foo'
      await this.$ufs.writeFile('/foo.txt', file, { encoding: 'utf8' })
      this.$q.notify({ message: `Text File Contains: "${file}"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
