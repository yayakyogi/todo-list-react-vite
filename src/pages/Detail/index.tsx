import React from "react";
import { useParams } from "react-router-dom";
import {
  GlobalTemplate,
  HeaderMenu,
  ListTodo,
  ModalAddTodo,
} from "../../components";

export default function Detail() {
  let params = useParams();
  return (
    <GlobalTemplate>
      <>
        <HeaderMenu
          dataCy="todo-title"
          title="New Activity"
          onAddButton={() => console.log("")}
          isPageDetail
        />
        {/* <EmptyImage isNewActivityPage dataCy="todo-empty-state" /> */}
        {/* <ListTodo /> */}
        <ModalAddTodo />
      </>
    </GlobalTemplate>
  );
}
