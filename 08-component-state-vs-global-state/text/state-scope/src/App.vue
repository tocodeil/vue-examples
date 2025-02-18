<script setup lang="ts">
import Counter from './components/Counter.vue';
import CounterGroup from './components/CounterGroup/CounterGroup.vue';
import Page from './components/GlobalState/Page.vue';
</script>

<template>
  <h1>Global State</h1>
  <Counter />
  <Counter />
  <Counter />
  <h1>Subtree State</h1>
  <CounterGroup :size="4" />
  <h1>Global State</h1>
  <Page />
</template>

<style scoped>
</style>
