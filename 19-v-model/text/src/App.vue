<script setup lang="ts">
import InputCheckbox from './components/InputCheckbox.vue';
import InputText from './components/InputText.vue'
import InputNumber from './components/InputNumber.vue'
import InputRadio from './components/InputRadio.vue';
import TextArea from './components/TextArea.vue';
import Select from './components/Select.vue';
</script>

<template>
  <Select />
  <TextArea />
  <InputRadio />
  <InputCheckbox />
  <InputNumber />
  <InputText />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
