<script setup lang="ts">
import {ref, computed} from 'vue';

const {items} = defineProps<{items: Array<{id: number, text: string}>}>();
const filter = ref('');
const itemsToDisplay = computed(() => items.filter(i => i.text.toLowerCase().includes(filter.value)))
</script>

<template>
  <input type="search" v-model="filter" />
  <ul>    
    <slot v-for="item in itemsToDisplay" :key="item.id" v-bind="item">
      <li>{{ item.text }}</li>
    </slot>
  </ul>
</template>