<script lang="ts">
import { ref, defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    msg: { type: String, required: true },
  },
  setup() {
    const count = ref(0);
    return { count }
  }
})

</script>

<template>
  <p>Count = {{ count }}</p>
</template>

<style scoped>
</style>
