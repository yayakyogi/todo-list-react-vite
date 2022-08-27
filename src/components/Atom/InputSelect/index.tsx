import React, { ReactNode } from "react";
import {
  ImgTablerChevronDown,
  ImgTablerChevronUp,
} from "../../../assets/images";

interface InputSelectProps {
  id: string;
  label: string;
  children: ReactNode;
  value: string;
  isClicked: boolean;
  onClick(): Function | void;
}

export default function InputSelect(props: InputSelectProps) {
  const { id, label, children, value, onClick, isClicked } = props;
  return (
    <div data-cy="modal-add-priority-dropdown">
      <label
        data-cy="modal-add-priority-title"
        htmlFor={id}
        className="block mb-2 text-xs font-poppins-semibold text-black"
      >
        {label}
      </label>
      <button
        onClick={onClick}
        id={id}
        data-cy="modal-add-name-input"
        className="inline w-1/4 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-400 focus:ring-2 outline-none transition-all ease-in-out duration-300 p-3 placeholder:text-base placeholder:font-poppins-medium"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-poppins-regular text-base text-black">{value}</h1>
          <img
            src={isClicked ? ImgTablerChevronUp : ImgTablerChevronDown}
            width={24}
            height={24}
          />
        </div>
      </button>
      <div className="relative w-1/4">{children}</div>
    </div>
  );
}
