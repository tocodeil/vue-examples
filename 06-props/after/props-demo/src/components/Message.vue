<script setup lang="ts">
const {text, count} = defineProps<{
    text: string,
    count: number,
}>();
</script>

<template>
   <p>text</p>
   <Message v-if="count > 1" :text="text" :count="count - 1" />
</template>