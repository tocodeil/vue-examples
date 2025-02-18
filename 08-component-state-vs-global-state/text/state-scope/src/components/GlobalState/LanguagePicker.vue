<script setup lang="ts">
import { language } from '../../language';
</script>

<template>
    <label>
        <input type="radio" v-model="language" value="en" />
        English
    </label>
    
    <label>
        <input type="radio" v-model="language" value="he" />
        Hebrew
    </label>
    
</template>