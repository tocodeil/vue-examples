<script setup lang="ts">
import {ref} from 'vue';
import HelloWorld from './components/HelloWorld.vue'
const toggle = ref(true);
</script>

<template>
  <input type="checkbox" v-model="toggle" />
  <HelloWorld v-if="toggle" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
