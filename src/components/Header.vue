<template>
  <header>
    <a href="/">
      <img src="../assets/logo2.png" alt="Logo" />
    </a>
    <nav>
      <a href="/">Deputados</a>
      <a href="/partidos">Partidos</a>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 12px 24px;
}
img {
  height: 48px;
}
nav {
  display: flex;
  gap: 1.5rem;
}
nav a {
  font-weight: 500;
}
</style>
