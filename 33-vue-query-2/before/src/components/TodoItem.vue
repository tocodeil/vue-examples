<script setup lang="ts">
import {TTodo} from '../queries/todos';

const {id, text, done} = defineProps<TTodo>();

</script>

<template>
  <li>
    <label>
      <input type="checkbox" :checked="done"  />
      <span>[{{ id }}] </span>
      <input type="text" :value="text" />
    </label>
  </li>
</template>