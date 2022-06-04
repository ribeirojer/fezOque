const url = "https://dadosabertos.camara.leg.br/api/v2/deputados";
//https://dadosabertos.camara.leg.br/swagger/api.html#api
const postsContainer = document.querySelector("#posts-container");
var vetor = [];


var form = document.getElementById('form-deputado');
var campo = document.getElementById('input');
var data = getAlldeputados();

async function getAlldeputados() {
    const response = await fetch(url);
    //console.log(data);

    const data = await response.json();
    //console.log(data);
    data.dados.map((deputado) => {
        //console.log(deputado.nome);
    });
    return data.dados;
}

form.addEventListener('submit', function(e) {
    // impede o envio do form
    e.preventDefault();

    // alerta o valor do campo
    console.log(campo.value);
    removeElements();

    console.log(data);

});

/*async function getAlldeputados() {
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
}*/