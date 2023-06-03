<script setup>
import ArtworkCard from "../components/ArtworkCard.vue";
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import store from "../store/index.js";
import LinkButton from "../components/LinkButton.vue";

const route = useRoute();
const material = ref('');
const currentIndex = ref(0);
const paginatedArtworks = computed(() => store.getters.paginate(currentIndex.value, currentIndex.value + 10))
const maxArtworks = 30;
function searchByMaterial() {
  store.dispatch('searchByMaterial', ['' + material.value.toLowerCase(), maxArtworks])
}
// Fetch the id from the params in the address field, only search if it returns a value
onMounted(() => {
  material.value = route.params.material
  if (material.value) {
    searchByMaterial();
  }
});
</script>

<template>
  <p class="text-2xl font-bold italic mb-2">Search by material</p>
  <input v-model="material" type="text" class="rounded border-1 border-gray-200 w-full text-gray-900"
         placeholder="Search for artworks (eg: Brons, Verf etc.)" @change="searchByMaterial"/>
  <div class="grid grid-cols-2 max-w-fit text-center">
    <LinkButton text="Prev" v-if="currentIndex > 1" @click="currentIndex -= 10"/>
    <LinkButton text="Next" v-if="currentIndex < maxArtworks - 10" @click="currentIndex += 10"/>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
    <ArtworkCard v-for="artwork in paginatedArtworks" :key="artwork.objectNumber" :artwork="artwork"/>
  </div>

</template>

<style scoped>

</style>