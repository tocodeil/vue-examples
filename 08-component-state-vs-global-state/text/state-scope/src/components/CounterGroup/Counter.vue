<script setup lang="ts">
import {ref} from 'vue';

const {step} = defineProps<{step: number}>();
const count = ref(0);

function inc() {
    count.value += step;
}
</script>

<template>
    <p>
        Value = {{count}}
        <button @click="inc">+{{ step }}</button>
    </p>
</template>
