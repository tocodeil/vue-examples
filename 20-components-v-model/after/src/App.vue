<script setup lang="ts">
import {ref} from 'vue';
import PhoneNumber from './components/PhoneNumber.vue'
import FancySelect from './components/FancySelect.vue';

const number = ref('052-1121333');
const day = ref('Sunday');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
</script>

<template>
  <p>Selected day = {{ day }}</p>
  <FancySelect :options="days" v-model="day"/>

  <p>Number = {{ number }}</p>
  <PhoneNumber v-model="number" />
</template>

<style scoped>
</style>
