<script setup lang="ts">
import Item from './components/Item.vue';

const href = 'https://' + 'www' + 'duckduckgo.com'
const x = Math.floor(Math.random() * 10);

function ouch(e: Event) {
  console.log(e);
  alert(`Ouch!`);
}

function ouch2(text: string) {
  alert(text);
}
</script>

<template>
  <h1>Hello Vue World</h1>
  <p>1 + 1 = {{ 1 + 1 }}</p>
  <p>The number is: {{ x }}</p>
  <Item />
  <Item />

  <button @click="ouch">Click here</button>
  <button @click="ouch2('ouch2')">Click here</button>
  <Item v-if="x < 4" />

  <p v-if="x < 4">x is small</p>
  <p v-else-if="x < 6">x is ok</p>
  <p v-else>x is large</p>

  <a :href="href">Go to {{ href }}</a>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
