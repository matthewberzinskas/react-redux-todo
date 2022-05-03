import { createSlice } from "@reduxjs/toolkit";
import Todos from "../components/Todos";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",

  initialState,

  reducers: {
    // Reducer actions
    addTodos: (state, action) => {
      // Pushes the payload to the state and returns.
      state.push(action.payload);
      return state;
    },

    removeTodos: (state, action) => {
      // Removes a given item from the state by filtering off
      // all but the requested id.
      return state.filter((todo) => todo.id !== action.payload);
    },

    updateTodos: (state, action) => {
      // Checks for a matching id and then modifies the data
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            data: action.payload.data,
          };
        }
        return todo;
      });
    },

    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
