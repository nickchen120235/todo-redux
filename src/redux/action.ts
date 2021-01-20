import { ADD_TODO, TOGGLE_TODO, TodoAction } from './type'

let nextTodoID = 0

export function addTodo(content: string): TodoAction {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoID,
      content
    }
  }
}

export function toggleTodo(id: number): TodoAction {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}