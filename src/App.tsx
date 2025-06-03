import React, { useState } from 'react'
import './App.css'
import { InputField } from './components/InputField.tsx'
import type { Todo } from './model.ts'
import TodoList from './components/TodoList.tsx'

const App: React.FC = () =>  {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (todo) {
      setTodos([...todos,{id: Date.now(), todo: todo, isDone: false}])
      setTodo('')
    }
  };
  
  return  <div className='App'>
    <span className='heading'>TodoList</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos}/>
  </div>
}

export default App