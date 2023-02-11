<template>
  <main class="bg-[#0f0e5e] h-[100vh]">
    <Header></Header>
    <div id="ladoesquerdo" class="h-48 flex items-center flex-col">
      <description
        :info="'Deputados'"
        :descript="'Pesquise sobre um deputado'"
      />
      <Form></Form>
    </div>
    <div class="deputados">
      <!--<div v-for="(deputado, index) in filteredDeputados" :key="index">
        <Card
          :name="deputado.nome"
          :urlFoto="deputado.urlFoto"
          :num="index + 1"
        />
      </div>-->
    </div>
  </main>
</template>

<script lang="ts">
import axios from "axios";
import Header from "@/components/Header.vue";
import Description from "@/components/Description.vue";
import Card from "@/components/Card.vue";
import Form from "@/components/Form.vue";
export default {
  components: { Description, Card, Header, Form },
  data() {
    return {
      deputados: [],
      filteredDeputados: [] as Array<{ nome: string; urlFoto: string }>,
      search: "",
    };
  },
  created: function () {
    axios
      .get("https://dadosabertos.camara.leg.br/api/v2/deputados")
      .then((res) => {
        this.deputados = res.data.dados;
        this.filteredDeputados = res.data.dados;
      });
  },
  methods: {},
  name: "Home",
};
</script>

<style scoped>
.deputados {
  display: flex;
  flex-wrap: wrap;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
