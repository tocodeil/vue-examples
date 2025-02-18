<script setup lang="ts">

const {src} = defineProps<{
    src: string,
}>();

const emit = defineEmits(['select']);

function select() {
    emit('select', src);
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