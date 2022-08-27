import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import {
  ImgTablerPlus,
  ImgTodoBackButton,
  ImgTodoItemEditButton,
  ImgTodoSortButton,
} from "../../../assets/images";
import { Button } from "../../Atom";

interface HeaderMenuProps {
  title: string;
  onAddButton(): Function | void;
  isPageDetail?: boolean;
  dataCy: string;
}

export default function HeaderMenu(props: HeaderMenuProps) {
  const { title, onAddButton, dataCy, isPageDetail = false } = props;

  const [isEditTitle, setIsEditTitle] = useState<boolean>(false);
  const [stateTitle, setStateTitle] = useState<string>(title);

  const onEditTitle = () => setIsEditTitle(!isEditTitle);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStateTitle(e.target.value);
  };

  return (
    <div className="flex justify-between w-full">
      {/* menu sebelh kiri */}
      <div className="flex items-center justify-start">
        {/* button back */}
        {isPageDetail && (
          <Button isRoute route="/" className="mr-5" dataCy="todo-back-button">
            <img src={ImgTodoBackButton} width={32} height={32} />
          </Button>
        )}
        {isEditTitle ? (
          <div>
            {/* input text untuk mengganti judul */}
            <input
              value={stateTitle}
              onChange={onChange}
              className="h-14 font-poppins-bold text-black text-4xl bg-gray focus:outline-none"
              autoFocus={true}
            />
            <div className="h-0.5 w-full bg-slate-300 mt-1" />
          </div>
        ) : (
          // button untuk mengubah state isEditTitle
          <Button
            dataCy={dataCy}
            isWihoutStyle
            onClick={onEditTitle}
            className="h-12 font-poppins-bold text-black text-4xl bg-gray focus:outline-none hover:cursor-text"
          >
            {stateTitle}
          </Button>
        )}
        {/* button untuk menyimpan perubahan judul */}
        {isPageDetail && (
          <Button
            isWihoutStyle
            className="ml-5"
            onClick={onEditTitle}
            dataCy="todo-title-edit-button"
          >
            <img src={ImgTodoItemEditButton} width={32} height={32} />
          </Button>
        )}
      </div>
      {/* menu sebelah kanan */}
      <div className="flex items-center">
        {isPageDetail && (
          <Button
            isWihoutStyle
            onClick={() => console.log("OKE")}
            className="mr-3"
          >
            <img src={ImgTodoSortButton} width={54} height={54} />
          </Button>
        )}
        <Button onClick={onAddButton} dataCy="activity-add-button">
          <>
            <img
              data-cy="tabler:plus"
              src={ImgTablerPlus}
              width={24}
              height={24}
            />
            <p className="font-poppins-semibold text-white text-lg ml-2">
              Tambah
            </p>
          </>
        </Button>
      </div>
    </div>
  );
}
