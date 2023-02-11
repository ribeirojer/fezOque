<template>
  <main class="bg-[#0f0e5e] h-screen">
    <Header></Header>
    <div id="ladoesquerdo" class="h-48 flex items-center flex-col">
      <description
        :info="'Deputados'"
        :descript="'Pesquise sobre um deputado'"
      />
      <div class="flex gap-4 w-96">
        <input
          v-model="search"
          type="text"
          placeholder="Digite um nome aqui..."
          class="w-full py-4 px-3 border-none outline-none bg-white text-base rounded"
        />
        <button
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="buscar"
        >
          Buscar
        </button>
      </div>
      <!--<ul class="list w-full bg-white list-none"></ul>-->
    </div>
    <div class="deputados" v-if="showDeputados">
      <div v-for="deputado in filteredDeputados" :key="deputado.urlFoto">
        <Card :name="deputado.nome" :urlFoto="deputado.urlFoto" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import axios from "axios";
import Header from "@/components/Header.vue";
import Description from "@/components/Description.vue";
import Card from "@/components/Card.vue";
export default {
  components: { Description, Card, Header },
  data() {
    return {
      deputados: [] as Array<{ nome: string; urlFoto: string }>,
      filteredDeputados: [] as Array<{ nome: string; urlFoto: string }>,
      search: "",
      showDeputados: false,
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
  methods: {
    buscar: function () {
      this.showDeputados = true;
      this.filteredDeputados = this.deputados.filter((deputado) =>
        deputado.nome.toLowerCase().includes(this.search.toLowerCase().trim())
      );
    },
  },
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
