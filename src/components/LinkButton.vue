<script setup>
  defineProps({
    href: String,
    text: String
  })
</script>

<template>
  <a :href="href"
     target="_blank"
     class="p-3 my-2 rounded-xl border bg-blue-800 border-blue-700 transition hover:bg-blue-700 hover:border-blue-600"
  >{{ text }}</a>
</template>

<style scoped>

</style>