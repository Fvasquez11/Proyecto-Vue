<script setup>
import TheHome from "@/components/TheHome.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
</script>

<script>
import { useMainStore } from "@/stores/mainStore";

export default {
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore
    };
  },
};
</script>

<template>
  <main>
    <TheHome />
    <div class="login">
      <div v-if="this.mainStore.login"><Login /></div>
      <div v-if="!this.mainStore.login"><SignUp /></div>
    </div>
    <Footer />
  </main>
</template>

<style>
.login {
  display: flex;
  justify-content: center;
  padding: 2%;
}
</style>
