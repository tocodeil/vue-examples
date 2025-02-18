<script lang="ts" setup>
import {ref} from 'vue';

import Counter from './Counter.vue';
const {size = 4} = defineProps<{size: number}>();
const step = ref(1);
</script>

<template>
    <input type="number" v-model="step" />
    <Counter v-for="_ in size" :step="step" />
</template>
