<script setup>
  import Navbar from "./Navbar.vue";
  import Footer from "./Footer.vue";
</script>

<template>
  <navbar/>
  <main class="text-gray-200 flex flex-col p-6">
    <router-view/>
  </main>
  <Footer/>
</template>

<style scoped>

</style>