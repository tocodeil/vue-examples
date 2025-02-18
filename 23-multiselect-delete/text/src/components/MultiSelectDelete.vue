<script setup lang="ts">
import {ref} from 'vue';
const items = defineModel<Array<{id: string, text: string}>>();
const selectedItems = ref<Record<string, boolean>>({});

function toggle(id: string) {
  selectedItems.value[id] = !selectedItems.value[id];
}

function deleteSelected() {
  items.value = items.value?.filter(i => !selectedItems.value[i.id]) || [];
}
</script>

<template>
  <h1>Multi Select Delete</h1>
  <p>Selected items = {{ selectedItems }}</p>
  <button @click="deleteSelected">Delete Selected</button>
  <ul>
    <li v-for="item in items" :key="item.id">
      <label>
        <input type="checkbox" :checked="selectedItems[item.id]" @input="toggle(item.id)"/>
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
