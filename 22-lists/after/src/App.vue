<script setup lang="ts">
import Days from './components/Days.vue'
import {ref} from 'vue';
const x = ref(0);
</script>

<template>
  <button @click="x++">Click</button>
  <Days :key="x" />
</template>

<style >
</style>
