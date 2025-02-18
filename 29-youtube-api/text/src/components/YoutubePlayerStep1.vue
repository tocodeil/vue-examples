<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef, watch } from 'vue'
import YouTubePlayer from 'youtube-player';

const {videoId} = defineProps<{ videoId: string }>()
const playerIFrameRef = useTemplateRef('tr-player');
let player: ReturnType<typeof YouTubePlayer>;
let unwatch: () => void;

onMounted(() => {
  player = YouTubePlayer(playerIFrameRef.value!);  
  unwatch = watch(() => videoId, () => {
    if (player) {
      player.cueVideoById(videoId);
    }
  }, {immediate: true});
});

onUnmounted(() => {
  if (unwatch) {
    unwatch();
  }  
});
</script>

<template>
  <div ref="tr-player"></div>
</template>

