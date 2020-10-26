<template>
  <div class="input-form-container">
    <label class="text-box">
      <input
        type="date"
        v-model="state.dateTime"
        placeholder="いつまでに行うか入力してください"
        :style="{ 'border-bottom': state.borderColor }"
        @focus="focusColor"
        @blur="normalColor"
      />
    </label>
    <!-- {{ state.dateTime }} -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const state = reactive({
      dateTime: "",
      borderColor: "3px solid #1b2538"
    });

    // method
    const focusColor = () => {
      state.borderColor = "3px solid #da3c41";
    };

    const normalColor = () => {
      state.borderColor = "3px solid #1b2538";
      store.dispatch("addDateTodo", state.dateTime);
    };

    return { state, focusColor, normalColor };
  }
});
</script>

<style>
.text-box {
  position: relative;
  margin: 40px;
}

.text-box input[type="date"] {
  /* width: 100%; */
  padding: 0.3em;
  letter-spacing: 1px;
  border: none;
  /* border-bottom: 3px solid; */
  background: transparent;
  outline: none;
  user-select: none;
}

.input-label input[type="date"]:focus {
  border-bottom: 2px solid #da3c41;
  outline: none;
  user-select: none;
}
</style>
