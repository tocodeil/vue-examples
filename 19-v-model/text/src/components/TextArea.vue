<script setup lang="ts">
import { ref } from 'vue'

const value = ref("hello world");
</script>

<template>
  <p>Text length = {{ value.length }}</p>
  <textarea v-model="value"></textarea>
</template>
