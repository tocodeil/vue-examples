<script setup lang="ts">
import {ref} from 'vue';

const {count} = defineProps<{count: number}>();

const emit = defineEmits(['click']);
</script>

<template>
    <div class="counter">
        <button @click="emit('click')">{{ count }}</button>
    </div>
</template>

<style>
.counter.max button{
    background: green;
}
</style>