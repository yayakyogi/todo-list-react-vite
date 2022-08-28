import React, { ChangeEventHandler } from "react";
import {
  ImgTodoItemDeleteButton,
  ImgTodoItemEditButton,
} from "../../../assets/images";
import { Button } from "../../Atom";

interface TodoItemProps {
  todo: string;
  priority: string;
  isActive: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onEditTodo(): void;
  onDeleteTodo(): void;
  isChecked: boolean;
}

export default function TodoItem(props: TodoItemProps) {
  const {
    todo,
    priority,
    isActive,
    onChange,
    isChecked,
    onEditTodo,
    onDeleteTodo,
  } = props;
  let color;
  switch (priority) {
    case "very-high":
      color = "bg-red";
      break;
    case "high":
      color = "bg-yellow";
      break;
    case "medium":
      color = "bg-green";
      break;
    case "low":
      color = "bg-darkBlue";
      break;
    case "very-low":
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
        <input
          onChange={onChange}
          type="checkbox"
          name="checkbox"
          className="w-5 h-5"
          checked={isChecked}
        />
        <div className={`w-2.5 h-2.5 ml-5 rounded-full ${color}`} />
        <p
          className={`font-poppins-medium text-lg  ml-5 ${
            isActive ? "line-through text-grey" : "text-black"
          }`}
        >
          {todo}
        </p>
        <Button
          dataCy="todo-item-edit-button"
          isWihoutStyle
          onClick={onEditTodo}
          className="ml-5"
        >
          <img src={ImgTodoItemEditButton} width={20} height={20} />
        </Button>
      </div>
      <Button
        dataCy="todo-item-delete-button"
        isWihoutStyle
        onClick={onDeleteTodo}
      >
        <img src={ImgTodoItemDeleteButton} width={24} height={24} />
      </Button>
    </div>
  );
}
