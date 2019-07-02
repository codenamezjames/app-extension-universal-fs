<template>
  <div>
    <q-btn color="primary" label="Write Text File" @click="writeFile" />
  </div>
</template>

<script>
export default {
  methods: {
    async writeFile () {
      await this.$ufs.writeFile(`${this.$ufs.cwd()}/text.txt`, 'foo', { encoding: 'utf8' })
      this.$q.notify({ message: `Text File Contains: "foo"` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
