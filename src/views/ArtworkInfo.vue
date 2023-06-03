<script setup>
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import store from "../store/index.js";
import {searchArtworks} from "../store/actions.js";

  const route = useRoute();
  const id = ref('');
  const artworkInfo = computed(() => store.state.artworkInfo);
  function getArtworkInfo() {
    store.dispatch('getArtworkInfo', id.value)
  }

// Fetch the id from the params in the address field, only search with an ID
onMounted(() => {
  id.value = route.params.id
  if (id.value) {
    getArtworkInfo();
  }
});
</script>

<template>
  <div v-if="artworkInfo.webImage" class="p-3 border-2 border-gray-400">
    <h1 class="text-xl font-bold mb-5">{{ artworkInfo.title }}</h1>
    <img :src="artworkInfo.webImage.url" :alt="artworkInfo.title" class="m-5 mx-auto drop-shadow-2xl">
    <div class="italic m-3">
      {{ artworkInfo.label.description }}
      <div v-if="!artworkInfo.label.description">
        {{ artworkInfo.longTitle }}
      </div>
    </div>

    <div class="content-stretch grid grid-cols-1 md:grid-cols-3 mt-2 py-2">
      <div class="text-center"><h1 class="font-bold">Artiest:</h1>
        <router-link :to="{name: 'searchArtworks', params: {keyword: artworkInfo.principalMaker}}" class="text-blue-900">
          {{ artworkInfo.principalMaker }}</router-link>
      </div>
      <div class="text-center"><h1 class="font-bold">Jaar:</h1>
        <router-link :to="{name: 'byCentury', params: {century: artworkInfo.dating.period}}" class="text-blue-900">
          {{ artworkInfo.dating.presentingDate }}</router-link>
      </div>
      <div class="text-center"><h1 class="font-bold">Medium: </h1> {{ artworkInfo.physicalMedium }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>