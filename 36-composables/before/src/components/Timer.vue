<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';

let timer: any;
const ticks = ref(0);

onMounted(() => {
  timer = setInterval(() => {
    ticks.value++;
  }, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
})
</script>

<template>
  <p>{{ ticks }} Seconds passed</p>  
</template>