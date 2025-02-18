<script setup lang="ts">
import Item from './components/Item.vue';
import Message from './components/Message.vue';
import ForMessage from './components/ForMessage.vue';
import MultiplicationTable from './components/MultiplicationTable.vue';
</script>

<template>
  <MultiplicationTable :size="10" />
  <Item name="table" />
  <Item name="chair" />
  <Message text="hello world" :count="5" />
  <hr />
  <ForMessage text="hello world" :count="5" />
</template>


<style scoped>
</style>
