<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <div class="navContainer">
      <div><h1>Titulo Locochon</h1></div>
      <nav>
        <b-button variant="primary"><RouterLink to="/">Home</RouterLink></b-button> 
        <b-button variant="primary"><RouterLink to="/about">About</RouterLink></b-button> 
      </nav>
    </div>
    <div><RouterView /></div>
  </main>
</template>

<style>
.navContainer {
  display: flex;
  justify-content: space-between;
  padding: 2%;
}
</style>
