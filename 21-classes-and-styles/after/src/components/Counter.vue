<script setup lang="ts">
import {ref} from 'vue';
const val = ref(0);
</script>

<template>
  <button @click="val++">
    +1 (value = {{ val }})
  </button>
</template>

<style scoped>
.even { color: red; }
.odd { color: blue; }
</style>