<template>
  <div>
    <pre><code>await this.$ufs.mkdir('bar')
const folderData = await this.$ufs.readdir('/')</code></pre>
    <q-btn color="primary" label="Make And Read Directory" @click="saveFile" />
  </div>
</template>

<script>
export default {
  methods: {
    async saveFile () {
      await this.$ufs.mkdir('/bar')
      await this.$ufs.writeFile('/bar/foo2.txt', 'foo2', { encoding: 'utf8' })
      const folderData = await this.$ufs.readdir('/')

      this.$q.notify({ message: `Directory: "${JSON.stringify(folderData, null, 2)}"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
