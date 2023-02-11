<template>
  <main
    class="greetings flex justify-end flex-col-reverse pt-4 lg:pt-0 items-center bg-[#0f0e5e] h-screen bg-[url('assets/bbblurry.svg')] bg-no-repeat bg-cover bg-center lg:h-[88vh] lg:flex-row-reverse lg:justify-evenly lg:max-w-[100vw]"
  >
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
    <div
      id="ladodireito"
      class="flex w-72 h-[22rem] justify-center mb-4 md:my-12 md:w-4/5 md:justify-evenly md:h-[372px] p-4 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg lg:h-[24rem] lg:w-[576px]"
    >
      <img
        id="imagem_deputado"
        class="hidden w-10 h-10 md:block md:h-full md:object-contain object-cover md:w-44 md:rounded-none md:rounded-l-lg"
        src="assets/brasil (1).png"
        alt="brasil"
      />
      <div class="flex flex-col justify-start md:pl-6 max-h-60 text-xs">
        <h5
          id="nome_deputado"
          class="text-gray-900 font-medium mx-auto md:text-lg lg:text-xl"
        >
          Brasil
        </h5>
        <p
          id="texto_deputado"
          class="espacamentoInicial my-3 text-gray-700 md:text-base"
        >
          Ouviram do Ipiranga as margens plácidas
          <br />De um povo heroico o brado retumbante, <br />E o sol da
          Liberdade, em raios fúlgidos, <br />Brilhou no céu da Pátria nesse
          instante. <br />Se o penhor dessa igualdade <br />Conseguimos
          conquistar com braço forte, <br />Em teu seio, ó Liberdade,
          <br />Desafia o nosso peito a própria morte! <br />Ó Pátria amada,
          <br />Idolatrada, Salve! Salve!
        </p>
        <p id="orgaos_deputado" class="flex flex-wrap text-sm md:text-base">
          Hino Nacional Brasileiro
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Description from "@/components/Description.vue";
export default {
  components: { Description },
  created: function () {
    const url = "https://dadosabertos.camara.leg.br/api/v2/deputados";
    var postsContainer = document.querySelector("#posts-container");
    var imgDeputado = document.querySelector("#imagem_deputado");
    var nomeDeputado = document.querySelector("#nome_deputado");
    var textoDeputado = document.querySelector("#texto_deputado");
    var textoOrgaos = document.querySelector("#orgaos_deputado");

    var vetor = [];
    var form = document.getElementById("form-deputado");
    var campo = document.getElementById("input");

    async function getDeputado(id: string) {
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();

      const orgaos = await fetch(`${url}/${id}/orgaos`);
      const dataOrgaos = await orgaos.json();

      return [data.dados, dataOrgaos.dados];
    }

    async function getAlldeputados() {
      const response = await fetch(url);
      const data = await response.json();
      return data.dados;
    }
    const myPromise = getAlldeputados();
    /** 
form?.addEventListener("submit", function (e) {
  // impede o envio do form
  e.preventDefault();
  textoDeputado?.classList.remove("espacamentoInicial");
  // alerta o valor do campo
  removeElements();

  myPromise.then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].nome === campo.value) {
        imgDeputado.setAttribute("src", `${data[i].urlFoto}`);
        nomeDeputado.innerText = data[i].nome;

        const minhaPromise = getDeputado(data[i].id);
        minhaPromise.then((data2) => {
          textoDeputado.innerText = `${data2[0].nomeCivil} nasceu em ${data2[0].municipioNascimento} - ${data2[0].ufNascimento}. Foi eleito(a) por ${data2[0].ultimoStatus.siglaUf}, e seu atual partido é ${data2[0].ultimoStatus.siglaPartido}`;
          textoOrgaos.innerText = `Participa dos seguintes orgãos: `;
          for (let j = 0; j < data2[1].length; j++) {
            const spanPai = document.createElement("span");
            const botao = document.createElement("button");
            const spanFilho = document.createElement("span");

            spanPai.classList.add("relative");

            botao.setAttribute(
              "onclick",
              `showPopover('${data2[1][j].siglaOrgao}')`
            );
            botao.setAttribute("style", "padding: 0 4px;");
            botao.innerText = data2[1][j].siglaOrgao;
            botao.classList.add("cursor-pointer");

            spanFilho.innerText = data2[1][j].nomeOrgao;
            spanFilho.setAttribute("id", `${data2[1][j].siglaOrgao}`);
            spanFilho.setAttribute("style", "z-index: -1;");
            spanFilho.classList.add("absolute");
            spanFilho.classList.add("bottom-8");
            spanFilho.classList.add("right-10");
            spanFilho.classList.add("opacity-0");
            spanFilho.classList.add("balao");

            spanPai.appendChild(botao);
            spanPai.appendChild(spanFilho);

            textoOrgaos.appendChild(spanPai);
          }
        });
      }
    }
  });
});

function showPopover(id) {
  var textoDoElementoClicado = document.getElementById(`${id}`);
  if (textoDoElementoClicado.classList.contains("opacity-0")) {
    textoDoElementoClicado.classList.toggle("opacity-0");
    textoDoElementoClicado.setAttribute("style", "z-index: 2;");
  } else {
    textoDoElementoClicado.classList.toggle("opacity-0");
    textoDoElementoClicado.setAttribute("style", "z-index: -1;");
  }
}*/
  },
  methods: {},

  name: "Home",
};
</script>

<style scoped>
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
