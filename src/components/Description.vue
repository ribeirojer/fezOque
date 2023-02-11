<template>
  <div class="mt-12">
    <h1 class="text-white text-sm md:text-3xl lg:text-2xl font-bold">
      Informações de {{ info }} na Câmara
    </h1>
    <p class="text-white text-xs md:text-2xl lg:text-xl lg:py-4">
      {{ descript }} atualmente em exercício
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    info: String,
    descript: String,
  },
};
</script>

<style></style>
