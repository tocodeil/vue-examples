<script setup lang="ts">
import {TTodo} from '../queries/todos';
import TodoItem from './TodoItem.vue';

const {todos} = defineProps<{todos: Array<TTodo>}>();
const emit = defineEmits(['update']);

</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <TodoItem v-bind="todo" @update="(todo) => emit('update', todo)"/> 
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
  }
</style>