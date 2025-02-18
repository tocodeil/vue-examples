<script setup lang="ts">
import Character from './components/Character.vue';
import {ref} from 'vue';
const id = ref(1);
</script>

<template>
  <input type="number" v-model="id" />
  <Character :id="id" />
</template>
