<script setup lang="ts">
import { ref } from 'vue'

const items = defineModel();

const originalItems = [...items.value];
const itemsToDisplayItems = (items) => items.map(i => ({...i, selected: false}));

const displayItems = ref(itemsToDisplayItems(originalItems));

function deleteSelected() {
  displayItems.value = displayItems.value.filter(i => !i.selected);
  items.value = displayItems.value.map(i => ({id: i.id, text: i.text}));
}

function reset() {
  displayItems.value = itemsToDisplayItems(originalItems);
  items.value = originalItems;
}
</script>

<template>
  <button @click="deleteSelected">Delete</button>
  <button @click="reset">Reset</button>
  <ul>
    <li v-for="item in displayItems" :key="item.id">
      <label>
        <input type="checkbox" v-model="item.selected" />
        {{ item.text }}
      </label>
    </li>
  </ul>
</template>

<style scoped>
ul {
  text-align: left;
  list-style: none;
}
</style>
