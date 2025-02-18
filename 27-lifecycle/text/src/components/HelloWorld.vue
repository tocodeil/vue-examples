<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

const count = ref(0)

onMounted(() => {
  console.log('mounted');
});

onUpdated(() => {
  console.log('updated');
});

onUnmounted(() => {
  console.log('unmounted');
})
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>    
  </div>
</template>

<style scoped>
</style>
