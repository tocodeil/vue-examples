<script setup lang="ts">
  import TodoList from './TodoList.vue';
  import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
  import { getTodos, createTodo, updateTodo } from '../queries/todos';
  import type {TTodo} from '../queries/todos';
  const {data: todos, error} = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  const queryClient = useQueryClient();

  const {mutate: addTodoMutation} = useMutation({
    mutationFn: createTodo,
    onSettled: (data, variables, context) => {
        queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  })

  const {mutate: updateTodoMutation} = useMutation({
    mutationFn: updateTodo,
    onSettled: (data, variables, context) => {
        queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onMutate: (todo) => {
      queryClient.setQueryData(['todos'], (todos: Array<TTodo>) => todos.map(t => 
        t.id === todo.id ? todo : t
      ))
    }
  })
</script>

<template>
  <template v-if="error">
    <p>Error</p>
  </template>
  <template v-else-if="todos">
    <button @click="addTodoMutation('New Item')">Add Task</button>
    <TodoList :todos="todos" @update="(todo) => updateTodoMutation(todo)"/>
  </template>
  <template>
    <p>Loading...</p>
  </template>
  
</template>