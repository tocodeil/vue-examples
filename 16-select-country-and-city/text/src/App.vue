<script setup lang="ts">
import {ref, computed} from 'vue';
import FancySelect from './components/FancySelect.vue'

function getRandomElementFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const places = {
  USA: ["New York", "Los Angeles", "Chicago"],
  France: ["Paris", "Lyon", "Marseille"],
  Japan: ["Tokyo", "Osaka", "Kyoto"],
  Brazil: ["São Paulo", "Rio de Janeiro", "Salvador"]
};

const selectedCountry = ref<string>('');
const selectedCity = ref<string>('');
const countries = Object.keys(places);
const cities = computed(() => places[selectedCountry.value] || []);

function onChangeCity(newValue) {
  selectedCity.value = newValue;
}

function onChangeCountry(newValue) {
  selectedCountry.value = newValue;
  selectedCity.value = getRandomElementFromArray(places[selectedCountry.value]);
}
</script>

<template>
  <p>Selected country = {{ selectedCountry }}</p>
  <p>Selected city = {{ selectedCity }}</p>
  <FancySelect
    selectedValue="selectedCountry"
    :options="countries"
    @change="onChangeCountry"
  />
  <FancySelect
    selectedValue="selectedCity"
    :options="cities"
    @change="onChangeCity"
  />
</template>
