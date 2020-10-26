<template>
  <div class="main-frame-wrapper">
    <!-- このコンポーネントの枠内にユーザーが入力した内容を表示させる -->
    <div v-for="(item, index) in state.tabs" :key="index" class="tab-buttons">
      <span class="content" @click="selectTabs(item)">
        <div :class="[item.isActive ? 'active-tab' : '']">
          {{ item.status }}
        </div>
      </span>
    </div>
    <div v-for="(todo, index) in todos" :key="index" class="todo">
      <div
        class="todo-container"
        v-if="
          todo.status === false &&
            (state.tabs[0].isActive === true || state.tabs[1].isActive === true)
        "
      >
        <CardObject :todo="todo" />
      </div>
      <div
        class="todo-container"
        v-else-if="todo.status === true && state.tabs[2].isActive === true"
      >
        <CardObject :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useStore } from "vuex";
import CardObject from "@/components/part/CardObject.vue";

export default defineComponent({
  components: {
    CardObject
  },
  setup() {
    const store = useStore();
    const state = reactive({
      tabs: [
        { status: "未達成", isActive: true },
        { status: "進行中", isActive: false },
        { status: "達成済み", isActive: false }
      ]
    });

    // computed
    interface Todo {
      id: number;
      todo: string;
      date: string;
      status: boolean;
    }

    const todos = computed(() => {
      const todo: Todo[] = store.getters.getTodoList;

      function returnTodo(todo: Todo[]): void | Todo[] {
        if (todo[0].id === 0) {
          return;
        } else {
          return todo;
        }
      }

      return returnTodo(todo);
    });

    // methods
    interface Item {
      status: string;
      isActive: boolean;
    }

    function selectTabs(item: Item): void {
      state.tabs.forEach(val => {
        if (val.status.includes(item.status)) {
          val.isActive = true;
        } else {
          val.isActive = false;
        }
      });
    }

    return { state, selectTabs, todos };
  }
});
</script>

<style scoped>
.main-frame-wrapper {
  /* width: 70%; */
  height: 500px;
  border: 2px solid;
  margin: 50px auto 0 auto;
  position: relative;
  overflow: scroll;
}

.tab-buttons span {
  cursor: pointer;
  background: #eee;
  border-bottom: 2px solid #ddd;
  display: block;
  width: 33.3%;
  float: left;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.active-tab {
  border-bottom: 2px solid #495057;
  /* transition: all 0.3s; */
}

.todo-container {
  position: relative;
  margin-top: 50px;
  display: flex;
  margin-left: 30px;
}

.delete-checkbox {
  border-right: solid 2px;
}

.todo {
  width: 20%;
  display: inline-block;
}
</style>
