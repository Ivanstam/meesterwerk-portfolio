<script setup>
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<template>
  <div>
    <p class="text-2xl font-bold italic">Search by letter</p>
  </div>
  <div class="flex justify-center gap-2 mt-2">
    <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of alphabet" :key="letter">
      {{ letter }}
    </router-link>
  </div>
</template>

<style scoped>

</style>