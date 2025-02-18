<script setup lang="ts">
import ImageGallery from './components/ImageGallery.vue'
import Counter from './components/Counter.vue';
</script>

<template>
  <Counter :style="{color: 'yellow'}" />
  <ImageGallery />
</template>

<style scoped>
.even {font-size: 20px}
</style>
