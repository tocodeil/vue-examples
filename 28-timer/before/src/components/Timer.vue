<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const count = ref(0);
</script>

<template>
  <span>Ticks: {{ count }}</span>
</template>
