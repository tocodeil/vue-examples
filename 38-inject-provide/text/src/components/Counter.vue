<script setup lang="ts">
import {inject} from 'vue';
import { countServiceKey } from '../countService';
const countService = inject(countServiceKey);
if (!countService) {
  throw new Error('Missing provide countService');
}
</script>

<template>
  <button @click="countService.inc">{{ countService.value }}</button>
</template>