import { createSlice } from "@reduxjs/toolkit";

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
    }
  }
})

export const { addTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;