<script setup lang="ts">
import {TTodo} from '../queries/todos';

const {id, text, done} = defineProps<TTodo>();
const emit = defineEmits(['update']);

function toggle() {
  emit('update', {
    id,
    text,
    done: !done,
  })
}

function changeText(newText: string) {
  emit('update', {
    id,
    text: newText,
    done,
  })
}
</script>

<template>
  <li>
    <label>
      <input type="checkbox" :checked="done" @change="toggle" />
      <span>[{{ id }}] </span>
      <input type="text" :value="text" @input="(e) => changeText((e.target as HTMLInputElement).value)"/>
    </label>
  </li>
</template>