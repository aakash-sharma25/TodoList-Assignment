import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  initialState: {
    todos: [],
  },
  name: "todo",
  reducers: {
    //add to do  reducer
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      localStorage.setItem("allTodos", JSON.stringify(state.todos));
    },
    // remove todo reducer
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      localStorage.setItem("allTodos", JSON.stringify(state.todos));
    },
    // changing the todo status using id
    changeTodoStatus: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      localStorage.setItem("allTodos", JSON.stringify(state.todos));
    },
    restoreTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, removeTodo, changeTodoStatus, restoreTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
