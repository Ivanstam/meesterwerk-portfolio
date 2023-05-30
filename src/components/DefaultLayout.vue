<script setup>
  import Navbar from "./Navbar.vue";
</script>

<template>
  <div class="bg-gray-500">
    <navbar/>
    <main class="text-gray-200">
      <router-view/>
    </main>
  </div>
</template>

<style scoped>

</style>