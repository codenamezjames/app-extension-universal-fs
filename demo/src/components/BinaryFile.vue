<template>
  <div>
    <q-btn color="primary" label="Save Binary File" @click="saveFile" />
  </div>
</template>

<script>
export default {
  methods: {
    saveFile () {
      var file = new File(['foo'], '/foo4.txt', { type: 'text/plain' })
      var reader = new FileReader()

      reader.addEventListener('load', () => {
        this.$ufs.writeFile(`${this.$ufs.cwd()}/binary.txt`, reader.result)
        this.$q.notify({ message: `Binary File Contains: ${reader.result}` })
      }, false)

      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
