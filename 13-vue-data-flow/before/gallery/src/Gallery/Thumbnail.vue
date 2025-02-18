<script setup lang="ts">

const {src, activeImage} = defineProps<{
    src: string,
    activeImage: any,
}>();

function select() {
    activeImage.value = src
}
</script>

<template>
    <img
        @click="select"
        width="50"
        height="50"
        :src="src"
    />
</template>