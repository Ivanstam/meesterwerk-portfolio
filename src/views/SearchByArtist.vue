<script setup>

import {computed, onMounted, ref} from "vue";
import store from "../store/index.js";
import {useRoute} from "vue-router";

const route = useRoute();
const artist = ref('');
const artworks = computed(() => store.state.searchedArtworks)
function searchByArtist() {
  store.dispatch('searchByArtist', artist.value)
}
// Fetch the id from the params in the address field, only search if it returns a value
onMounted(() => {
  artist.value = route.params.artist
  if (artist.value) {
    searchByArtist();
  }
});
</script>

<template>
  <div class="p-8">
   <input v-model="artist" type="text" class="rounded border-1 border-gray-200 w-full text-gray-900"
          placeholder="Search for artworks" @change="searchByArtist"/>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 ">
    <div v-for="artwork in artworks" :key="artwork.objectNumber" class="bg-gray-600 shadow-xl rounded-xl p-0.5">
      <router-link :to="{ name: 'artworkInfo', params: { id: artwork.objectNumber }}">
        <img v-if="artwork.hasImage" :src="artwork.webImage.url" alt="artwork.title"
             class="w-full h-64 object-cover rounded-t-xl">
      </router-link>
      <div class="p-3">
        <h1 class="font-bold">{{ artwork.title }}</h1>
        <p class="mb-4">Lorem Ipsum bla bla jeweetwel</p>
        <div class="flex items-center justify-between">
          <a :href="artwork.links.web" target="_blank"
             class="px-3 py-2 rounded-xl border border-blue-700 bg-blue-800 m-2 hover:bg-blue-700 border-blue-600">Rijksmuseum</a>
          <a :href="artwork.links.self" target="_blank"
             class="px-3 py-2 rounded-xl border border-blue-700 bg-blue-800 m-2">Info</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>