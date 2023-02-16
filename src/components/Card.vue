<template>
  <div>
    <figure>
      <img :src="urlFoto" alt="Placeholder image" />
    </figure>
    <h4>{{ name }}</h4>
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

<style scoped>
div {
  margin: 1.5rem 1rem;
  background-color: #fff;
}
img {
  width: 128px;
  margin: 1rem;

}
h4 {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
