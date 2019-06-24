<template>
  <q-page class="column justify-center q-px-md">
    <q-card class="q-pa-md q-mb-lg"><binary-file /></q-card>
    <q-card class="q-pa-md q-mb-lg"><text-file /></q-card>
    <q-card class="q-pa-md q-mb-lg"><append-file /></q-card>
    <q-card class="q-pa-md q-mb-lg"><read-file /></q-card>
    <q-card class="q-pa-md q-mb-lg"><mkdir /></q-card>
  </q-page>
</template>

<style>
</style>

<script>
import binaryFile from 'src/components/BinaryFile.vue'
import textFile from 'src/components/TextFile.vue'
import appendFile from 'src/components/AppendFile.vue'
import readFile from 'src/components/ReadFile.vue'
import mkdir from 'src/components/Mkdir.vue'
export default {
  name: 'PageIndex',
  components: {
    binaryFile,
    textFile,
    appendFile,
    readFile,
    mkdir
  }
}
</script>
