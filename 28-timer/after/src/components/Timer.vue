<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const count = ref(0);
const ms = ref(1000);

let timer: ReturnType<typeof setInterval>;
onMounted(() => {
  timer = setInterval(() => {
    count.value++;
  }, ms.value);
})

onUnmounted(() => {
  clearInterval(timer);
})
</script>

<template>
  <input type="number" v-model="ms" />
  <span>Ticks: {{ count }}</span>
</template>
