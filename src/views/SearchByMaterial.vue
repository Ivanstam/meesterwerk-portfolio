<script setup>
import ArtworkCard from "../components/ArtworkCard.vue";
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import store from "../store/index.js";

const route = useRoute();
const material = ref('');
const artworks = computed(() => store.state.artworksByMaterial)
function searchByMaterial() {
  store.dispatch('searchByMaterial', '' + material.value.toLowerCase())
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


  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
    <ArtworkCard v-for="artwork in artworks" :key="artwork.objectNumber" :artwork="artwork"/>
  </div>

</template>

<style scoped>

</style>