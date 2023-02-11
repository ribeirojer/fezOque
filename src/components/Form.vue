<template>
  <form id="form-deputado" class="md:w-96 pt-4 md:pt-6" autocomplete="off">
    <div class="flex gap-4">
      <input
        type="text"
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
  created: function () {},
};
</script>

<style></style>
