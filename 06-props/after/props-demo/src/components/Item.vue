<script setup lang="ts">
const {name} = defineProps<{
    name: string,
}>();
</script>

<template>
   <p>Item: {{ name }}</p>
</template>