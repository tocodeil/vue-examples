<script setup lang="ts">
import { useTemplateRef } from 'vue';

const inputRef = useTemplateRef('my-input')

function handleSubmit(e: Event) {
    e.preventDefault();
    const el = inputRef.value;
    el?.setCustomValidity('bad password');
    el?.reportValidity();
}
</script>

<template>
    <form @submit="handleSubmit">
        <input type="text" ref="my-input" />
        <input type="text" ref="my-input" />
        <input type="text" ref="my-input" />
        <input type="text" ref="my-input" />
        <button>Send</button>
    </form>
   
</template>

<style scoped>
</style>
