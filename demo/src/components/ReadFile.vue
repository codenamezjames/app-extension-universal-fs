<template>
  <div>
    <q-btn color="primary" label="Open Text File" @click="openFile" />
  </div>
</template>

<script>
export default {
  methods: {
    async openFile () {
      const fileData = await this.$ufs.readFile(`${this.$ufs.appDir()}/text.txt`, { encoding: 'utf8' })
      console.log(fileData)
      this.$q.notify({ message: `Text File Contains: "${fileData}"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
