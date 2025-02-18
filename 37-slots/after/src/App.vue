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
</script>

<template>
  <List :items="days">
    <template v-slot="attrs">
      <li class="list-item">{{ attrs.item.text }}
        <span v-if="attrs.item.text.startsWith('S')">😊</span>
      </li>
    </template>
  </List>
  <List :items="days" />
</template>

<style scoped>
.list-item {
  text-align: left;
  color: blue;
}
</style>
