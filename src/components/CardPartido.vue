<template>
  <div>
    <figure>
      <img :src="imagem" alt="Imagem não encontrada" />
    </figure>
    <h4>{{ sigla }}</h4>
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

<style scoped>
div {
  padding: 1rem;
  margin: 1.5rem 1rem 0 1rem;
  background-color: #fff;
}
img {
  width: 128px;
}
h4 {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
