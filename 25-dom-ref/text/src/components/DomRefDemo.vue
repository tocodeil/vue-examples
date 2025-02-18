<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

const inputElementRef = useTemplateRef('input');

function setMessage(text) {
  inputElementRef.value.setCustomValidity(text);
  inputElementRef.value.reportValidity();
}
</script>

<template>
  <input type="text"  ref="input" @input="setMessage('')"/>
  <button @click="setMessage('try again')">Go</button>
</template>

<style scoped>
</style>
