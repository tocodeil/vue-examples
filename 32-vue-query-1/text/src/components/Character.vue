<script setup lang="ts">
import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query'
import { getCharacter} from '../queries/swapi';

const {id} = defineProps<{id: number}>();

const { status, data, error } = useQuery({
  queryKey: computed(() => ['character', id]),
  queryFn: ({ queryKey }) => getCharacter(queryKey[1]),
  retry: 0
})
</script>

<template>
  <p>status = {{ status }}</p>
  <div v-if="status == 'success' && data">
    <p><b>Name:</b> {{data.name}}</p>
    <p><b>Homeworld:</b> {{data.homeworld}}</p>
    <p><b>Birth Year:</b> {{data.birth_year}}</p>
    <ul>
      <li v-for="film_url in data.films" :key="film_url">{{ film_url }}</li>
    </ul>
  </div>
  <div v-else-if="status == 'pending'">Loading, please wait</div>
  <div v-else-if="status === 'error'">Error: {{ error }}</div>
</template>