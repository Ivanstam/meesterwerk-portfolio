<script setup>
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import store from "../store/index.js";

  const route = useRoute();
  const id = ref('');
  const artworkInfo = computed(() => store.state.artworkInfo);
  function getArtworkInfo() {
    store.dispatch('getArtworkInfo', id.value)
  }

// Fetch the id from the params in the address field, only search with an ID
onMounted(() => {
  id.value = route.params.id
  if (id.value) {
    getArtworkInfo();
  }
});
</script>

<template>
  <div>
    <pre>{{ artworkInfo }}</pre>
  </div>
</template>

<style scoped>

</style>