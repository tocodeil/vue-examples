<script setup lang="ts">
const x = Math.floor(Math.random() * 100);
</script>

<template>
  <p>x = {{ x }}</p>
  <template v-show="x % 2 != 0">
    <p>X is an even number!</p>
    <img width="480" height="360" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTlnNjdqdnlkZnFpNzY5NW5naGh3a200N3NxN3k0NXA0ZjduMzNrcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5UH2PJ8VIEuMqN8V6R/giphy.gif" />
  </template>
  <p v-if="x > 50">100 < x < 50</p>
  <p v-else-if="x > 20">50 <= x < 20</p>
  <p v-else-if="x > 10">20 <= x < 10</p>
  <p v-else>0 <= x <= 10</p>
</template>

<style scoped>
</style>
