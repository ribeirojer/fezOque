const url = "https://dadosabertos.camara.leg.br/api/v2/deputados";

const postsContainer = document.querySelector("#posts-container");

async function getAlldeputados() {
    const response = await fetch(url);
    //console.log(data);

    const data = await response.json();
    //console.log(data);

    data.dados.map((deputado) => {
        const div = document.createElement("div");
        const imagemDeputado = document.createElement("img");
        const nomeDeputado = document.createElement("h2");
        const partidoDeputado = document.createElement("p");
        const ufDeputado = document.createElement("p");
        const emailDeputado = document.createElement("p");
        const idDeputado = document.createElement("p");
        
        imagemDeputado.setAttribute("src",`${deputado.urlFoto}`);
        nomeDeputado.innerText = deputado.nome;
        partidoDeputado.innerText = deputado.siglaPartido;
        ufDeputado.innerText = deputado.siglaUf;
        emailDeputado.innerText = deputado.email;
        idDeputado.innerText = deputado.id;
        
        div.appendChild(imagemDeputado);
        div.appendChild(nomeDeputado);
        div.appendChild(partidoDeputado);
        div.appendChild(ufDeputado);
        div.appendChild(emailDeputado);
        div.appendChild(idDeputado);

        postsContainer.appendChild(div);
    });
}

getAlldeputados();