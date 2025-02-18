<script setup lang="ts">
import vShowOnHover from '../directives/showOnHover';
</script>

<template>
  <h1>test custom components</h1>
  <p>Hover ⬇️ below</p>
  <p v-show-on-hover="{color: 'red', backgroundColor: 'blue'}">visible on hover</p>
  <p v-show-on-hover="'blue'">visible on hover</p>
  <p v-show-on-hover>visible on hover</p>
</template>

