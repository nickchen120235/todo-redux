export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export interface TodoAction {
  type: typeof ADD_TODO | typeof TOGGLE_TODO
  payload: {
    id: number,
    content?: string
  }
}

export interface TodoState {
  ID: number[]
  todo: {
    [id: number]: {
      content?: string,
      completed: boolean
    }
  }
}

export interface TodoType {
  id: number
  content?: string
  completed: boolean
}