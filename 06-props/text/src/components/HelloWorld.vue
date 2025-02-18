<script setup lang="ts">
const {msg, times, addEmoji = false} = defineProps<{
  msg: string,
  times: number,
  addEmoji?: boolean,
}>()
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ times }}</h1>  
  <HelloWorld v-if="times > 0" :msg="msg" :times="times - 1" />
</template>

<style scoped>
</style>
