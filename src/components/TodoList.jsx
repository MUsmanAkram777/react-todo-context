import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoSingle } from "./";

function TodoList() {
  const { todos } = useContext(TodoContext);

  if (todos.length <= 0 || !todos)
    return (
      <div className="flex justify-center text-white text-center pt-12 font-bold">
        Nothing to show &#128542;
      </div>
    );

  return (
    <div className="max-w-[500px] mx-auto">
      {todos.map((todo) => (
        <TodoSingle key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
