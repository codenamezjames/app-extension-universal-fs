<template>
  <div>
    <q-btn color="primary" label="Remove Directory" @click="rmdir" />
  </div>
</template>

<script>
export default {
  methods: {
    async rmdir () {
      try {
        await this.$ufs.rmdir(this.$ufs.appDir() + '/bar')
      } catch (e) {}

      const folderData = await this.$ufs.readdir(this.$ufs.appDir())

      this.$q.notify({ message: `Directory: "${JSON.stringify(folderData, null, 2)}"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
