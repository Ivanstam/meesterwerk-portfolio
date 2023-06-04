<script setup>
import LinkButton from "./LinkButton.vue";

const { artwork } = defineProps(({
  artwork: Object
}))
</script>

<template>
  <div class="bg-gradient-to-r from-gray-600 to-indigo-950 rounded-xl p-0.5 transition hover:drop-shadow-xl">
    <router-link :to="{ name: 'artworkInfo', params: { id: artwork.objectNumber }}">
      <img v-if="artwork.hasImage" :src="artwork.webImage.url" alt="artwork.title"
           class="w-full h-64 object-cover rounded-t-xl">
    </router-link>
    <div class="relative p-3">
      <h1 class="font-bold">{{ artwork.title }}</h1>
      <p class="mb-4">{{ artwork.longTitle }}</p>
      <div class="flex items-center justify-between">
        <LinkButton :href="artwork.links.web" text="Rijksmuseum"/>
        <router-link :to="{ name: 'artworkInfo', params: { id: artwork.objectNumber }}">
          <LinkButton text="Info"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>