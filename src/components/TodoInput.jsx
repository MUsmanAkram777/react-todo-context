import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoInput() {

  const { setTodos,editTodo, setEditTodo } = useContext(TodoContext);
  const [inputTodo, setInputTodp] = useState('');

  useEffect(() => {
    setInputTodp(editTodo.todo)
  
  }, [editTodo])
  

  const handleAddTodo = (e) =>{
    e.preventDefault()

    if(editTodo?.id){
        setTodos(prev=>{
            return prev.map( prevTodo => {
                if(prevTodo.id == editTodo.id){
                    return{
                        ...prevTodo,
                        todo:inputTodo
                    }
                }

                return prevTodo
            })
        })

        setEditTodo({})
    }else{
        setTodos(prev=>{
            return[
                ...prev,
                {
                    id: Date.now(),
                    todo: inputTodo,
                    status: false
                }
            ]
        })
    }
    setInputTodp('')
  }

  return (
    <form className="flex gap-5 max-w-[500px] mx-auto" onSubmit={(e)=>handleAddTodo(e)}>
      <input
        type="text"
        id="todo"
        name="todo"
        className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
        placeholder="Todo"
        value={inputTodo}
        onChange={(e) => setInputTodp(e.target.value)}
      />

      <button type="submit" className=" uppercase mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
        {editTodo?.id ? 'update': 'add'}
      </button>
    </form>
  );
}

export default TodoInput;
