<script setup>

import {computed, ref} from "vue";
import store from "../store/index.js";

const artist = ref('');
const artworks = computed(() => store.state.searchedArtworks)
function searchByArtist() {
  store.dispatch('searchArtworks', artist.value)
}
</script>

<template>
  <div class="p-8">
   <input v-model="artist" type="text" class="rounded border-1 border-gray-200 w-full text-gray-900"
          placeholder="Search for artworks" @change="searchByArtist"/>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 ">
    <div v-for="artwork in artworks" :key="artwork.id" class="bg-gray-600 shadow-xl rounded-xl p-0.5">
      <img v-if="artwork.hasImage" :src="artwork.webImage.url" alt="artwork.title" class="w-full h-64 object-cover rounded-t-xl">
      <h1 class="px-3 py-1 font-semibold">{{ artwork.title }}</h1>
      <div class="px-3 py-1 m-2">
        <a :href="artwork.links.web" target="_blank"
           class="px-3 py-2 rounded-xl border border-blue-700 bg-blue-800 m-3">Rijksmuseum</a>
        <a :href="artwork.links.self" target="_blank">Info</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>