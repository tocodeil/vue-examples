<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const count = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    count.value++;
  }, 1000);
})

onUnmounted(() => {
  clearInterval(timer);
})
</script>

<template>
  <span>Ticks: {{ count }}</span>
</template>
