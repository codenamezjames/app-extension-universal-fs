<template>
  <div>
    <q-btn color="primary" label="Unlink Text and Binary File" @click="unlink" />
  </div>
</template>

<script>
export default {
  methods: {
    async unlink () {
      try {
        await this.$ufs.unlink(`${this.$ufs.cwd()}/text.txt`)
      } catch (e) {}
      try {
        await this.$ufs.unlink(`${this.$ufs.cwd()}/binary.txt`)
      } catch (e) {}
      const folderData = await this.$ufs.readdir('/')

      this.$q.notify({ message: `Directory: "${JSON.stringify(folderData, null, 2)}"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
