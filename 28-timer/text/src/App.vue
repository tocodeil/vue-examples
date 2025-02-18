<script setup lang="ts">
import {ref} from 'vue';
import Timer from './components/Timer.vue'
const timer1 = ref(true);
const timer2 = ref(true);
const timer3 = ref(true);
</script>

<template>
  <div>
    <input type="checkbox" v-model="timer1" />
    <Timer v-if="timer1" />
  </div>

  <div>
    <input type="checkbox" v-model="timer2" />
    <Timer v-if="timer2" />
  </div>

  <div>
    <input type="checkbox" v-model="timer3" />
    <Timer v-if="timer3" />
  </div>
</template>
