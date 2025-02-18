<script setup lang="ts">
import {TTodo} from '../queries/todos';

const {id, text, done} = defineProps<TTodo>();

</script>

<template>
  <li>
    <label>
      <input type="checkbox" :checked="done" @change="$emit('update', {id, text, done: !done})" />
      <span>[{{ id }}] </span>
      <input type="text" :value="text" @change="$emit('update', {id, text: $event.target.value, done})" />
    </label>
  </li>
</template>