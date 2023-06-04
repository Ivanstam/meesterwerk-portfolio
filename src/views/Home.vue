<script setup>
  import {computed, onMounted} from "vue";
  import ArtworkCard from "../components/ArtworkCard.vue";
  import store from "../store/index.js";

  // Sample search using the keyword below, fetch 30 artworks and list 10 on the page
  const keyword = 'Rembrandt';
  const paginatedArtworks = computed(() => store.getters.paginate(0, 10))
  function searchArtworks() {
    store.dispatch('searchArtworks', [keyword, 50])
  }
  onMounted(() => {
    searchArtworks();
  });
</script>

<template>
  <p class="text-3xl font-bold italic">Meesterwerk portfolio</p>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
    <ArtworkCard v-for="artwork in paginatedArtworks" :artwork="artwork"/>
  </div>
</template>

<style scoped>

</style>