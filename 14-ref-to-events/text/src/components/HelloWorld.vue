<script setup lang="ts">
import { ref, watch } from 'vue'

const count = ref(0)
const now = ref(new Date());

watch(count, () => {
  now.value = new Date();
})
</script>

<template>
  <p>Now is: {{ now }}</p>
  <p>Count value is: {{ count }}</p>
  <button @click="count++">+1</button>
  <button @click="count--">-1</button>
</template>