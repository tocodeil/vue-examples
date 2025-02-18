<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0);
</script>

<template>
  <div>
    <input type="text" v-model.number="value1" />
    <p>Value = {{ value1 }}</p>
    <p>typeof value = {{ typeof value1 }}</p>
  </div>

  <div>
    <input type="number" v-model="value2" />
    <p>Value = {{ value2 }}</p>
    <p>typeof value = {{ typeof value2 }}</p>
  </div>

</template>

<style scoped>
</style>
