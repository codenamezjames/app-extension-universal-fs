<template>
  <q-page class="column justify-center q-px-md">
    <binary-file />
    <text-file />
    <read-file />
  </q-page>
</template>

<style>
</style>

<script>
import binaryFile from 'src/components/BinaryFile.vue'
import textFile from 'src/components/TextFile.vue'
import readFile from 'src/components/ReadFile.vue'
export default {
  name: 'PageIndex',
  components: {
    binaryFile,
    textFile,
    readFile
  }
}
</script>
