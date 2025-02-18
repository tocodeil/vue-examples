<script setup lang="ts">
import {ref} from 'vue';
import Counter from './Counter.vue';

const maxValue = ref<null|number>(null);
const maxIndex = ref<null|number>(null);

function onNewValue(counterIndex, value) {    
  if (value > maxValue.value) {        
    maxIndex.value = counterIndex;
    maxValue.value = value;
  }
}
</script>

<template>
  <Counter @change="(newValue) => onNewValue(0, newValue)" :isMax="maxIndex == 0" />
  <Counter @change="(newValue) => onNewValue(1, newValue)" :isMax="maxIndex == 1" />
  <Counter @change="(newValue) => onNewValue(2, newValue)" :isMax="maxIndex == 2" />
  <Counter @change="(newValue) => onNewValue(3, newValue)" :isMax="maxIndex == 3" />
</template>
