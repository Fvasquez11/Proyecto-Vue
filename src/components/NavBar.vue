<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <div><RouterView /></div>
  </main>
</template>

<style>
</style>
