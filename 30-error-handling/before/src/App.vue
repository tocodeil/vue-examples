<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

// onErrorCaptured((err, inst, info) => {
//   console.log(`error: `, err);
//   console.log(`inst: `, inst);
//   console.log(`info: `, info);
//   return false;
// })
</script>

<template>
</template>

<style scoped>
.error {
  color: red;
}
</style>
