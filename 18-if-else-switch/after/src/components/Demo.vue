<script setup lang="ts">
const x = Math.floor(Math.random() * 100);
</script>

<template>
  <p>x = {{ x }}</p>
  <p v-if="x < 10">x is small</p>
  <p v-else-if="x < 20">x < 20</p>
  <p v-else-if="x < 30">x < 30</p>
  <template v-else>
    <p >x is large</p>
    <img
      width="480"
      height="360"
      src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTlnNjdqdnlkZnFpNzY5NW5naGh3a200N3NxN3k0NXA0ZjduMzNrcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5UH2PJ8VIEuMqN8V6R/giphy.gif">
  </template>
  
</template>

<style scoped>
</style>
