import React from "react";
import {
  ImgTodoItemDeleteButton,
  ImgTodoItemEditButton,
} from "../../../assets/images";
import { Button } from "../../Atom";

interface TodoItemProps {
  todo: string;
  priority: "Very High" | "High" | "Medium" | "Low" | "Very Low";
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, priority } = props;
  let color;
  switch (priority) {
    case "Very High":
      color = "bg-red";
      break;
    case "High":
      color = "bg-yellow";
      break;
    case "Medium":
      color = "bg-green";
      break;
    case "Low":
      color = "bg-darkBlue";
      break;
    case "Very Low":
      color = "bg-purple";
      break;
    default:
      color = "bg-red";
      break;
  }
  return (
    <div
      data-cy={`todo-item-0`}
      className="p-7 bg-white rounded-lg flex justify-between items-center shadow-md mb-2.5"
    >
      <div className="flex items-center">
        <input type="checkbox" name="checkbox" className="w-5 h-5" />
        <div className={`w-2.5 h-2.5 ml-5 rounded-full ${color}`} />
        <p className="font-poppins-medium text-lg text-black ml-5">
          Telur Ayam
        </p>
        <Button
          dataCy="todo-item-edit-button"
          isWihoutStyle
          onClick={() => console.log("edit todo")}
          className="ml-5"
        >
          <img src={ImgTodoItemEditButton} width={20} height={20} />
        </Button>
      </div>
      <Button
        dataCy="todo-item-delete-button"
        isWihoutStyle
        onClick={() => console.log("delete todo")}
      >
        <img src={ImgTodoItemDeleteButton} width={24} height={24} />
      </Button>
    </div>
  );
}
