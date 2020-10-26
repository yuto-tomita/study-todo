<template>
  <div class="button-form">
    <a href="#" @click="submit" class="button">送信</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext } from "vue";

export default defineComponent({
  setup(context: SetupContext, { emit }) {
    const state = reactive({
      click: "onClick"
    });

    const submit = () => {
      emit("submit");
    };

    return {
      state,
      submit
    };
  }
});
</script>

<style scoped>
.button-form {
  position: relative;
  width: 150px;
}

.button {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: 0.4s;
  outline: none;
}

.button:hover {
  background: #67c5ff;
  color: white;
}
</style>
