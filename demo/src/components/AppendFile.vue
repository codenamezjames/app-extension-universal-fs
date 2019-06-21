<template>
  <div>
    <pre><code>var file = 'foo'
const fileData = await that.$ufs.writeFile('foo.tet', file, { encoding: 'utf8' })</code></pre>
    <q-btn color="primary" icon="save" label="Append File" @click="saveFile" />
  </div>
</template>

<script>
export default {
  methods: {
    async saveFile () {
      const that = this
      var file = 'foo'
      const fileData = await that.$ufs.appendFile('foo.txt', file)

      that.$q.notify({ message: `Appended Text File Contains: "${fileData}"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
