<script setup>

</script>

<template>
  <header class="bg-gradient-to-b from-gray-700 to-gray-800 shadow h-16 flex justify-between items-stretch">
    <router-link :to="{name: 'home'}"
                 class="inline-flex items-center h-full px-5 transition-colors hover:bg-gray-800 text-gray-200">
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{name: 'searchArtworks'}"
                   class="inline-flex items-center h-full transition-colors hover:bg-gray-800 px-2 text-gray-200">
        Search artworks
      </router-link>
      <router-link :to="{name: 'byMaterial'}"
                   class="inline-flex items-center h-full transition-colors hover:bg-gray-800 px-2 text-gray-200">
        Search by material
      </router-link>
      <router-link :to="{name: 'byCentury'}"
                   class="inline-flex items-center h-full transition-colors hover:bg-gray-800 px-2 text-gray-200">
        Search by century
      </router-link>
    </div>
  </header>
</template>

<style scoped>

</style>