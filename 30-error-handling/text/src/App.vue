<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

const hasError = ref(false);
// onErrorCaptured((err, inst, info) => {
//   console.log(`error: `, err);
//   console.log(`inst: `, inst);
//   console.log(`info: `, info);
//   hasError.value = true;
//   return false;
// })
</script>

<template>
  <p v-if="hasError" class="error">One of the components in my tree had an error</p>
  <template v-else>
    <HelloWorld msg="Vite + Vue" />
  </template>  
</template>

<style scoped>
.error {
  color: red;
}
</style>
