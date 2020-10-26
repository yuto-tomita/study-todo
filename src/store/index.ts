import { ActionTree, createStore, GetterTree, MutationTree } from "vuex";

export type State = {
  todo: { id: number; todo: string; date: string; status: boolean }[];
  formTodo: string;
  formDate: string;
};

// stateにはState型の値しか渡せない
const state: State = {
  todo: [
    {
      id: 0,
      todo: "",
      date: "",
      status: false
    }
  ],
  formTodo: "",
  formDate: ""
};

export const getters: GetterTree<State, State> = {
  getFormTodo: (state: State) => {
    return state.formTodo;
  },
  getFormDate: (state: State) => {
    return state.formDate;
  },
  getTodoList: (state: State) => {
    return state.todo;
  }
};

export const actions: ActionTree<State, State> = {
  addFormTodo: ({ commit }, formTodo: string) => {
    commit("saveFormTodo", formTodo);
  },
  addDateTodo: ({ commit }, formDate: string) => {
    commit("saveformDate", formDate);
  },
  addTodo: ({ commit }, todo: object) => {
    commit("saveTodo", todo);
  },
  changeStatus: ({ commit }, todoId: number) => {
    commit("saveChangeStatus", todoId);
  }
};

const mutations: MutationTree<State> = {
  saveFormTodo(state: State, formTodo: string) {
    state.formTodo = formTodo;
  },
  saveformDate(state: State, formDate: string) {
    state.formDate = formDate;
  },
  saveTodo(state: State, todo: { todo: string; date: string }) {
    console.log(todo.date);
    const lastTodoIndex: number = state.todo.length + 1;

    if (state.todo[0].id === 0) {
      (state.todo[0].id = 1),
        (state.todo[0].todo = todo.todo),
        (state.todo[0].date = todo.date);
    } else {
      state.todo.push({
        id: lastTodoIndex,
        todo: todo.todo,
        date: todo.date,
        status: false
      });
    }
  },
  saveChangeStatus(state: State, todoId: number) {
    state.todo.forEach(val => {
      if (val.id === todoId && val.status === true) {
        val.status = false;
      } else if (val.id === todoId && val.status === false) {
        val.status = true;
      }
    });
    console.log(state.todo);
  }
};

export const store = createStore({
  state,
  mutations,
  actions,
  getters
  // modules
});
