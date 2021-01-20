import React from 'react'
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'

const App = () => {
  return (<>
    <h1>TODO</h1>
    <AddTodo />
    <TodoList />
  </>)
}

export default App