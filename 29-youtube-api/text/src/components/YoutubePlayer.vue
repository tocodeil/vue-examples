<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef, watch } from 'vue'
import YouTubePlayer from 'youtube-player';

const {videoId} = defineProps<{ videoId: string }>()
const playerIFrameRef = useTemplateRef('tr-player');
const isPlaying = ref(false);
let player: any;
let unwatch: () => void;

onMounted(() => {
  player = YouTubePlayer(playerIFrameRef.value!);  
  player.on('stateChange', (event: any) => {
    console.log(event);
    if (event.data === 1) {
      isPlaying.value = true;
    } else {
      isPlaying.value = false;
    }
  });

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


function play() {
  player.playVideo();
}
function stop() {
  player.stopVideo();
}
</script>

<template>
  <button @click="play" :disabled="isPlaying">Start</button>
  <button @click="stop" :disabled="!isPlaying">Stop</button>
  <div ref="tr-player"></div>
</template>

