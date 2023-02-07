<template>
  <div class="item">
    <header
      x-data="{navbarOpen: false}"
      class="w-full flex items-center justify-between bg-white p-3 md:p-5 lg:p-0"
    >
      <a href="index.html">
        <img src="assets/logo2.png" alt="logo" class="md:ml-4 w-48" />
      </a>
      <div>
        <button
          id="navbarToggler"
          class="block lg:hidden focus:ring-2 ring-primary px-2 py-1 rounded-lg"
        >
          <span
            class="relative w-[30px] h-[2px] my-[6px] block bg-blue-600"
          ></span>
          <span
            class="relative w-[30px] h-[2px] my-[6px] block bg-blue-600"
          ></span>
          <span
            class="relative w-[30px] h-[2px] my-[6px] block bg-blue-600"
          ></span>
        </button>
        <nav
          id="navbarCollapse"
          class="bg-white absolute py-5 px-6 shadow rounded-lg max-w-[140px] w-full lg:max-w-full lg:w-full right-4 top-[77px] lg:block lg:static lg:shadow-none"
        >
          <ul class="block lg:flex">
            <li>
              <a
                href="index.html"
                class="text-base font-medium text-dark hover:text-primary py-2 lg:inline-flex flex lg:ml-12"
              >
                Deputados
              </a>
            </li>
            <li>
              <a
                href="partidos.html"
                class="text-base font-medium text-dark hover:text-primary py-2 lg:inline-flex flex lg:ml-12"
              >
                Partidos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main
      class="flex justify-end flex-col-reverse pt-4 lg:pt-0 items-center bg-green-900 h-screen bg-[url('assets/bbblurry.svg')] bg-no-repeat bg-cover bg-center lg:h-[88vh] lg:flex-row lg:justify-evenly lg:max-w-[100vw]"
    >
      <div id="ladoesquerdo" class="h-48 flex items-center flex-col">
        <h1 class="text-white text-sm md:text-3xl lg:text-2xl font-bold">
          Informações de Partidos na Câmara
        </h1>
        <p class="text-white text-xs md:text-2xl lg:text-xl lg:py-4">
          Partido com deputado atualmente em exercício
        </p>
        <form
          id="form-deputado"
          class="md:w-96 pt-4 md:pt-6"
          autocomplete="off"
        >
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
          id="imagem_partido"
          class="hidden w-10 h-10 md:block md:h-full md:object-contain object-cover md:w-44 md:rounded-none md:rounded-l-lg"
          src="assets/brasil (1).png"
          alt="brasil"
        />
        <div
          class="flex flex-col justify-start md:pl-6 max-h-[19rem] lg:max-h-full text-xs lg:text-base"
        >
          <h5
            id="nome_partido"
            class="text-gray-900 font-medium mx-auto md:text-lg lg:text-xl"
          >
            Brasil
          </h5>
          <p
            id="texto_partido"
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
          <p id="nomes_deputado" class="flex flex-wrap text-sm md:text-base">
            Hino Nacional Brasileiro
          </p>
          <div id="app" class="text-base"></div>
        </div>
      </div>
    </main>
  </div>
  
    <!-- Scripts 
    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="./scripts/autocompletePartidos.js" defer></script>
    <script src="./scripts/partidos.js" defer></script>
    -->
    <!-- Style 
    <link rel="stylesheet" href="style.css">

    <title>Partidos</title>-->
</template>

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
