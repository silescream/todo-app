import { createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos(state, action) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      });
    },

    toggleComplete(state, action) {
      const toggledTodo: any = state.list.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo?.completed;
    },
  },
});

export const { addTodos, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
