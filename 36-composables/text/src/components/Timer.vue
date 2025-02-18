<script setup lang="ts">
import useTimer from '../composables/useTimer';

const ticks = useTimer();
</script>

<template>
  <p>{{ ticks }} Seconds passed</p>  
</template>