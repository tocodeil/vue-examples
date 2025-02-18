<script setup lang="ts">
import {ref} from 'vue';
import PhoneNumber from './components/PhoneNumber.vue'

const number = ref('052-1121333');
</script>

<template>
  <p>Number = {{ number }}</p>
  <PhoneNumber v-model="number" />
</template>

<style scoped>
</style>
