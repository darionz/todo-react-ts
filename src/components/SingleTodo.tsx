import React from 'react'
import type { Todo } from '../model'
import { AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'

  interface Props{
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  }

  const SingleTodo = ({ todo, todos, setTodos }: Props)  => {

    const handleDone = (id:number) => {setTodos(todos.map((todo)=>todo.id===id ? {...todo, isDone: !todo.isDone} : todo))}
    const handleDelete = (id:number) => {setTodos(todos.filter((todo)=>todo.id!==id))}

    return <form className='todos-single'>
        {
          todo.isDone ? (
            <s className='todos-single-text'>{todo.todo}</s>
          ) : (
            <span className='todos-single-text'>{todo.todo}</span>
          )
        }
      <div>
        <button role='delete-button' className='icon' onClick={() => handleDelete(todo.id)}><AiFillDelete/></button>
        <button role='done-button' className='icon' onClick={() => handleDone(todo.id)}><MdDone/></button>
      </div>
    </form>
  }

  export default SingleTodo