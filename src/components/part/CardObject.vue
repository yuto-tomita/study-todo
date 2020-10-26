<template>
  <div class="card-wrapper">
    <article class="card">
      <div class="card-header">
        {{ todo.id }}
        <div class="checkbox">
          <input
            type="checkbox"
            :id="'is-status' + todo.id"
            :value="todo.id"
            v-model="state.status"
            @change="changeStatus(todo)"
          />
          <label :for="'is-status' + todo.id" v-if="!todo.status">
            タスク未達成...
          </label>
          <label :for="'is-status' + todo.id" v-else>タスク達成!</label>
          {{ state.status }}
        </div>
      </div>
      <div class="card-body">{{ todo.todo }}</div>
      <div class="card-footer">{{ todo.date }} まで</div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";

type Props = {
  todo: { id: number; todo: string; date: string; status: boolean };
};
export default defineComponent({
  props: {
    todo: {
      type: Object,
      require: true
    }
  },
  setup() {
    const store = useStore();
    // data
    type State = {
      status: number[];
    };
    const state: State = reactive({
      status: []
    });

    interface Obj {
      id: number;
      todo: string;
      date: string;
      status: boolean;
    }

    // methods
    function changeStatus(value: Obj): void {
      console.log(value.id);
      // Todo: 番号でサーチしてstatusをtrueにする
      const todoId: number = value.id;
      store.dispatch("changeStatus", todoId);
      state.status.push(todoId);
    }

    return { state, changeStatus };
  }
});
</script>

<style scoped>
.card-wrapper {
  width: 320px;
  /* margin: 3rem auto; */
}

.card {
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  color: #212121;
  text-decoration: none;
}

.card-header {
  display: flex;
  flex-wrap: wrap;
  margin-left: 1rem;
  border-bottom: 1px solid #ddd;
  /* justify-content: center; */
}

.card-title {
  padding: 1rem 1rem 0;
  font-size: 1.25rem;
  order: 1;
}

.card-body {
  padding: 1rem;
}

.card-footer {
  padding: 1rem;
  border-top: 1px solid #ddd;
}

.checkbox {
  margin: 0 auto;
}

.checkbox input {
  display: none;
}

.checkbox label {
  position: relative;
  display: block;
  cursor: pointer;
  padding-right: 36px;
}

.checkbox input[type="checkbox"] {
  position: absolute;
  visibility: hidden !important;
}

.checkbox input[type="checkbox"] + label::before,
.checkbox input[type="checkbox"] + label::after {
  position: absolute;
  top: 50%;
  /* left: 120px; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: -7.5px;
  content: "";
}

.checkbox input[type="checkbox"] + label:before {
  right: 0;
  width: 30px;
  height: 15px;
  border: 1px solid #e4e3e1;
  border-radius: 15px;
  background: #ffffff;
}
.checkbox input[type="checkbox"] + label:after {
  right: 15px;
  width: 15px;
  height: 15px;
  -webkit-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
  border-radius: 50%;
  background: #bdbdbd;
}
.checkbox input[type="checkbox"]:checked + label:after {
  right: 0;
  background: #da3c41;
}
</style>
