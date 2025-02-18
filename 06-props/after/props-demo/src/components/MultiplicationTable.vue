<script setup lang="ts">
const {size = 4} = defineProps<{
    size?: number,
}>();
</script>

<template>
   <table>
    <tr v-for="i in size">
        <td v-for="j in size">
            {{ i * j }}
        </td>
    </tr>
   </table>
</template>

<style>
table {
    width: 100%;
}

td {
    min-width: 50px;
}
</style>