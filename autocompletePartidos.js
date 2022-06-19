let names = [
    "Partido da Mobilização Nacional", "Podemos", "Progressistas", "Partido Popular Socialista",
    "Partido Pátria Livre", "Partido da República", "Partido Republicano Brasileiro", "Partido Republicano da Ordem Social",
    "Partido Republicano Progressista", "Partido Renovador Trabalhista Brasileiro",
    "Partido Socialista Brasileiro", "Partido Social Cristão",
    "Partido Social Democrático", "Partido da Social Democracia Brasileira",
    "Partido Social Liberal", "Avante", "Cidadania", "Democracia Cristã", "Democratas", "Movimento Democrático Brasileiro",
    "Partido Novo", "Patriota", "Patriota", "Partido Constitucionalista Brasileiro",
    "Partido Comunista do Brasil", "Partido da Causa Operária",
    "Partido Democrático Trabalhista", "Partido Humanista da Solidariedade",
    "Partido Liberal", "Partido da Mulher Brasileira", "Partido Socialismo e Liberdade", "Partido Socialista dos Trabalhadores Unificado",
    "Partido dos Trabalhadores", "Partido Trabalhista Brasileiro",
    "Partido Trabalhista Cristão", "Partido Verde", "Rede Sustentabilidade", "Republicanos", "Sem Partido", "Solidariedade", "União Brasil"];
  //Sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById("input");
var contador = 0;
//Execute function on keyup
input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
        //convert input to lowercase and compare with each string
        if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != "" && contador < 4
        ) {
            //create li element
            let listItem = document.createElement("li");
            //One common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            //Display matched part in bold
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            //display the value in array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
            contador++;
        }
    }
});
function displayNames(value) {
    input.value = value;
    removeElements();
}
function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
    contador=0;
}