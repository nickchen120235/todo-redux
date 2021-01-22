import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoState } from './type'

export const initial: TodoState = {
  ID: [],
  todo: {}
}

let nextTodoID = 0

const todoSlice = createSlice({
  name: 'todo',
  initialState: initial,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const id = ++nextTodoID
      state.ID.push(id)
      state.todo = {
        ...state.todo,
        [id]: {
          content: action.payload,
          completed: false
        }
      }
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.todo[id].completed = !state.todo[id].completed
    }
  }
})

export const { addTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer