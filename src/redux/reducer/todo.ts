import { ADD_TODO, TOGGLE_TODO, TodoAction, TodoState } from '../type'

const initial: TodoState = {
  ID: [],
  todo: {}
}

function reducer(state: TodoState = initial, action: TodoAction): TodoState {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload
      return {
        ...state,
        ID: [...state.ID, id],
        todo: {
          ...state.todo,
          [id]: {
            content,
            completed: false
          }
        }
      }
    }
    case TOGGLE_TODO: {
      const { id } = action.payload
      return {
        ...state,
        todo: {
          ...state.todo,
          [id]: {
            ...state.todo[id],
            completed: !state.todo[id].completed
          }
        }
      }
    }
    default: return state
  }
}

export default reducer