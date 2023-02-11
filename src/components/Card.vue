<template>
  <div id="pokemon" class="mt-6">
    <figure>
      <img  class="w-32" :src="urlFoto" alt="Placeholder image" />
    </figure>
    <h4 class="text-xl font-medium">{{ name }}</h4>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    urlFoto: String,
  },
};
</script>

<style></style>
