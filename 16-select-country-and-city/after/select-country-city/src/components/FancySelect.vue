<script setup lang="ts">
import { ref, watch, watchEffect} from 'vue'

const {label, options, value} = defineProps<{
  label: string,
  options: Array<string>,
  value: string,
}>();

const emit = defineEmits(['change']);
const myValue = ref(value);

watch(myValue, () => {
  emit('change', myValue.value);
})

// watch(() => value, () => {
//   myValue.value = value;
// }, { immediate: true });

watchEffect(() => {
  myValue.value = value;
})
</script>

<template>
  <p>FancySelect myValue = {{ myValue }}; props.value = {{ value }} </p>
  <label>
    {{ label }}
    <select v-model="myValue">
    <option v-for="opt in options" :key="opt" :value="opt">
      {{ opt }}
    </option>
  </select>
  </label>

</template>

<style scoped>
</style>
