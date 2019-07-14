<template>
  <div>
    <q-btn color="primary" label="Append To Text File" @click="saveFile" />
  </div>
</template>

<script>
export default {
  methods: {
    async saveFile () {
      await this.$ufs.appendFile(`${this.$ufs.appDir()}/text.txt`, 'foo')
      const fileData = await this.$ufs.readFile(`${this.$ufs.appDir()}/text.txt`, { encoding: 'utf8' })

      this.$q.notify({ message: `Appended Text File Contains: "${fileData}"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
