<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <MainPage />
  </div>
  <!-- <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainPage from "@/views/MainPage.vue";

export default defineComponent({
  components: {
    MainPage
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  box-sizing: border-box;
}
</style>
