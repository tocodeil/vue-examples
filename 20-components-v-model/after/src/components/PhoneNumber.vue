<script setup lang="ts">
import { computed } from 'vue';
const number = defineModel<string>({required: true});

const prefix = computed({
  get() {
    return number.value.substring(0, 3);
  },
  set(newValue) {
    number.value = newValue + '-' + number.value.substring(4, 11);
  }
});


const rest = computed({
  get() {
    return number.value.substring(4, 11);
  },
  set(newValue) {
    number.value = number.value.substring(0, 3) + '-' + newValue;
  }
});
</script>

<template>
    <select v-model="prefix">
        <option value="050">050</option>
        <option value="052">052</option>
        <option value="054">054</option>
        <option value="058">058</option>
    </select>

    <input type="number" v-model="rest"/>
</template>

