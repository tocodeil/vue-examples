<script setup lang="ts">
import {ref} from 'vue';
import Thumbnail from './Thumbnail.vue';

const images = [
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=800'
]

const activeImage = ref(images[0]);

function setImage(newActiveImage: string) {
    activeImage.value = newActiveImage;
}
</script>

<template>
    <div>
        <img :src="activeImage" width="400" height="400"/>
    </div>
    <div>
        <Thumbnail
            @select="(newImage) => activeImage = newImage"
            :src="src"
            v-for="src in images"
        />
    </div>
</template>