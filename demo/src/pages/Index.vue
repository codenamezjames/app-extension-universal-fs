<template>
  <q-page class="column flex-center">
    <binary-file />
    <text-file />
  </q-page>
</template>

<style>
</style>

<script>
import binaryFile from 'src/components/BinaryFile.vue'
import textFile from 'src/components/TextFile.vue'
export default {
  name: 'PageIndex',
  components: {
    binaryFile,
    textFile
  }
}
</script>
