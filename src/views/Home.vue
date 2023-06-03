<script setup>
  import {computed, onMounted, ref} from "vue";
  import ArtworkCard from "../components/ArtworkCard.vue";
  import store from "../store/index.js";

  const artist = 'Rembrandt';
  const artworks = computed(() => store.state.searchedArtworks)

  function searchArtworks() {
    store.dispatch('searchArtworks', artist)
  }
  onMounted(() => {
    searchArtworks();
  });
</script>

<template>
  <p class="text-3xl font-bold italic">Meesterwerk portfolio</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
    <ArtworkCard v-for="artwork in artworks" :artwork="artwork"/>
  </div>
</template>

<style scoped>

</style>