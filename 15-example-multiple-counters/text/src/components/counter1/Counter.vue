<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const emit = defineEmits(['change']);
const {isMax} = defineProps<{isMax?: boolean}>();
const background = computed(() => isMax ? "green" : "yellow");

function onClick() {  
  count.value++;
  emit('change', count.value);
}
</script>

<template>
  <div>
    <p>Value = {{ count }}</p>
    <button @click="onClick">+1</button>
  </div>
</template>

<style scoped>
  div {
    background-color: v-bind(background);
    padding: 20px;
  }

  button {
    color: white;
  }

  p {
    color: black;
  }
</style>
