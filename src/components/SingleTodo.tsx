import React from 'react'
import type { Todo } from '../model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'
import TodoList from './TodoList'

interface Props{
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props)  => {

  const handleDone = (id:number) => {setTodos(todos.map((todo)=>todo.id===id ? {...todo, isDone: !todo.isDone} : todo))}
  return <form className='todos-single'>
      {
        todo.isDone ? (
          <s className='todos-single-text'>{todo.todo}</s>
        ) : (
          <span className='todos-single-text'>{todo.todo}</span>
        )
      }
    <div>
      <span className='icon'><AiFillEdit/></span>
      <span className='icon'><AiFillDelete/></span>
      <span className='icon' onClick={() => handleDone(todo.id)}><MdDone/></span>
    </div>
  </form>
}

export default SingleTodo