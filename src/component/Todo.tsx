import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo } from '../redux/action'
import { getTodoByID } from '../redux/selector'
import { Store } from '../redux/store'

interface TodoPropType {
  todoID: number
}

const Todo = (props: TodoPropType) => {
  const dispatch = useDispatch()
  const wrapper = (state: Store) => getTodoByID(state, props.todoID)
  const todo = useSelector(wrapper)

  return (
    <li onClick={() => dispatch(toggleTodo(props.todoID))}>
      {todo.completed ? 'DONE: ' : 'NO: '}
      <span>{todo.content}</span>
    </li>
  )
}

export default Todo