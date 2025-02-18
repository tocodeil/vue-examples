<script setup lang="ts">
import {ref, inject} from 'vue';
import { CountServiceKey } from '../services/countService';
const {inc, count} = inject(CountServiceKey)!;
</script>

<template>
  <button @click="inc">{{ count }}</button>
  <input type="text" v-model="count" />
</template>