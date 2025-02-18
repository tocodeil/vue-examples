<script setup lang="ts">
import {ref, computed} from 'vue';
import FancySelect from './components/FancySelect.vue'

const country = ref<keyof typeof places>('USA');
const places = {
  USA: ["New York", "Los Angeles", "Chicago"],
  France: ["Paris", "Lyon", "Marseille"],
  Japan: ["Tokyo", "Osaka", "Kyoto"],
  Brazil: ["São Paulo", "Rio de Janeiro", "Salvador"]
};
const countries = Object.keys(places);

const cities = computed(() => places[country.value]);
const city = ref('');

function changeCountry(newCountry: keyof typeof places) {
  country.value = newCountry;
  city.value = places[country.value][0]
}
</script>

<template>
  <p>Country = {{ country }}, City = {{ city }}</p>
  <FancySelect
    label="Country"
    :options="countries"
    :value="country"
    @change="changeCountry"
  />

  <FancySelect
    label="City"
    :options="cities"
    :value="city"
    @change="(newCity) => city = newCity"
  />
</template>

<style scoped>
</style>
