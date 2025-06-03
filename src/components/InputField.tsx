import React from 'react'
import './styles.css'

export const InputField = () => {
  return <form className='input'>
    <input type='input' placeholder='Добавьте новую задачу' className='input-box'/>
    <button className='input-submit' type='submit'>Добавить</button>
  </form>
}
