<template>
  <div>
    <h1>Informações de {{ info }} na Câmara</h1>
    <p>{{ descript }} atualmente em exercício</p>
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

<style scoped>
div {
  margin-top: 48px;
  color: #fff;
}
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  /*text-sm md:text-3xl*/
}
p {
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  /*text-xs md:text-2xl lg:text-xl lg:py-4"*/
}
</style>
