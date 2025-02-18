<script setup lang="ts">
import _ from 'lodash';
import { ref, computed } from 'vue'

const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

function shuffle() {
  days.value = _.shuffle(days.value);
}

const filter = ref('');
const daysToDisplay = computed(() => days.value.filter(d => d.toLowerCase().includes(filter.value)));
</script>

<template>
  <input type="text" v-model="filter" />
  <button @click="shuffle">Shuffle</button>
  <ul>
    <li v-for="day in daysToDisplay" :key="day">
      <input type="checkbox" />
      {{ day }}
    </li>
  </ul>
</template>

