<template>
  <main
    class="greetings flex flex-wrap justify-end flex-col-reverse pt-4 lg:pt-0 items-center bg-[#0f0e5e] h-screen bg-[url('assets/bbblurry.svg')] bg-no-repeat bg-cover bg-center lg:h-[88vh] lg:flex-row-reverse lg:justify-evenly lg:max-w-[100vw]"
  >
  <Header></Header>
    <div id="ladoesquerdo" class="h-48 flex items-center flex-col">
      <description
        :info="'Deputados'"
        :descript="'Pesquise sobre um deputado'"
      />
      <form id="form-deputado" class="md:w-96 pt-4 md:pt-6" autocomplete="off">
        <div class="flex">
          <input
            type="text"
            id="input"
            placeholder="Digite um nome aqui..."
            class="w-full py-4 px-3 border-none outline-none bg-white text-base rounded"
          />
          <button
            type="submit"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
        <ul class="list w-full bg-white list-none"></ul>
      </form>
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
import Header from "@/components/Header.vue";
import Description from "@/components/Description.vue";
import Card from "@/components/Card.vue";
import axios from "axios";
export default {
  components: { Description, Card, Header },
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
