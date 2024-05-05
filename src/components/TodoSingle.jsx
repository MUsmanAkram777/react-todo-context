import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoSingle({ todo }) {
  const {setTodos,editTodo, setEditTodo,sortBy } = useContext(TodoContext);


  const markCompleteUncomplete = (id) =>{
    setTodos(prev => {
        return prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    status: !todo.status
                };
            }
            return todo;
        });
    })
  }

  const deleteTodo = (id) =>{
    setTodos(prev => prev.filter( prevTodo => prevTodo.id != id))
  }

  let classes = 'flex justify-between rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-3 px-3 mb-3'
  if (sortBy == 'completed'){
    if(todo.status != true){
        classes = 'hidden'
    }
  }else if(sortBy == 'uncompleted'){
    if(todo.status == true){
        classes = 'hidden'
    }
  }

  return (
    <div className={editTodo.id == todo.id ? "hidden" : classes}>
      <label className={todo.status ? 'flex gap-5 text-white line-through': 'flex gap-5 text-white'} htmlFor={"todo_" + todo.id}>
        <input
          type="checkbox"
          name="todos[]"
          id={"todo_" + todo.id}
          value={todo.todo}
          checked={todo.status}
          onChange={()=>markCompleteUncomplete(todo.id)}
        />
        <span>{todo.todo}</span>
      </label>
      <div className="flex gap-4">
        <button className=" cursor-pointer" onClick={()=>setEditTodo(todo)}>✏️</button>
        <button className=" cursor-pointer" onClick={()=>deleteTodo(todo.id)}>🗑️</button>
      </div>
    </div>
  );
}

export default TodoSingle;
