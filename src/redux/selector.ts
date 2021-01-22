import { createSelector } from '@reduxjs/toolkit'
import { Store } from './store'

export const getTodoState = (store: Store) => store.todo

export const getTodoList = createSelector(getTodoState, state => state.ID)

export const getTodoByID = (id: number) => createSelector(getTodoState, state => ({
  id,
  ...state.todo[id]
}))

export const getTodos = createSelector(getTodoState, getTodoList, (state, list) => list.map(id => ({
  id,
  ...state.todo[id]
})))