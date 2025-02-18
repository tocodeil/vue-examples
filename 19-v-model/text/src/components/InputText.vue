<script setup lang="ts">
import { ref } from 'vue'

const name = ref("")
</script>

<template>
  <p>Name = {{ name }}</p>
  <p>Length of name is: {{ name.length }}</p>
  <label>
    Name (change on input)
    <input type="text" v-model="name" />
  </label>
  <label>
    Name (change on change)
    <input type="text" v-model.lazy="name" />
  </label>
  <label>
    Name (change on change and trim)
    <input type="text" v-model.lazy.trim="name" />
  </label>  
</template>

<style scoped>
</style>
