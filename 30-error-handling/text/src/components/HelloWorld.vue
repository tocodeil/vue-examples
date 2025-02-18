<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const foo = ref(0);
watch(count, () => {
  console.log(count.value.toFixed(-1));
});

function handleClick() {
  count.value++;  
}
</script>

<template>
  <button @click="handleClick">{{ count }}</button>  
  <button @click="foo++">{{ foo }}</button>  
</template>

