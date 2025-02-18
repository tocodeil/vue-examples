<script setup lang="ts">
import useTimer from '../composables/useTimer';

const ticks = useTimer(500);
const messages = [
  "Hello darkness, my old friend",
  "I've come to talk with you again",
  "Because a vision softly creeping",
  "Left its seeds while I was sleeping",
  "And the vision that was planted in my brain",
  "Still remains",
  "Within the sound of silence"];
</script>

<template>
  <p>{{ messages[ticks % messages.length] }}</p>  
</template>