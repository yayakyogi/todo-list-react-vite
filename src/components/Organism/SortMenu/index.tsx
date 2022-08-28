import React from "react";
import {
  ImgSortAZ,
  ImgSortNew,
  ImgSortOld,
  ImgSortZA,
} from "../../../assets/images";
import SortItem from "../../Molecul/SortItem";

interface SortMenuProps {
  onShortByOld(): void;
  onShortByNew(): void;
  onShortByAZ(): void;
  onShortByZA(): void;
  onShortByNotYet(): void;
}

export default function SortMenu(props: SortMenuProps) {
  const {
    onShortByOld,
    onShortByNew,
    onShortByAZ,
    onShortByZA,
    onShortByNotYet,
  } = props;
  return (
    <div className="absolute top-16 left-0 w-[235px] shadow-lg border-t border-r border-l border-grey border-opacity-20 rounded-lg overflow-hidden">
      <SortItem
        dataCy="sort-lates"
        index={0}
        img={ImgSortNew}
        sortTitle="Terbaru"
        onClick={onShortByNew}
      />
      <SortItem
        dataCy="sort-oldest"
        index={1}
        img={ImgSortOld}
        sortTitle="Terlama"
        onClick={onShortByOld}
      />
      <SortItem
        dataCy="sort-az"
        index={2}
        img={ImgSortAZ}
        sortTitle="A-Z"
        onClick={onShortByAZ}
      />
      <SortItem
        dataCy="sort-za"
        index={3}
        img={ImgSortZA}
        sortTitle="Z-A"
        onClick={onShortByZA}
      />
      <SortItem
        dataCy="sort-unfinished"
        index={4}
        img={ImgSortZA}
        sortTitle="Belum Selesai"
        onClick={onShortByNotYet}
      />
    </div>
  );
}
