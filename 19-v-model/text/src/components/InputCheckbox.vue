<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false);
</script>

<template>
  <div>
    <input type="checkbox" v-model="value" />    
    <p>Value = {{ value }}</p>
    <p v-if="value">Hello!</p>
  </div>
</template>

<style scoped>
</style>
