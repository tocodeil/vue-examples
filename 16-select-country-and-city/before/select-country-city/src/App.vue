<script setup lang="ts">
import FancySelect from './components/FancySelect.vue'

const places = {
  USA: ["New York", "Los Angeles", "Chicago"],
  France: ["Paris", "Lyon", "Marseille"],
  Japan: ["Tokyo", "Osaka", "Kyoto"],
  Brazil: ["São Paulo", "Rio de Janeiro", "Salvador"]
};

</script>

<template>
  <FancySelect />
</template>

<style scoped>
</style>
