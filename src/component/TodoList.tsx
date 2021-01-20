import React from 'react'
import { useSelector } from 'react-redux'
import { getTodos } from '../redux/selector'
import Todo from './Todo'

const TodoList = () => {
  const todos = useSelector(getTodos)

  return (
    <ul>
      {todos.length ? todos.map((todo) => <Todo key={todo.id!} todoID={todo.id!} />) : 'NO TODOs'}
    </ul>
  )
}

export default TodoList