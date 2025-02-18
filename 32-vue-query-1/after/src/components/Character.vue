<script setup lang="ts">
import { onMounted, ref, watchEffect, computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import type {TStarwarsCharacter} from '../queries/swapi';
import { getCharacter } from '../queries/swapi';

const {id} = defineProps<{id: number|string}>();

const { status, data, error } = useQuery({
    queryKey: computed(() => ['character', id]),
    queryFn: (ctx) => getCharacter(ctx.queryKey[1])
})
</script>

<template>
    <div v-if="data">
        <p>Name: {{ data.name }}</p>
    </div>
    <div v-else-if="error">
        <p>Error = {{ error }}</p>
    </div>
    <div v-else>
        <p>Loading, please wait ...</p>
    </div>
    
</template>