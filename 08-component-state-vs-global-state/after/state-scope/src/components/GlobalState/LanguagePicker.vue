<script setup lang="ts">
import { language } from './language';
</script>

<template>
    <p>Current language = {{ language }}</p>
    <label>
        <input v-model="language" type="radio" value="en" />
        English
    </label>
    <label>
        <input v-model="language" type="radio" value="he" />
        Hebrew
    </label>
</template>