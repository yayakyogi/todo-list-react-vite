import React from "react";
import { ImgTablerCheck } from "../../../assets/images";

interface PriorityProps {
  priority: string;
  isSelected: boolean;
  index: 0 | 1 | 2 | 3 | 4;
  dataCy: string;
  color: "bg-red" | "bg-yellow" | "bg-green" | "bg-darkBlue" | "bg-purple";
  onClick(): Function | void;
}

export default function Priority(props: PriorityProps) {
  const { priority, color, isSelected, index, dataCy, onClick } = props;
  return (
    <button
      data-cy={dataCy}
      onClick={onClick}
      className={`w-full bg-white px-3 py-2.5 border border-gray flex justify-between items-center ${
        index == 4 && "rounded-br-lg rounded-bl-lg"
      }`}
    >
      <div className="flex items-center">
        <div className={`w-3.5 h-3.5 rounded-full ${color}`} />
        <p className="font-poppins-regular text-base text-grey ml-3">
          {priority}
        </p>
      </div>
      {isSelected && (
        <img
          data-cy="tabler:check"
          src={ImgTablerCheck}
          width={18}
          height={18}
        />
      )}
    </button>
  );
}
