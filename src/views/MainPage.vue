<template>
  <div class="main-page-container">
    <h1>Todo</h1>
    <div class="form-container">
      <inputBoxText />
      <inputBoxDateTime />
      <buttonForm @submit="submit" />
    </div>
    <div class="switch-tab-container">
      <switchTab />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import inputBoxText from "@/components/form/inputBoxText.vue";
import inputBoxDateTime from "@/components/form/inputBoxDatetime.vue";
import switchTab from "@/components/form/switchTab.vue";
import buttonForm from "@/components/form/buttonForm.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    inputBoxText,
    switchTab,
    inputBoxDateTime,
    buttonForm
  },
  setup() {
    const store = useStore();

    // methods
    interface TodoObj {
      todo: string;
      date: string;
    }

    function submit(): void {
      const formTodo: string = store.getters.getFormTodo;
      const formDate: string = store.getters.getFormDate;

      const todo: TodoObj = {
        todo: formTodo,
        date: formDate
      };

      if (formTodo !== "" && formDate !== "") {
        store.dispatch("addTodo", todo);
      }
    }

    return {
      submit
    };
  }
});
</script>

<style>
.form-container {
  display: flex;
  align-items: center;
}
</style>
