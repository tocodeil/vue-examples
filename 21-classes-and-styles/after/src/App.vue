<script setup lang="ts">
import ImageGallery from './components/ImageGallery.vue'
import Counter from './components/Counter.vue';
</script>

<template>
  <Counter :style="{fontSize: '30px'}" />
  <ImageGallery :style="{textDecoration: 'underline'}"/>
</template>

