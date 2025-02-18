<script setup lang="ts">
import {ref} from 'vue';

const count = ref(0);
</script>

<template>
    <div class="counter max">
        <button @click="count++">{{ count }}</button>
    </div>
</template>

<style>
.counter.max button{
    background: green;
}
</style>