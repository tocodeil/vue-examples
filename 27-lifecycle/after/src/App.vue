<script setup lang="ts">
import {ref} from 'vue';
import Counter from './components/Counter.vue'

const show = ref(true);
</script>

<template>
  <input v-model="show" type="checkbox" />
  <Counter v-if="show" />
</template>

