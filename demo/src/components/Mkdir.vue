<template>
  <div>
    <q-btn color="primary" label="Make And Read Directory" @click="mkdir" />
  </div>
</template>

<script>
export default {
  methods: {
    async mkdir () {
      try {
        await this.$ufs.mkdir(this.$ufs.appDir() + '/bar')
      } catch (e) { console.log(e) }

      const folderData = await this.$ufs.readdir(this.$ufs.appDir())

      this.$q.notify({ message: `Directory: "${JSON.stringify(folderData, null, 2)}"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
