<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

const hasErrors = ref(false);

onErrorCaptured((err, inst, info) => {
  console.log(`error: `, err);
  console.log(`inst: `, inst);
  console.log(`info: `, info);
  hasErrors.value = true;
  return false;
})
</script>

<template>
  <template v-if="hasErrors">
    <p>Error. 
      <button @click="hasErrors = false">Try again</button>
    </p>
  </template>
  <template v-else>
    <p>App.vue</p>
    <HelloWorld />
  </template>
</template>

<style scoped>
.error {
  color: red;
}
</style>
