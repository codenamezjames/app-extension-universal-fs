<template>
  <div>
    <q-btn color="primary" label="Download Text File" @click="downloadFile" />
  </div>
</template>

<script>
export default {
  methods: {
    async downloadFile () {
      const fileData = await this.$ufs.readFile(`${this.$ufs.appDir()}/text.txt`, { encoding: 'utf8' })
      this.$ufs.downloadFile(fileData, 'NewFile.txt')
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
