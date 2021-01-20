import { Store } from './store'
import {TodoType} from './type'

export const getTodoState = (store: Store) => store.todo

export const getTodoList = (store: Store) => getTodoState(store) ? getTodoState(store).ID : []

// export const getTodoByID = (store: Store, id: number) => getTodoState(store) ? { id, ...getTodoState(store).todo[id] } : {}

export function getTodoByID(store: Store, id: number): Partial<TodoType> {
  return getTodoState(store) ? { id: id, ...getTodoState(store).todo[id] } : {}
}

export const getTodos = (store: Store) => getTodoList(store).map(id => getTodoByID(store, id))