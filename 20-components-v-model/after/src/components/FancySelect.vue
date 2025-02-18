<script setup lang="ts">
import {ref} from 'vue';
const {options} = defineProps<{
    options: Array<string>
}>();
const value = defineModel<string>();
</script>

<template>
    <label>
        Fancy Select
    </label>
    <select v-model="value">
        <option
            v-for="opt in options"
            :value="opt"
        >{{ opt }}</option>
    </select>
</template>
