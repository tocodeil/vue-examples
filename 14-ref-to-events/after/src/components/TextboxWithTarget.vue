<script setup lang="ts">
import {ref, defineProps, watch, defineEmits, watchEffect} from 'vue';

const {target} = defineProps<{
  target: string,
}>();
const emit = defineEmits(['win']);

const text = ref(target);

watch(() => target, () => {
  alert('target changed. new target = ' + target);
})

// watch(text, () => {
//   if (text.value === target) {
//     emit('win');
//   }
// });

// watchEffect(() => {
//   if (text.value === target) {
//     emit('win');
//   }
// });

</script>

<template>
  <div>
    <input type="text" v-model="text" />
  </div>
</template>