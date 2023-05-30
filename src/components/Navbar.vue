<script setup>

</script>

<template>
  <header class="bg-gray-600 shadow h-16 flex justify-between items-stretch">
    <router-link :to="{name: 'home'}"
                 class="inline-flex items-center h-full px-5 transition-colors hover:bg-gray-800 text-gray-200">
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{name: 'byLetter'}"
                   class="inline-flex items-center h-full transition-colors hover:bg-gray-700 px-2 text-gray-200">
        Search by letter
      </router-link>
      <router-link :to="{name: 'byArtist'}"
                   class="inline-flex items-center h-full transition-colors hover:bg-gray-700 px-2 text-gray-200">
        Search by artist
      </router-link>
      <router-link :to="{name: 'byCentury'}"
                   class="inline-flex items-center h-full transition-colors hover:bg-gray-700 px-2 text-gray-200">
        Search by century
      </router-link>
    </div>
  </header>
</template>

<style scoped>

</style>