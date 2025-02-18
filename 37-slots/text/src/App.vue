<script setup lang="ts">
import List from './components/List.vue';
const days = [
  {id: 1, text: 'Sunday'},
  {id: 2, text: 'Monday'},
  {id: 3, text: 'Tuesday'},
  {id: 4, text: 'Wednesday'},
  {id: 5, text: 'Thursday'},
  {id: 6, text: 'Friday'},
  {id: 7, text: 'Saturday'},
]

const coloredItems = [
  {id: 1, text: 'blue', color: 'blue'},
  {id: 2, text: 'green', color: 'green'},
  {id: 3, text: 'yellow', color: 'yellow'},
]
</script>

<template>
  <List :items="days" />
  <List :items="days" v-slot="item">
    <li>[{{ item.id }}] - {{ item.text }}</li>
  </List>

  <List :items="coloredItems" v-slot="item">
    <li :style="{color: item.color}">{{ item.text }}</li>
  </List>
</template>
