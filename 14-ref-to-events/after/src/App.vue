<script setup lang="ts">
import TextboxWithTarget from './components/TextboxWithTarget.vue';
import {ref} from 'vue';

const target = ref('a');
function win() {
  alert(`Bravo!`);
}
</script>

<template>
  <input type="text" v-model="target" />
  <TextboxWithTarget :target="target" @win="win" />
</template>

<style scoped>
</style>
