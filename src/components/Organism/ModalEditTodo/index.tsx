import React, { ChangeEventHandler, useState } from "react";
import { ImgModalAddCloseButton } from "../../../assets/images";
import { Button, InputSelect, InputText, Priority } from "../../Atom";
import ModalTemplate from "../../Template/ModalTemplate";

interface ModalEditTodoProps {
  onClose(): void;
  onSubmit(): void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  state: string;
}

export default function ModalEditTodo(props: ModalEditTodoProps) {
  // props
  const { onClose, onSubmit, onChange, state } = props;

  // state
  const [isFormSelect, setIsFormSelect] = useState<boolean>(false);
  const [priority, setPriority] = useState<string>("Pilih priority");

  // function untuk menghandle form select ketika diklik
  const onFormSelectClicked = () => {
    setIsFormSelect(!isFormSelect);
  };
  // funciton untuk memilih priority
  const onSelectPriority = (priority: string) => {
    setPriority(priority);
    setIsFormSelect(false);
  };

  return (
    <ModalTemplate dataCy="modal-add2">
      <div className="w-[830px] bg-white rounded-xl">
        {/* header */}
        <div className="flex justify-between items-center py-7 px-10 border-b border-b-slate-300">
          <h1
            data-cy="modal-add-title"
            className="font-poppins-semibold text-lg text-black"
          >
            Edit Item
          </h1>
          <Button
            dataCy="modal-add-close-button"
            isWihoutStyle
            onClick={onClose}
          >
            <img src={ImgModalAddCloseButton} width={24} height={24} />
          </Button>
        </div>
        {/* form */}
        <div className="py-9 px-7 border-b-2 border-b-gray">
          <InputText
            id="item"
            value={state}
            label="nama list item"
            onChange={onChange}
          />
          <InputSelect
            id="priority"
            label="Priority"
            value={priority}
            isClicked={isFormSelect}
            onClick={onFormSelectClicked}
          >
            {isFormSelect && (
              <div className="absolute top-0 left-0 w-full ">
                <Priority
                  dataCy="modal-add-priority-very-high"
                  index={0}
                  onClick={() => onSelectPriority("very-high")}
                  priority="Very High"
                  color="bg-red"
                  isSelected={priority == "Very High"}
                />
                <Priority
                  dataCy="modal-add-priority-high"
                  index={1}
                  onClick={() => onSelectPriority("high")}
                  priority="High"
                  color="bg-yellow"
                  isSelected={priority == "High"}
                />
                <Priority
                  dataCy="modal-add-priority-medium"
                  index={2}
                  onClick={() => onSelectPriority("medium")}
                  priority="Medium"
                  color="bg-green"
                  isSelected={priority == "Medium"}
                />
                <Priority
                  dataCy="modal-add-priority-low"
                  index={3}
                  onClick={() => onSelectPriority("low")}
                  priority="Low"
                  color="bg-darkBlue"
                  isSelected={priority == "Low"}
                />
                <Priority
                  dataCy="modal-add-priority-very-low"
                  index={4}
                  onClick={() => onSelectPriority("very-low")}
                  priority="Very Low"
                  color="bg-purple"
                  isSelected={priority == "Very Low"}
                />
              </div>
            )}
          </InputSelect>
        </div>
        {/* button */}
        <div className="py-3 px-10 flex justify-end">
          <Button dataCy="modal-add-save-button" onClick={onSubmit}>
            <h1 className="font-poppins-semibold text-lg text-white">Simpan</h1>
          </Button>
        </div>
      </div>
    </ModalTemplate>
  );
}
