<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getTodos, TTodo, updateTodo, createTodo } from '../queries/todos';
import { useMutation } from '@tanstack/vue-query'
import { useQueryClient } from '@tanstack/vue-query'

import TodoList from './TodoList.vue';
const { status, data, error } = useQuery({
  queryKey: ['todos'],
  queryFn: getTodos,
});

const queryClient = useQueryClient()
const { mutate: mutateUpdateTodo } = useMutation({
  mutationFn: updateTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })    
  },
})

const { mutate: mutateCreateTodo } = useMutation({
  mutationFn: createTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos' ]});
  }
})

function handleUpdateTodo(todo: TTodo) {
  mutateUpdateTodo(todo);
}

</script>

<template>
  <div v-if="status == 'pending'">Loading</div>
  <div v-else-if="status == 'error'">Error: {{ error }}</div>
  <div v-else-if="data != null">
    <button @click="mutateCreateTodo('New Item')">New Item</button>
    <TodoList :todos="data" @update="handleUpdateTodo" />
  </div>
</template>