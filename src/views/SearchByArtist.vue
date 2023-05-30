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
   <input v-model="artist" type="text" class="rounded border-1 border-gray-200 w-full"
          placeholder="Search for artworks" @change="searchByArtist"/>
  </div>
  <div>
<!--    <div v-for="artwork in artworks" :key="artwork."></div>-->
    <pre>
      {{ artworks }}
    </pre>
  </div>
</template>

<style scoped>

</style>