<script setup>
import ArtworkCard from "../components/ArtworkCard.vue";
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import store from "../store/index.js";
import LinkButton from "../components/LinkButton.vue";

const route = useRoute();
const centuryRef = ref();
const currentIndex = ref(0);
const paginatedArtworks = computed(() => store.getters.paginate(currentIndex.value, currentIndex.value + 10))
const maxArtworks = 50;
const centuries = [...Array(21).keys()]

function searchByCentury(century) {
  store.dispatch('searchByCentury', [century, maxArtworks])
}
// Fetch the id from the params in the address field, only search if it returns a value
onMounted(() => {
  centuryRef.value = route.params.century
  console.log(centuryRef.value)
  if (centuryRef.value) {
    searchByCentury(centuryRef.value);
  }
});
</script>

<template>
  <p class="text-2xl font-bold italic mb-2">Search by century</p>
  <div class="grid grid-cols-7 mt-2 gap-x-1 text-center">
    <LinkButton v-for="century in centuries" :key="century" :text="century + 1 + 'e eeuw'"
                @click="searchByCentury(century + 1)"/>
  </div>
  <!-- Currently uses 10 as magic number for the amount of results on the page, hide button when above/below max/min -->
  <div class="grid grid-cols-2 max-w-fit gap-2 text-center">
    <LinkButton text="Prev" v-if="currentIndex > 1" @click="currentIndex -= 10"/>
    <LinkButton text="Next" v-if="currentIndex < maxArtworks - 10" @click="currentIndex += 10"/>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-2">
    <ArtworkCard v-for="artwork in paginatedArtworks" :key="artwork.objectNumber" :artwork="artwork"/>
  </div>
</template>

<style scoped>

</style>