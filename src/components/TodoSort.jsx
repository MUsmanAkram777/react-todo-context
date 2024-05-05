import React,{useContext} from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoSort() {
  const { todos, setSortBy } = useContext(TodoContext);
  if(todos.length == 0 ) return
  return (
    <div className="flex justify-between max-w-[500px] mx-auto py-4">
      <h1 className="font-bold text-white">Sort By:</h1>
      <select name="sort_todos" onChange={(e) => setSortBy(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default TodoSort;
