import React, { useContext } from 'react'
import { TodoInput,TodoList, TodoSort } from './components'
import TodoProvider from './contexts/TodoContext'

function App() {

  
  return (
    <TodoProvider>
      <div className=' bg-black h-screen pt-12'>
        <TodoInput/>
        <TodoSort/>
        <TodoList/>
      </div>
    </TodoProvider>
  )
}

export default App