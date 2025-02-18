<script setup lang="ts">
import { ref } from 'vue'

const value = ref(2);
</script>

<template>
  <p>Value = {{ value }}</p>
  <label>
    <input type="radio" v-model="value" :value="1" />
    One
  </label>      

  <label>
    <input type="radio" v-model="value" :value="2" />
    Two
  </label>      

  <label>
    <input type="radio" v-model="value" :value="3" />
    Three
  </label>      
  
</template>

<style scoped>
</style>
