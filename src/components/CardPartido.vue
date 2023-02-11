<template>
  <div id="pokemon" class="mt-6">
    <figure>
      <img  class="w-32" :src="uri" alt="Placeholder image" />
    </figure>
    <h4 class="text-xl font-medium">{{ sigla }}</h4>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    sigla: String,
    uri: String,
  },
};
</script>

<style></style>
