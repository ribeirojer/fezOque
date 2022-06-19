const url = "https://dadosabertos.camara.leg.br/api/v2/deputados";
//https://dadosabertos.camara.leg.br/swagger/api.html#api
const postsContainer = document.querySelector("#posts-container");
var imgDeputado = document.querySelector("#imagem_deputado");
var nomeDeputado = document.querySelector("#nome_deputado");
var textoDeputado = document.querySelector("#texto_deputado");
var textoOrgaos = document.querySelector("#orgaos_deputado");

var vetor = [];
var form = document.getElementById('form-deputado');
var campo = document.getElementById('input');

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
async function getDeputado(id) {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();

    const orgaos = await fetch(`${url}/${id}/orgaos`);
    const dataOrgaos = await orgaos.json();

    return [data.dados, dataOrgaos.dados];
}

const myPromise = getAlldeputados();

form.addEventListener('submit', function(e) {
    // impede o envio do form
    e.preventDefault();
    textoDeputado.classList.remove('espacamentoInicial');
    // alerta o valor do campo
    removeElements();

    myPromise.then((data) => {
        for(let i = 0; i<data.length; i++){
            if(data[i].nome === campo.value){
                imgDeputado.setAttribute("src",`${data[i].urlFoto}`);
                nomeDeputado.innerText = data[i].nome;
                
                const minhaPromise = getDeputado(data[i].id);
                minhaPromise.then((data2) => {
                    textoDeputado.innerText = `${data2[0].nomeCivil} nasceu em ${data2[0].municipioNascimento} - ${data2[0].ufNascimento}. Foi eleito(a) por ${data2[0].ultimoStatus.siglaUf}, e seu atual partido é ${data2[0].ultimoStatus.siglaPartido}`;
                    textoOrgaos.innerText = `Participa dos seguintes orgãos: `;
                    for(let j = 0; j<data2[1].length; j++){ 
                        const spanPai = document.createElement("span");
                        const botao = document.createElement("button");
                        const spanFilho = document.createElement("span");

                        spanPai.classList.add('relative');

                        botao.setAttribute("onclick", `showPopover('${data2[1][j].siglaOrgao}')`);
                        botao.setAttribute('style', 'padding: 0 4px;');
                        botao.innerText = data2[1][j].siglaOrgao;
                        botao.classList.add('cursor-pointer');

                        spanFilho.innerText = data2[1][j].nomeOrgao;
                        spanFilho.setAttribute('id', `${data2[1][j].siglaOrgao}`);
                        spanFilho.setAttribute('style', 'z-index: -1;');
                        spanFilho.classList.add('absolute');
                        spanFilho.classList.add('bottom-8');
                        spanFilho.classList.add('right-10');
                        spanFilho.classList.add('opacity-0');
                        spanFilho.classList.add('balao');

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
    if(textoDoElementoClicado.classList.contains("opacity-0")){
        textoDoElementoClicado.classList.toggle("opacity-0");
        textoDoElementoClicado.setAttribute('style', 'z-index: 2;');
    }else {
        textoDoElementoClicado.classList.toggle("opacity-0");
        textoDoElementoClicado.setAttribute('style', 'z-index: -1;');
    }
}