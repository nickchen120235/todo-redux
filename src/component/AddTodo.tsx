import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/action'

const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const dispatch = useDispatch()

  return (
    <div>
      <input onChange={e => setInput(e.target.value)} value={input} />
      <button onClick={() => dispatch(addTodo(input))}>ADD</button>
    </div>
  )
}

export default AddTodo