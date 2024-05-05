import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState( JSON.parse(localStorage.getItem('todosContext')) || [] );
  const [editTodo, setEditTodo] = useState({});
  const [sortBy,setSortBy] = useState('all')


  useEffect(() => {
    localStorage.setItem('todosContext',JSON.stringify(todos))
  }, [todos])
  
  useEffect(()=>{

  },[sortBy])

  return (
    <TodoContext.Provider value={{ todos, setTodos,editTodo, setEditTodo,sortBy,setSortBy }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
