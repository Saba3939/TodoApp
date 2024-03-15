import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleTodo }) {
  return todos.map((todo) => (
    <Todo todo={todo} key={todo} toggleTodo={toggleTodo}></Todo>
  ));
}

export default TodoList;
