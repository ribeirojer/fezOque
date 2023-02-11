<template>
  <div id="pokemon" class="p-4 mx-4 bg-white mt-6">
    <figure>
      <img class="w-32" :src="imagem" alt="Imagem não encontrada" />
    </figure>
    <h4 class="text-xl font-medium">{{ sigla }}</h4>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  created: function () {
    const apoio = this.uri as string;
    axios.get(apoio).then((res) => {
      this.imagem = res.data.dados.urlLogo;
    });
  },
  data() {
    return {
      imagem: String,
    };
  },
  props: {
    sigla: String,
    uri: String,
  },
};
</script>

<style></style>
