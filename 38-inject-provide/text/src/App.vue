<script setup lang="ts">
import Counter from './components/Counter.vue'
import {provide, ref} from 'vue';
import createCountService, { countServiceKey } from './countService';

const count = ref(0);
provide(countServiceKey, createCountService(count));
</script>

<template>
  <p>count = {{ count }}</p>
  <Counter />
  <Counter />
  <Counter />
</template>
