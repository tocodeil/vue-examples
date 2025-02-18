<script setup lang="ts">
import {ref} from 'vue';

import YoutubePlayer from './components/YoutubePlayer.vue'
const videoId = ref('QRE9mqVR9tg');
</script>

<template>
  <input type="text" v-model="videoId" />
  <YoutubePlayer :video-id="videoId" />
</template>

