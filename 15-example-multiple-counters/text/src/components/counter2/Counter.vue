<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits(['click']);
const {isMax, count} = defineProps<{isMax?: boolean, count: number}>();
const background = computed(() => isMax ? "green" : "yellow");

function onClick() {  
  emit('click');
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
