<script setup lang="ts">
import Counter from './Counter.vue';
import {ref, computed} from 'vue';

const {size = 4} = defineProps<{size?: number}>();
const values = ref(new Array(size).fill(0));

function inc(counterIndex: number) {
    values.value[counterIndex]++;    
}

const maxValue = computed(() => Math.max(...values.value));

</script>

<template>
    <div class="counter">
        <Counter
            v-for="i in size"
            :class="{max: values[i - 1] === maxValue}"
            :count="values[i - 1]"
            @click="inc(i - 1)"
        />
    </div>
    
</template>

<style scoped>
.counter {
    margin: 10px;
    display: inline-block;
}
</style>