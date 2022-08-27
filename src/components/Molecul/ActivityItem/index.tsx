import React from "react";
import { Link } from "react-router-dom";
import { ImgTodoItemDeleteButton } from "../../../assets/images";
import { Button } from "../../Atom";

interface ActivityItemProps {
  title: string;
  index: number;
  onDelete?(): Function | void;
  nextPage?: any;
}

export default function ActivityItem(props: ActivityItemProps) {
  const { title, onDelete, index, nextPage } = props;
  return (
    <div
      data-cy={`activity-item-${index}`}
      className="w-[235px] h-[234px] rounded-2xl bg-white p-6 shadow-lg flex flex-col"
    >
      <Button
        isRoute
        isWihoutStyle
        route={nextPage}
        className="flex-1 hover:cursor-pointer block"
      >
        <h1
          data-cy="activity-item-site"
          className="font-poppins-bold text-lg text-black hover:cursor-pointer"
        >
          {title.length > 1 ? title : "New Activity"}
        </h1>
      </Button>
      <div className="flex justify-between items-center">
        <p
          data-cy="activity-item-date"
          className="font-poppins-regular text-base text-grey"
        >
          5 Oktober 2022
        </p>
        <Button
          dataCy="activity-item-delete-button"
          onClick={onDelete}
          isWihoutStyle
        >
          <img src={ImgTodoItemDeleteButton} width={24} height={24} />
        </Button>
      </div>
    </div>
  );
}
