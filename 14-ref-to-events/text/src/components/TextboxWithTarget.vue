<script setup lang="ts">
import {ref, defineProps, watch, defineEmits} from 'vue';

const {target} = defineProps<{
  target: string,
}>();
const emit = defineEmits(['win']);

const text = ref('');

watch(text, () => {  
  if (text.value === target) {
    emit('win');
  }
})

</script>

<template>
  <div>
    <input type="text" v-model="text" />
  </div>
</template>