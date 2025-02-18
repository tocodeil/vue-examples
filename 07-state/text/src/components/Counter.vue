<script setup lang="ts">
import {ref, computed} from 'vue';

const x = ref(4);
const y = computed(() => x.value * 2);
const delta = ref(1);

function inc(amount: number) {
  x.value += amount;
}

</script>

<template>
  <p>x = {{ x }}</p>
  <p>y = {{ y }}</p>
  <div>
    <button @click="inc(1)">+1</button>
    <button @click="inc(-1)">-1</button>
  </div>
  <div>
    <input type="number" v-model="delta" />
    <button @click="inc(delta)">+{{ delta }}</button>
  </div>
</template>