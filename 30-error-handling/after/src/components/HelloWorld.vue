<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const x = ref(0);
const y = ref(0);

function go() {
  x.value ++;
}

watch(x, () => {
  (12).toFixed(-1);
})

</script>

<template>
  <p>Hello World</p>
  <p>{{ x }}</p>
  <p>{{ y }}</p>

  <button @click="go">Go</button>
  <button @click="y++">y</button>
</template>

