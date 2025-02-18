<script setup lang="ts">
import {ref, computed} from 'vue';
import Counter from './Counter.vue';

const counts = ref([0, 0, 0, 0]);
const maxValue = computed(() => Math.max(...counts.value));
const maxIndex = computed(() => counts.value.findIndex(el => el === maxValue.value));

function onClick(counterIndex) {      
  counts.value[counterIndex]++;
}
</script>

<template>
  <p>max value = {{ maxValue }}</p>
  <p>max index = {{ maxIndex }}</p>
  <Counter @click="onClick(0)" :isMax="maxIndex == 0" :count="counts[0]"/>
  <Counter @click="onClick(1)" :isMax="maxIndex == 1" :count="counts[1]"/>
  <Counter @click="onClick(2)" :isMax="maxIndex == 2" :count="counts[2]"/>  
  <Counter @click="onClick(3)" :isMax="maxIndex == 3" :count="counts[3]"/>
</template>
