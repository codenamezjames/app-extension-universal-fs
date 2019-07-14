<template>
  <div>
    <q-btn color="primary" label="Init Directories" @click="initDirectories" />
  </div>
</template>

<script>
export default {
  methods: {
    async initDirectories () {
      try {
        await this.$ufs.mkdir(this.$ufs.appDir())
        await this.$ufs.mkdir(this.$ufs.pubDir())
      } catch (e) { console.log(e) }

      const folderData = await this.$ufs.readdir('/')

      this.$q.notify({ message: `Directory: "${JSON.stringify(folderData, null, 2)}"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
