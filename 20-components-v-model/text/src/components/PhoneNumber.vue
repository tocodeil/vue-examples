<script setup lang="ts">
import { ref, computed } from 'vue'

const number = defineModel();
const prefix = computed({
  get() {
    return number.value.substr(0, 3);
  },
  set(newValue) {
    number.value = newValue + '-' + number.value.substr(4, 7);
  }
});

const rest = computed({
  get() {
    return number.value.substr(4, 7);
  },
  set(newValue) {
    number.value = prefix.value + '-' + newValue;
  }
});
</script>

<template>
  <select v-model="prefix">
    <option value="050">050</option>
    <option value="052">052</option>
    <option value="054">054</option>
    <option value="055">055</option>
  </select>  
  <span>-</span>
  <input type="text" v-model="rest" />
</template>

