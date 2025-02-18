<script setup lang="ts">
import {TTodo} from '../queries/todos';
import TodoItem from './TodoItem.vue';

const {todos} = defineProps<{todos: Array<TTodo>}>();
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <TodoItem v-bind="todo" @update="$emit('update', $event)"/> 
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
  }
</style>