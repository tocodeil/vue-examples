<script setup lang="ts">
import {ref} from 'vue';
// Component State
const count = ref(0);

function inc() { count.value ++ }
</script>

<template>
    <p>
        Value = {{ count }}
        <button @click="inc">+1</button>
    </p>
</template>