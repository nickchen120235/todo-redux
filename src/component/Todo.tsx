import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo } from '../redux/todo'
import { getTodoByID } from '../redux/selector'

interface TodoPropType {
  todoID: number
}

const Todo = (props: TodoPropType) => {
  const dispatch = useDispatch()
  const todo = useSelector(getTodoByID(props.todoID))

  return (
    <li onClick={() => dispatch(toggleTodo(props.todoID))}>
      {todo.completed ? 'DONE: ' : 'NO: '}
      <span>{todo.content}</span>
    </li>
  )
}

export default Todo