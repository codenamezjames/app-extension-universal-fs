<template>
  <q-page class="column justify-center q-px-md">
    <q-card class="q-pa-md q-mb-lg"><binary-file /></q-card>
    <q-card class="q-pa-md q-mb-lg"><write-file /></q-card>
    <q-card class="q-pa-md q-mb-lg"><append-file /></q-card>
    <q-card class="q-pa-md q-mb-lg"><read-file /></q-card>
    <q-card class="q-pa-md q-mb-lg"><mkdir /></q-card>
    <q-card class="q-pa-md q-mb-lg"><download-file /></q-card>
    <q-card class="q-pa-md q-mb-lg"><rmdir /></q-card>
    <q-card class="q-pa-md q-mb-lg"><unlink /></q-card>
  </q-page>
</template>

<style>
</style>

<script>
import binaryFile from 'src/components/BinaryFile.vue'
import writeFile from 'src/components/WriteFile.vue'
import appendFile from 'src/components/AppendFile.vue'
import readFile from 'src/components/ReadFile.vue'
import mkdir from 'src/components/Mkdir.vue'
import downloadFile from 'src/components/DownloadFile.vue'
import rmdir from 'src/components/Rmdir.vue'
import unlink from 'src/components/Unlink.vue'
export default {
  name: 'PageIndex',
  components: {
    binaryFile,
    writeFile,
    appendFile,
    readFile,
    mkdir,
    downloadFile,
    rmdir,
    unlink
  }
}
</script>
