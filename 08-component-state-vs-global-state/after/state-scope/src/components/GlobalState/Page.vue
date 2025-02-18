<script setup lang="ts">
import Header from './Header.vue';
import Main from './Main.vue';
import LanguagePicker from './LanguagePicker.vue';
import {direction} from './language';
</script>

<template>
    <LanguagePicker />
    <div class="page">
        <Header />
        <Main />
    </div>

</template>

<style lang="css" scoped>
.page {
    direction: v-bind(direction);
}
</style>