<script setup lang="ts">
import MaxCounter1 from './components/counter1/MaxCounter.vue';
import MaxCounter2 from './components/counter2/MaxCounter.vue';
</script>

<template>
  <MaxCounter1 />
  <hr />
  <MaxCounter2 />
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
