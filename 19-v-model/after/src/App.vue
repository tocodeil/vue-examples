<script setup lang="ts">
// 2 way data binding [ref] <-> Input Element
import {ref} from 'vue';
const text = ref(4);
const isTrue = ref(false);
const language = ref('');
const languages = ref([]);
</script>

<template>
    <textarea v-model="text"></textarea>

    <pre>text = "{{ text }}"</pre>
    <pre>text + 1 = {{ text + 1 }}</pre>
    <pre>is true = {{ isTrue }}</pre>
    <pre>language = {{ language }}</pre>
    <input type="number" v-model="text" />
    <input type="checkbox" v-model="isTrue" />
    <label>
        <input type="radio" value="en" v-model="language" />
        English
    </label>

    <label>
        <input type="radio" value="he" v-model="language"/>
        Hebrew
    </label>
        
    <label>        
        <input type="radio" value="ru" v-model="language"/>
        Russian
    </label>

    <label>
        <input type="radio" value="ar" v-model="language"/>
        Arabic
    </label>

    <p>languages = {{ languages }}</p>
    <select v-model="languages" multiple>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
    </select>

</template>

<style scoped>
</style>
