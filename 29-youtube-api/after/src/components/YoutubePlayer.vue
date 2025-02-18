<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef, watch, watchEffect } from 'vue'
import YouTubePlayer from 'youtube-player';
// https://www.npmjs.com/package/youtube-player

const {videoId} = defineProps<{ videoId: string }>()
const playerElementRef = useTemplateRef('player-ref');
let player: ReturnType<typeof YouTubePlayer>;
let videoIdUnwatch: ReturnType<typeof watchEffect>;
let isPlaying = ref(false);

onMounted(() => {
  player = YouTubePlayer(playerElementRef.value!);
  player.on('stateChange', (event: any) => {
    if (event.data === 1) {
      isPlaying.value = true;
    } else {
      isPlaying.value = false;
    }
  });
  videoIdUnwatch = watchEffect(() => {
    player.cueVideoById(videoId);
  })
})

onUnmounted(() => {
  player.destroy();
  videoIdUnwatch();
})

function play() {
  player.playVideo();
}
function stop() {
  player.stopVideo();
}
</script>

<template>
  <div>
    <button @click="play" :disabled="isPlaying">Play</button>
    <button @click="stop" :disabled="!isPlaying">Stop</button>
  </div>

  <div ref="player-ref"></div>
</template>

