<script lang="ts">
import { ref, defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    msg: { type: String, required: true },
  },
  setup() {
    const count = ref(0);
    const twice = computed(() => count.value * 2)
    const now = new Date();
    function inc() {
      count.value++;
    }
    return { count, twice, now, inc }
  }
})

</script>

<template>
  <p>Count = {{ count }}</p>
  <p>Now = {{ now }}</p>
</template>

<style scoped>
</style>
