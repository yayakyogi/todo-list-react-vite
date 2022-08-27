import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { ImgModalAddCloseButton } from "../../../assets/images";
import { Button, InputSelect, InputText, Priority } from "../../Atom";

export default function ModalAddTodo() {
  const [isFormSelect, setIsFormSelect] = useState<boolean>(false);
  const [item, setItem] = useState<string>();
  const [priority, setPriority] = useState<string>("Pilih priority");
  // function untuk menghandle perubahan pada textinput
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setItem(e.target.value);
  };
  // function untuk menghandle form select ketika diklik
  const onFormSelectClicked = () => {
    setIsFormSelect(!isFormSelect);
  };
  // funciton untuk memilih priority
  const onSelectPriority = (priority: string) => {
    setPriority(priority);
    setIsFormSelect(false);
  };
  // funtion untuk menghandle ketika form disubmit
  const onSubmit = () => {
    console.log("Item : ", item);
    console.log("priority : ", priority);
  };
  return (
    <div
      data-cy="modal-add"
      className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="w-[830px] bg-white rounded-xl">
        {/* header */}
        <div className="flex justify-between items-center py-7 px-10 border-b border-b-slate-300">
          <h1
            data-cy="modal-add-title"
            className="font-poppins-semibold text-lg text-black"
          >
            Tambah List Item
          </h1>
          <Button
            dataCy="modal-add-close-button"
            isWihoutStyle
            onClick={() => console.log("close modal")}
          >
            <img src={ImgModalAddCloseButton} width={24} height={24} />
          </Button>
        </div>
        {/* form */}
        <div className="py-9 px-7 border-b-2 border-b-gray">
          <InputText id="item" label="nama list item" onChange={onChange} />
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
                  onClick={() => onSelectPriority("Very High")}
                  priority="Very Hight"
                  color="bg-red"
                  isSelected={priority == "Very High"}
                />
                <Priority
                  dataCy="modal-add-priority-high"
                  index={1}
                  onClick={() => onSelectPriority("High")}
                  priority="High"
                  color="bg-yellow"
                  isSelected={priority == "High"}
                />
                <Priority
                  dataCy="modal-add-priority-medium"
                  index={2}
                  onClick={() => onSelectPriority("Medium")}
                  priority="Medium"
                  color="bg-green"
                  isSelected={priority == "Medium"}
                />
                <Priority
                  dataCy="modal-add-priority-low"
                  index={3}
                  onClick={() => onSelectPriority("Low")}
                  priority="Low"
                  color="bg-darkBlue"
                  isSelected={priority == "Low"}
                />
                <Priority
                  dataCy="modal-add-priority-very-low"
                  index={4}
                  onClick={() => onSelectPriority("Very Low")}
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
    </div>
  );
}
