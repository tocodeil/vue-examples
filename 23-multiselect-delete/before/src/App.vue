<script setup lang="ts">
import MultiSelectDelete from './components/MultiSelectDelete.vue'

const items = [
  { id: crypto.randomUUID(), text: 'apple' },
  { id: crypto.randomUUID(), text: 'banana' },
  { id: crypto.randomUUID(), text: 'orange' },
  { id: crypto.randomUUID(), text: 'lemon' },
];
</script>

<template>  
  <MultiSelectDelete :items="items" />
</template>

