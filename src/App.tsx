import React from 'react'
import './App.css'
import { InputField } from './components/InputField.tsx'

const App: React.FC = () =>  {
  return  <div className='App'>
    <span className='heading'>TodoList</span>
    <InputField />
  </div>
}

export default App