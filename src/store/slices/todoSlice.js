import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    todoText: ""
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
    reducers: {
        handleInput: (state) => {
            state.todos = [...state.todos, state.todoText]
            state.todoText = ""
        },
        handleInputText: (state, action) => {
            state.todoText = action.payload
        }
  },
})

// Action creators are generated for each case reducer function
export const { handleInput, handleInputText } = todoSlice.actions

export default todoSlice.reducer