<script setup>
  const props = defineProps({
    href: String,
    text: String
  })
</script>

<template>
  <a :href="href"
     target="_blank"
     class="px-3 py-2 rounded-xl border border-blue-700 bg-blue-800 m-2 hover:bg-blue-700 border-blue-600"
  >{{ text }}</a>
</template>

<style scoped>

</style>