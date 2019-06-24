<template>
  <div>
    <pre><code>var file = new File(['foo'], 'foo.txt', { type: 'text/plain' })
const fileData = await that.$ufs.writeFile(file.name, file, { encoding: 'utf8' })</code></pre>
    <q-btn color="primary" label="Save Binary File" @click="saveFile" />
  </div>
</template>

<script>
export default {
  methods: {
    async saveFile () {
      const that = this
      var file = new File(['foo'], '/foo4.txt', { type: 'text/plain' })
      const fileData = await that.$ufs.writeFile('foo4.txt', file)

      var reader = new FileReader()
      reader.readAsText(fileData, 'UTF-8')
      reader.onload = function (evt) {
        that.$q.notify({ message: `Binary File Contains: "${evt.target.result}"` })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
