<script setup lang="ts">
import {ref} from 'vue';

const count = ref(0);
const emit = defineEmits(['change']);

function inc() {
    count.value++;
    emit('change', count.value);
}
</script>

<template>
    <div class="counter">
        <button @click="inc">{{ count }}</button>
    </div>
</template>

<style>
.counter.max button{
    background: green;
}
</style>