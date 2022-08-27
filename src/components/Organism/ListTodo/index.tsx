import React from "react";
import { TodoItem } from "../../Molecul";

export default function ListTodo() {
  return (
    <div className="mt-12">
      <TodoItem priority="High" todo="Desain" />
      <TodoItem priority="Low" todo="Desain" />
      <TodoItem priority="Medium" todo="Desain" />
    </div>
  );
}
