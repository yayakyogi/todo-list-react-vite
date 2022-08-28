import React from "react";
import { ImgTablerCheck } from "../../../assets/images";
import { Button } from "../../Atom";

interface SortItemProps {
  dataCy: string;
  sortTitle: string;
  onClick(): Function | void;
  index: number;
  img: string;
}

export default function SortItem(props: SortItemProps) {
  const { dataCy, sortTitle, index, img, onClick } = props;
  return (
    <Button
      dataCy={dataCy}
      isWihoutStyle
      className="w-full py-4 px-5 flex justify-between items-center bg-white border-b border-grey border-opacity-20"
      onClick={onClick}
    >
      <div className="flex items-center">
        <img data-cy="-" src={img} width={18} height={18} className="mr-4" />
        <p className="font-poppins-regular text-base text-black">{sortTitle}</p>
      </div>
      <img data-cy="-" src={ImgTablerCheck} width={18} height={18} />
    </Button>
  );
}
