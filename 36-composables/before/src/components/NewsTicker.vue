<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';

let timer: any;
const messages = [
  "Hello darkness, my old friend",
  "I've come to talk with you again",
  "Because a vision softly creeping",
  "Left its seeds while I was sleeping",
  "And the vision that was planted in my brain",
  "Still remains",
  "Within the sound of silence"];

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
  <p>{{ messages[ticks % messages.length] }}</p>  
</template>