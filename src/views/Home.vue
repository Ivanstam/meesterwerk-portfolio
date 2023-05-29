<script setup>
  import {computed} from "vue";
  import store from "../store/index.js";

  const artworks = computed(() => store.state.artwork)
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<template>
  <div class="flex flex-col p-8">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for artworks"/>
    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of alphabet" :key="letter">
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>