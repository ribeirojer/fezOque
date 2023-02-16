<template>
  <main>
    <Header></Header>
    <section>
      <description
        :info="'Deputados'"
        :descript="'Pesquise sobre um deputado'"
      />
      <form>
        <input
          v-model="search"
          type="text"
          placeholder="Digite um nome aqui..."
          @change="digitar"
        />
        <ul class="absolute bg-white ap" v-if="showDigitados">
          <div
            v-for="deputado in filteredDeputados.slice(0, 5)"
            :key="deputado.urlFoto"
          >
            <li>{{ deputado.nome }}</li>
          </div>
        </ul>
        <button
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="buscar"
        >
          Buscar
        </button>
      </form>
    </section>
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
      showDigitados: false,
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
      this.filteredDeputados = this.deputados
        .filter((deputado) =>
          deputado.nome
            .toLowerCase()
            .startsWith(this.search.toLowerCase().trim())
        )
        .sort();
    },
    digitar: function () {
      if (this.search == "") {
        this.showDigitados = false;
      }
      this.showDigitados = true;
      this.filteredDeputados = this.deputados
        .filter((deputado) =>
          deputado.nome
            .toLowerCase()
            .startsWith(this.search.toLowerCase().trim())
        )
        .sort();
    },
  },
  name: "Home",
};
</script>

<style scoped>
main {
  background-color: #0f0e5e;
  min-height: 100vh;
}
section {
  height: 12rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
form {
  display: flex;
  gap: 1rem;
  width: 24rem;
}
form input {
  width: 100%;
  /**  w-full py-4 px-3 border-none outline-none bg-white text-base rounded"
       */
}
.deputados {
  display: flex;
  flex-wrap: wrap;
}
.ap {
  top: 17rem;
  padding: 0.5rem;
  width: 17rem;
  border-radius: 0.2rem;
}
</style>
