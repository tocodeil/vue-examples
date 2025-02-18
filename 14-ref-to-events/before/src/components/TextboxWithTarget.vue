<script setup lang="ts">
import {ref, defineProps, watch, defineEmits} from 'vue';

const {target} = defineProps<{
  target: string,
}>();
const emit = defineEmits(['win']);

const text = ref('');

</script>

<template>
  <div>
    <input type="text" v-model="text" />
  </div>
</template>