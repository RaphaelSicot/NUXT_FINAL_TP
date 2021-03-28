<template>
  <div>
    <div class="navbar">
      <div><NuxtLink to="/">Home</NuxtLink></div>
      <div><NuxtLink to="/listeAstre">Liste des astres</NuxtLink></div>
      <div><NuxtLink to="/favoris">Favoris</NuxtLink></div>
    </div>
    <Nuxt />
  </div>
</template>
<style scoped>
.navbar {
  background-color: #111827;
  display: flex;
  color: #fbbf24;
  justify-content: center;
}

.navbar div {
  padding: 25px 15px 25px 15px;
}
</style>