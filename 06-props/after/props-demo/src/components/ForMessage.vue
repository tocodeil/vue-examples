<script setup lang="ts">
const {text, count} = defineProps<{
    text: string,
    count: number,
}>();
</script>

<template>
   <p v-for="i in count">{{i}}. text</p>   
</template>