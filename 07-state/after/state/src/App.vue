<script setup lang="ts">
import {ref, computed} from 'vue';

const x = ref(10);
const y = computed(() => x.value * 2);
const name = ref('');

function inc() {
  x.value += 1;
}
</script>

<template>
  <p>x = {{ x }}</p>
  <p>y = {{ y }}</p>
  <button @click="inc">+1</button>
  <input v-model="x" type="number"/>
  <input v-model="name" />
  <p>Hello {{ name }}</p>
</template>

<style scoped>
</style>
