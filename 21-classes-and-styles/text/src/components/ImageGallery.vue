<script setup lang="ts">
import { ref } from 'vue'
const gifs = [
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjBscHBtbDZibTI5eGF0ZzJkbDE5dzVodTl0NWd3bTR6dXIwcGY4biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kYNVwkyB3jkauFJrZA/giphy.gif",
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2ptNnI2YnE2ZHZ4bXN6djN0a2Z4dGFqeTh4NGpkaDloNWM2YjV3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fCCCy9QuTtsFM9S88n/giphy-downsized-large.gif",
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhuamNwazdoczRzdXg5OWc1eW84aXhpc3YyZ3AzZDdmemZpYjE2ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ljuSksqL9j0yI/giphy.gif",
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzQ4eGRhbjI3ZHhhbTlvNHMweW1xMWpjdm0xZ295emd4MnFjaHd3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/33zX3zllJBGY8/giphy.gif",
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGw1eHIwdTU3M3gxZGV4aXZ4dmN3bDJqemN1a3IzcmFod3FoMGZ2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/605EIJNmMuedI87uRf/giphy.gif"
];
const activeImageIndex = ref(0)
</script>

<template>
  <h1 :style="[{color: 'red'}, {fontSize: '4rem'}]">Cool Gifs</h1>
  <div class="gallery">
    <img
      v-for="(src, index) in gifs"      
      :class="[{
        active: activeImageIndex == index,        
      }, 'bw']"
      :src="src"
      @click="activeImageIndex = index"
      width="200"
      height="150"
    />

    <div v-bind="$attrs">
      <img :src="gifs[activeImageIndex]" width="600" height="400" />
    </div>    
  </div>
</template>

<style scoped>
  img.active {
    border: 5px solid white;
  }
  .bw {
    filter: grayscale(1);
  }
</style>
