<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

const count = ref(0);

onMounted(() => {
    console.log('mounted');
})

onUpdated(() => {
    console.log('updated');
});

onUnmounted(() => {
    console.log('unmount');
})
</script>

<template>
    <button @click="count++">{{ count }}</button>
</template>

<style scoped>
</style>
