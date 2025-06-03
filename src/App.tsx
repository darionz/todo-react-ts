import React, { useState } from 'react'
import './App.css'
import { InputField } from './components/InputField.tsx'
import type { Todo } from './model.ts'
import type { Filter } from './model.ts'
import TodoList from './components/TodoList.tsx'

const App: React.FC = () =>  {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (todo) {
      setTodos([...todos,{id: Date.now(), todo: todo, isDone: false}])
      setTodo('')
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (activeFilter === 'active') return !todo.isDone;
    if (activeFilter === 'completed') return todo.isDone;
    return true;
  });

  const completedCount = todos.filter(todo => todo.isDone).length;
  const activeCount = todos.length - completedCount;

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.isDone));
  };
  
  return  <div className='App'>
    <span className='heading'>TodoList</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

    <div className="filters">
      <button 
        className={activeFilter === 'all' ? 'active' : ''}
        onClick={() => setActiveFilter('all')}
      >
        Все ({todos.length})
      </button>
      <button 
        className={activeFilter === 'active' ? 'active' : ''}
        onClick={() => setActiveFilter('active')}
      >
        Активные ({activeCount})
      </button>
      <button 
        className={activeFilter === 'completed' ? 'active' : ''}
        onClick={() => setActiveFilter('completed')}
      >
        Завершенные ({completedCount})
      </button>
    </div>

    <TodoList todos={filteredTodos} setTodos={setTodos}/>

    {completedCount > 0 && (
      <div className="completed-footer">
        <span>Выполнено: {completedCount}</span>
        <button onClick={clearCompleted}>Удалить выполненные</button>
      </div>
    )}
  </div>
}

export default App