<script setup lang="ts">
import TextboxWithTarget from './components/TextboxWithTarget.vue';

function win() {
  alert(`Bravo!`);
}
</script>

<template>
  <TextboxWithTarget target="secret" @win="win" />
</template>

<style scoped>
</style>
