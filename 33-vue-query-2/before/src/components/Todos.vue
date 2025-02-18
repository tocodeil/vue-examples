<script setup lang="ts">
  import TodoList from './TodoList.vue';

  const todos = [
    {id: 1, text: 'First Item', done: false},
    {id: 2, text: 'Second Item', done: false},
    {id: 3, text: 'Third Item', done: false},
  ]

</script>

<template>
  <TodoList :todos="todos" />
</template>