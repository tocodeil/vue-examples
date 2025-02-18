<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef, watch } from 'vue'
import YouTubePlayer from 'youtube-player';

const {videoId} = defineProps<{ videoId: string }>()
</script>

<template>
  <button @click="play" :disabled="isPlaying">Start</button>
  <button @click="stop" :disabled="!isPlaying">Stop</button>
  <div></div>
</template>

