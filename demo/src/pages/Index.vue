<template>
  <q-page class="flex flex-center">
    <binary-data />
  </q-page>
</template>

<style>
</style>

<script>
import binaryData from 'src/components/BinaryFile.vue'
export default {
  name: 'PageIndex',
  components: {
    binaryData
  }
}
</script>
