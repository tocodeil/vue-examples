<script setup lang="ts">
import { ref } from 'vue'

const value = ref("");
</script>

<template>
  <p>Value = {{ value }}</p>
  <select v-model="value">
    <option disabled value="">Select Something</option>
    <option value="one">One</option>
    <option value="two">Two</option>
    <option value="three">Three</option>
  </select>
</template>

<style scoped>
</style>
