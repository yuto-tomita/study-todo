<template>
  <div class="text-box">
    <label class="input-label">
      <input
        type="text"
        v-model="state.inputValue"
        placeholder="やりたいことを入力してください"
        @blur="sendValue"
      />
      <!-- {{ state.inputValue }} -->
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    //v-modelなどでリアクティブに処理をするならreactiveまたはrefを使用する
    const state = reactive({
      inputValue: ""
    });

    // method
    const sendValue = () => {
      store.dispatch("addFormTodo", state.inputValue);
    };

    return {
      state,
      sendValue
    };
  }
});
</script>

<style scoped>
.text-box {
  position: relative;
  width: 100%;
  margin-left: 0;
}

.text-box input[type="text"] {
  width: 100%;
  padding: 0.3em;
  /* transition: 0.3s; */
  letter-spacing: 1px;
  /* color: #aaaaaa; */
  border: none;
  border-bottom: 3px solid #1b2538;
  background: transparent;
}

.input-label input[type="text"]:focus {
  border-bottom: 2px solid #da3c41;
  outline: none;
}
</style>
