<template>
  <main class="bg-green-900 h-[100vh]">
    <Header></Header>
    <div id="ladoesquerdo" class="h-48 flex items-center flex-col">
      <Description :info="'Partidos'" :descript="'Partido com deputado'" />
      <Form></Form>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(partido, index) in filteredPartidos" :key="index">
        <CardPartido
          :sigla="partido.sigla"
          :uri="partido.uri"
          :num="index + 1"
        />
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
import Form from "@/components/Form.vue";
export default {
  components: { Header, Description, Card, CardPartido, Form },
  data() {
    return {
      partido: [],
      filteredPartidos: [] as Array<{ sigla: string; uri: string }>,
      search: "",
    };
  },
  created() {
    axios
      .get("https://dadosabertos.camara.leg.br/api/v2/partidos")
      .then((res) => {
        console.log(res.data.dados);
        this.partido = res.data.dados;
        this.filteredPartidos = res.data.dados;
      });
    const url = "?sigla=&ordem=ASC&ordenarPor=sigla&pagina=1&itens=15";
    const app = document.getElementById("app");

    var form = document.getElementById("form-deputado");
    var campo = document.getElementById("input");
    var imgPartido = document.querySelector("#imagem_partido");
    var nomePartido = document.querySelector("#nome_partido");
    var textoPartido = document.querySelector("#texto_partido");
    var nomesDeputado = document.querySelector("#nomes_deputado");
    /**
    async function retornaPartidos() {
      var objeto = [];
      var string =
        "https://dadosabertos.camara.leg.br/api/v2/partidos?sigla=&ordem=ASC&ordenarPor=sigla&pagina=";
      const response = await axios.get(url);
      var contador = 1;
      tamanhorestante = response.headers["x-total-count"];

      for (
        let i = 0;
        i < parseInt(tamanhorestante);
        i = i + response.data.dados.length
      ) {
        var requisicao = `${string}${contador}&itens=15`;
        var next = await axios.get(requisicao);
        for (let j = 0; j < next.data.dados.length; j++) {
          objeto[j + i] = next.data.dados[j];
        }
        contador = contador + 1;
      }
      return objeto;
    }
    async function retornaMembrosPartido(todosDeputados: { headers: { [x: string]: any; }; data: { dados: string|any[]; }; }, idPartido: any) {
      var objeto = [];
      var string = "https://dadosabertos.camara.leg.br/api/v2/partidos/";
      var contador = 1;
      tamanhorestante = todosDeputados.headers["x-total-count"];

      for (
        let i = 0;
        i < parseInt(tamanhorestante);
        i = i + todosDeputados.data.dados.length
      ) {
        var requisicao = `${string}${idPartido}/membros?pagina=${contador}&itens=15`;
        var next = await axios.get(requisicao);
        for (let j = 0; j < next.data.dados.length; j++) {
          objeto[j + i] = next.data.dados[j];
        }
        contador = contador + 1;
      }
      return objeto;
    }

    form.addEventListener("submit", function (e) {
      // impede o envio do form
      e.preventDefault();
      // alerta o valor do campo
      removeElements();
      const todosPartidos = retornaPartidos();

      todosPartidos.then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].nome === campo.value) {
            //imgPartido.setAttribute("src",`${data[i].urlFoto}`);
            nomePartido.innerText = data[i].nome;

            var requisicao = `https://dadosabertos.camara.leg.br/api/v2/partidos/${data[i].id}/membros`;
            axios.get(requisicao).then((res) => {
              const todosDeputados = retornaMembrosPartido(res, data[i].id);
              todosDeputados.then((resposta) => {
                console.log(resposta);
                textoPartido.innerText = `${resposta.length} Membros do partido na Câmara: `;
                nomesDeputado.innerText = "";
                app.innerText = "";
                for (let j = 0; j < resposta.length; j++) {
                  const p = document.createElement("p");
                  p.innerText = resposta[j].nome;
                  app.appendChild(p);
                }
                console.log(res.data);
              });
            });
          }
        }
      });
    });
 */
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
