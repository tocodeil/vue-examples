<script setup lang="ts">
import {ref} from 'vue';
const val = ref(0);
</script>

<template>
  <button
    @click="val++"
    :class="{
      even: val % 2 == 0,
      odd: val % 2 != 0      
    }"
    >
    +1 (value = {{ val }})
  </button>
</template>