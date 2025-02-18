<script setup lang="ts">
import MultiSelectDelete from './components/MultiSelectDelete.vue'
import {ref} from 'vue';

const items = ref(['apple', 'banana', 'orange', 'lemon', 'lemon'].map(text => ({
  id: crypto.randomUUID(),
  text,
})));

// const items = [
//   { id: crypto.randomUUID(), text: 'apple' },
//   { id: crypto.randomUUID(), text: 'banana' },
//   { id: crypto.randomUUID(), text: 'orange' },
//   { id: crypto.randomUUID(), text: 'lemon' },
// ];

</script>

<template>  
  <MultiSelectDelete v-model="items" />
  <MultiSelectDelete v-model="items" />
</template>

