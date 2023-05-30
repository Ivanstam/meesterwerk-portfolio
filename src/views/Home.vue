<script setup>
import {computed, onMounted, ref} from "vue";
  import store from "../store/index.js";
  import axiosClient from "../axiosClient.js";

  const key = '0QSmn1vm';
  // const artworks = computed(() => store.state.artwork)
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const artworks = ref([]);

  onMounted(async () => {
    const response = await axiosClient.get(`/collection?key=` + key + `&involvedMaker=Rembrandt+van+Rijn`);
    artworks.value = response.data;
    console.log(response.data)
    // artObjectsArray.forEach(element => console.log(element));
  });

</script>

<template>
  <div class="flex flex-col p-8">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for artworks"/>
    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of alphabet" :key="letter">
        {{ letter }}
      </router-link>
    </div>
    <pre>{{ artworks }}</pre>
  </div>
</template>

<style scoped>

</style>