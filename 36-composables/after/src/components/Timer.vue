<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import useTimer from '../composables/useTimer';

const ticks = useTimer(300);

</script>

<template>
  <p>{{ ticks }} Seconds passed</p>  
</template>