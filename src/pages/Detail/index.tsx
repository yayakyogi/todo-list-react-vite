import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  EmptyImage,
  GlobalTemplate,
  HeaderMenu,
  ModalAddTodo,
  ModalDelete,
  ModalEditTodo,
  TodoItem,
} from "../../components";
import { Api } from "../../utils/api";

interface TodoItems {
  activity_group_id: number;
  id: number;
  is_active: number;
  priority: string;
  title: string;
}

export default function Detail() {
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [shwoModalDelete, setShowModalDelete] = useState<boolean>(false);
  const { id } = useParams();

  const [data, setData] = useState<TodoItems>();
  const [todoItem, setTodoItem] = useState<Array<TodoItems>>();
  const [title, setTitle] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isShortByNew, setIsShortByNew] = useState<boolean>(false);
  const [isShortByOld, setIsShortByOld] = useState<boolean>(false);
  const [isShortByAZ, setIsShortByAZ] = useState<boolean>(false);
  const [isShortByZA, setIsShortByZA] = useState<boolean>(false);
  const [isShortNotYet, setIsShortNotYet] = useState<boolean>(false);

  const getOneActivity = async () => {
    const res = await axios.get(`${Api.host}/activity-groups/${id}`);
    console.log(res.data);

    if (res.status === 200) {
      if (isShortByNew) {
        const data = res.data.todo_items.sort((a, b) => b.id - a.id);
        setTodoItem(data);
      } else if (isShortByOld) {
        const data = res.data.todo_items.sort((a, b) => a.id - b.id);
        setTodoItem(data);
      } else if (isShortByAZ) {
        const data = res.data.todo_items.sort((a, b) => {
          const nameA = a.title.toUpperCase();
          const nameB = b.title.toUpperCase();
          if (nameA > nameB) {
            return 1;
          }
          if (nameA < nameB) {
            return -1;
          }
          return 0;
        });
        setTodoItem(data);
      } else if (isShortByZA) {
        const data = res.data.todo_items.sort((a, b) => {
          const nameA = a.title.toUpperCase();
          const nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
        setTodoItem(data);
      } else if (isShortNotYet) {
        const data = res.data.todo_items.sort((a, b) => {
          const priority0 = a.is_active;
          const priority1 = b.is_active;
          if (priority0 > priority1) {
            return 1;
          }
          if (priority0 < priority1) {
            return -1;
          }
          return 0;
        });
        setTodoItem(data);
      } else {
        setTodoItem(res.data.todo_items);
      }
      setIsLoading(false);
      setData(res.data);
      setTitle(res.data.title);
    }
  };

  // function untuk menghandle perubahan pada textinput
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
    setTodo({ title: e.target.value, id: todo.id });
  };

  // funtion untuk menghandle ketika form disubmit
  const onSubmit = async () => {
    setIsLoading(true);
    const res = await axios.post(`${Api.host}/todo-items`, {
      activity_group_id: id,
      title: item,
    });
    if (res.status === 201) {
      setIsLoading(false);
      setShowModalAdd(false);
    }
  };

  // function untuk mengedit item
  const onEditTodo = async (id: number, isChecked: number) => {
    setIsLoading(true);
    const res = await axios.patch(`${Api.host}/todo-items/${id}`, {
      is_active: isChecked == 0 ? true : false,
    });
    res;
    if (res.status === 200) {
      setIsLoading(false);
    }
  };

  // show modal update item
  const onShowModalUpdateTodo = (id: number, todo: string) => {
    setShowModalUpdate(true);
    setTodo({
      id: id,
      title: todo,
    });
  };

  // function untuk menghandle update item
  const onUpdateTodo = async () => {
    setIsLoading(true);
    const res = await axios.patch(`${Api.host}/todo-items/${todo.id}`, {
      title: todo.title,
    });
    if (res.status === 200) {
      setIsLoading(false);
      setShowModalUpdate(false);
      res.status;
    }
  };

  // function untuk memunculkan konfirmasi delete item
  const onShowModalDeleteTodo = (id: number, todo: string) => {
    setShowModalDelete(true);
    setTodo({
      id: id,
      title: todo,
    });
  };

  // funciton untuk menghandle hapus todo
  const onDeleteTodo = async () => {
    setIsLoading(true);
    const res = await axios.delete(`${Api.host}/todo-items/${todo.id}`);
    if (res.status === 200) {
      setShowModalDelete(false);
      setIsLoading(false);
    }
  };

  // short by new
  const onShortByNew = () => {
    ("decrement");
    setIsShortByAZ(false);
    setIsShortByAZ(false);
    setIsShortByOld(false);
    setIsShortNotYet(false);
    setIsShortByNew(true);
    setIsLoading(true);
  };

  // short by old
  const onShortByOld = () => {
    ("increment");
    setIsShortByNew(false);
    setIsShortByAZ(false);
    setIsShortByOld(false);
    setIsShortNotYet(false);
    setIsShortByOld(true);
    setIsLoading(true);
  };

  // short by AZ
  const onShortByAZ = () => {
    ("sort by AZ");
    setIsShortByNew(false);
    setIsShortByOld(false);
    setIsShortByZA(false);
    setIsShortNotYet(false);
    setIsShortByAZ(true);
    setIsLoading(true);
  };

  // short by ZA
  const onShortByZA = () => {
    ("sort by ZA");
    setIsShortByNew(false);
    setIsShortByOld(false);
    setIsShortByAZ(false);
    setIsShortNotYet(false);
    setIsShortByZA(true);
    setIsLoading(true);
  };

  // short by not yet
  const onShortByNotYet = () => {
    ("sort by not yet");
    setIsShortByNew(false);
    setIsShortByOld(false);
    setIsShortByAZ(false);
    setIsShortByZA(false);
    setIsShortNotYet(true);
    setIsLoading(true);
  };

  useEffect(() => {
    getOneActivity();
  }, [isLoading]);

  return (
    <GlobalTemplate>
      {isLoading ? (
        <div className="h-96 flex justify-center items-center font-poppins-light text-2xl text-grey">
          Loading...
        </div>
      ) : (
        <>
          <HeaderMenu
            dataCy="todo-title"
            title={title}
            onAddButton={() => setShowModalAdd(true)}
            isPageDetail
            shortByOld={onShortByOld}
            shortByNew={onShortByNew}
            shortByAZ={onShortByAZ}
            shortByZA={onShortByZA}
            shortByNotYet={onShortByNotYet}
          />
          <div className="mt-12">
            {todoItem!.length === 0 ? (
              <EmptyImage dataCy="todo-empty-state" isNewActivityPage />
            ) : (
              todoItem!.map((todo, key) => {
                return (
                  <TodoItem
                    key={key}
                    priority={todo.priority}
                    todo={todo.title}
                    isChecked={todo.is_active == 0}
                    isActive={todo.is_active == 0}
                    onChange={() => onEditTodo(todo.id, todo.is_active)}
                    onEditTodo={() =>
                      onShowModalUpdateTodo(todo.id, todo.title)
                    }
                    onDeleteTodo={() =>
                      onShowModalDeleteTodo(todo.id, todo.title)
                    }
                  />
                );
              })
            )}
          </div>
          {showModalAdd && (
            <ModalAddTodo
              onClose={() => setShowModalAdd(false)}
              activityGroupId={data!.id}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          )}
          {showModalUpdate && (
            <ModalEditTodo
              onChange={onChange}
              onClose={() => setShowModalUpdate(false)}
              state={todo.title}
              onSubmit={onUpdateTodo}
            />
          )}
          {shwoModalDelete && (
            <ModalDelete
              isListItem
              activity={todo.title}
              onCancel={() => setShowModalDelete(false)}
              onDelete={onDeleteTodo}
            />
          )}
        </>
      )}
    </GlobalTemplate>
  );
}
