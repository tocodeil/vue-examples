<script setup lang="ts">
import { ref, watch } from 'vue'
const emit = defineEmits(['change']);

const {options, selectedValue} = defineProps<{
  options: Array<string>,
  selectedValue: string,
}>();

const myValue = ref(selectedValue);
watch(myValue, () => {  
  emit('change', myValue.value);
})

watch(() => selectedValue, () => {  
  myValue.value = selectedValue;
})

</script>
<template>  
  <select v-model="myValue" multiple>
    <option value="" disabled></option>
    <option v-for="opt in options" :value="opt">{{ opt }}</option>
  </select>
</template>

