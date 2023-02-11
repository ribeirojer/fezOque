<template>
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
</template>

<script lang="ts">
export default {
  created: function () {
    /**
//reference
let input = document.getElementById("input");
var contador = 0;
//Execute function on keyup
input?.addEventListener("keyup", (e) => {
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
function displayNames(value: any) {
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

 */
  },
};
</script>

<style></style>
