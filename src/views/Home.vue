<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    {{ state.message }}
    {{ state.index }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  setup() {
    const state = reactive<{ message: string; index: number }>({
      message: "こんにちは",
      index: 0
    });

    return {
      state
    };
  }
});
</script>
