<script setup lang="ts">
import Counter from './components/Counter.vue'
import createCountService from './services/countService';

createCountService();
</script>

<template>
  <Counter />
  <Counter />
  <Counter />
</template>
