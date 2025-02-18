<script lang="ts" setup>
import Counter from './Counter.vue';
import {ref} from 'vue';

const {size = 4} = defineProps<{size?: number}>();
const step = ref(1);
</script>

<template>
    <input v-model="step" type="number" />
    <Counter v-for="_ in size" :step="step" />
</template>
