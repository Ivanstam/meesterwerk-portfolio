<script setup>

import {computed, onMounted, ref} from "vue";
import store from "../store/index.js";
import {useRoute} from "vue-router";
import ArtworkCard from "../components/ArtworkCard.vue";

const route = useRoute();
const keyword = ref('');
const artworks = computed(() => store.state.searchedArtworks)
function searchArtworks() {
  store.dispatch('searchArtworks', keyword.value)
}
// Fetch the id from the params in the address field, only search if it returns a value
onMounted(() => {
  keyword.value = route.params.keyword
  if (keyword.value) {
    searchArtworks();
  }
});
</script>

<template>
  <p class="text-2xl font-bold italic mb-2">Search artworks</p>
  <input v-model="keyword" type="text" class="rounded border-1 border-gray-200 w-full text-gray-900"
        placeholder="Search for artworks" @change="searchArtworks"/>


  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
    <ArtworkCard v-for="artwork in artworks" :key="artwork.objectNumber" :artwork="artwork"/>
  </div>
</template>

<style scoped>

</style>