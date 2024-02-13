<!-- App.vue -->
<template>
  <q-layout
    id="app"
    view="hHh lpR lFf"
    style="height: 100vh"
    class="rounded-borders"
  >
    <q-header>
      <Navbar v-if="isAuthenticated === true && token !== ''" />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { storeToRefs } from "pinia";
import Navbar from "./components/NavbarComponent.vue";
import { useAuthStore } from "./store/auth-store";

const { isAuthenticated, token } = storeToRefs(useAuthStore());
</script>

<style>
#app {
  font-family: sans-serif;
}
.page-container {
  background-color: #F9F9FC ;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #9b9b9b;
}
::-webkit-scrollbar-track {
  background-color: rgb(255, 255, 255);
}
</style>
