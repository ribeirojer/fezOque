const url = "https://dadosabertos.camara.leg.br/api/v2/partidos?sigla=&ordem=ASC&ordenarPor=sigla&pagina=1&itens=15";
const app = document.getElementById("app");

var form = document.getElementById('form-deputado');
var campo = document.getElementById('input');
var imgPartido = document.querySelector("#imagem_partido");
var nomePartido = document.querySelector("#nome_partido");

async function retornaTodoConteudo() {
    var objeto = [];
    var string = "https://dadosabertos.camara.leg.br/api/v2/partidos?sigla=&ordem=ASC&ordenarPor=sigla&pagina=";
    const response = await axios.get(url);
    var contador = 1;
    tamanhorestante = response.headers['x-total-count'];

    for(let i = 0; i<parseInt(tamanhorestante); i = i + response.data.dados.length) {
        var requisicao = `${string}${contador}&itens=15`;
        var next = await axios.get(requisicao);
        for(let j = 0; j<next.data.dados.length; j++) {  
            objeto[j+i] = next.data.dados[j];
        }
        contador = contador + 1;
    }
    return objeto;
}

form.addEventListener('submit', function(e) {
    // impede o envio do form
    e.preventDefault();
    // alerta o valor do campo
    removeElements();
    const todosPartidos = retornaTodoConteudo();

    todosPartidos.then((data) => {
        console.log(data);
        for(let i = 0; i<data.length; i++){
            if(data[i].nome === campo.value){
                //imgPartido.setAttribute("src",`${data[i].urlFoto}`);
                nomePartido.innerText = data[i].nome;
            }
        }
    });
});

/*
const erl = "/37906/membros";

function dentroDaPromise(data) {
    for(let i=0; i<data.length; i++){               
        const div = document.createElement("h1");  
        const siglaPartido = document.createElement("span");
        const nomePartido = document.createElement("span");
        const idPartido = document.createElement("span");

        siglaPartido.innerText = data[i].sigla;
        nomePartido.innerText = data[i].nome;
        nomePartido.classList.add('ml-4');
        idPartido.innerText = data[i].id;
        idPartido.classList.add('ml-4');

        div.appendChild(siglaPartido);
        div.appendChild(nomePartido);
        div.appendChild(idPartido);

        app.appendChild(div);
    }
}*/