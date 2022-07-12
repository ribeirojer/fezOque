const url = "https://dadosabertos.camara.leg.br/api/v2/partidos?sigla=&ordem=ASC&ordenarPor=sigla&pagina=1&itens=15";
const app = document.getElementById("app");

var form = document.getElementById('form-deputado');
var campo = document.getElementById('input');
var imgPartido = document.querySelector("#imagem_partido");
var nomePartido = document.querySelector("#nome_partido");
var textoPartido = document.querySelector("#texto_partido");
var nomesDeputado = document.querySelector("#nomes_deputado");


async function retornaPartidos() {
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
async function retornaMembrosPartido(todosDeputados, idPartido) {
    var objeto = [];
    var string = "https://dadosabertos.camara.leg.br/api/v2/partidos/";
    var contador = 1;
    tamanhorestante = todosDeputados.headers['x-total-count'];

    for(let i = 0; i<parseInt(tamanhorestante); i = i + todosDeputados.data.dados.length) {
        var requisicao = `${string}${idPartido}/membros?pagina=${contador}&itens=15`;
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
    const todosPartidos = retornaPartidos();

    todosPartidos.then((data) => {

        for(let i = 0; i<data.length; i++){
            if(data[i].nome === campo.value){
                //imgPartido.setAttribute("src",`${data[i].urlFoto}`);
                nomePartido.innerText = data[i].nome;

                var requisicao = `https://dadosabertos.camara.leg.br/api/v2/partidos/${data[i].id}/membros`;
                axios.get(requisicao).then((res)=>{

                    const todosDeputados = retornaMembrosPartido(res, data[i].id);
                    todosDeputados.then((resposta)=>{
                        console.log(resposta);
                        textoPartido.innerText = `${resposta.length} Membros do partido na Câmara: `;
                        nomesDeputado.innerText = '';
                        app.innerText = '';      
                        for(let j = 0; j<resposta.length; j++) {
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