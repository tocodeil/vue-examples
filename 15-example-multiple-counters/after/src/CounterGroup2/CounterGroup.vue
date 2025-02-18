<script setup lang="ts">
import Counter from './Counter.vue';
import {ref} from 'vue';

const {size = 4} = defineProps<{size?: number}>();
const maxValue = ref(-Infinity);
const maxCounterIndex = ref(-Infinity);

function checkMax(newValueInCounter: number, counterIndex: number) {
    if (newValueInCounter > maxValue.value) {
        maxValue.value = newValueInCounter;
        maxCounterIndex.value = counterIndex;
    }
}
</script>

<template>
    <div class="counter">
        <Counter
            v-for="i in size"
            :class="{max: i === maxCounterIndex}"
            @change="(newValueInCounter) => checkMax(newValueInCounter, i)"
        />
    </div>
    
</template>

<style scoped>
.counter {
    margin: 10px;
    display: inline-block;
}
</style>