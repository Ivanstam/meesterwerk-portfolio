<script setup>
import LinkButton from "./LinkButton.vue";

const { artwork } = defineProps(({
  artwork: Object
}))
</script>

<template>
  <div class="bg-gray-600 shadow-xl rounded-xl p-0.5">
    <router-link :to="{ name: 'artworkInfo', params: { id: artwork.objectNumber }}">
      <img v-if="artwork.hasImage" :src="artwork.webImage.url" alt="artwork.title"
           class="w-full h-64 object-cover rounded-t-xl">
    </router-link>
    <div class="p-3">
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