import React from 'react'
import './styles.css'

interface Props{
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

export const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return <form className='input' onSubmit={handleAdd}>
    <input type='input'
      value={todo}
      onChange={
        (e) => setTodo(e.target.value)
      } 
      placeholder='Добавьте новую задачу' 
      className='input-box'/>
    <button className='input-submit' type='submit'>Добавить</button>
  </form>
}
