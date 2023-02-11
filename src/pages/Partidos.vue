<template>
  <main class="bg-green-900 h-[100vh]">
    <Header></Header>
    <div id="ladoesquerdo" class="h-48 flex items-center flex-col">
      <Description :info="'Partidos'" :descript="'Partido com deputado'" />
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
    <div class="flex flex-wrap" v-if="showPartidos">
      <div v-for="partido in filteredPartidos" :key="partido.uri">
        <CardPartido :sigla="partido.sigla" :uri="partido.uri" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import axios from "axios";
import Header from "@/components/Header.vue";
import Description from "@/components/Description.vue";
import Card from "@/components/Card.vue";
import CardPartido from "@/components/CardPartido.vue";
export default {
  components: { Header, Description, Card, CardPartido },
  data() {
    return {
      partidos: [] as Array<{ sigla: string; uri: string }>,
      filteredPartidos: [] as Array<{ sigla: string; uri: string }>,
      search: "",
      showPartidos: false,
    };
  },
  created() {
    axios
      .get("https://dadosabertos.camara.leg.br/api/v2/partidos")
      .then((res) => {
        console.log(res.data.dados);
        this.partidos = res.data.dados;
        this.filteredPartidos = res.data.dados;
      });
  },
  methods: {
    buscar: function () {
      this.showPartidos = true;
      this.filteredPartidos = this.partidos.filter((partido) =>
        partido.sigla.toLowerCase().includes(this.search.toLowerCase().trim())
      );
    },
  },
};
</script>
>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
