import React from "react";
import { Link } from "react-router-dom";
import { ImgTodoItemDeleteButton } from "../../../assets/images";
import { Button } from "../../Atom";

interface ActivityItemProps {
  title: string;
  index: number;
  onDelete?(): Function | void;
  nextPage?: any;
  date: string;
}

export default function ActivityItem(props: ActivityItemProps) {
  const { title, onDelete, index, nextPage, date } = props;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const datetime = new Date(date);
  const day = datetime.getDate();
  const month = months[datetime.getMonth()];
  const year = datetime.getFullYear();
  return (
    <div
      data-cy={`activity-item-${index}`}
      className="w-[235px] h-[234px] rounded-2xl bg-white p-6 shadow-lg flex flex-col"
    >
      <Button
        isWihoutStyle
        isRoute
        route={nextPage}
        className="hover:cursor-pointer flex-1"
      >
        <h1
          data-cy="activity-item-site"
          className="text-start font-poppins-bold text-lg text-black hover:cursor-pointer "
        >
          {title.length > 1 ? title : "New Activity"}
        </h1>
      </Button>
      <div className="flex justify-between items-center">
        <p
          data-cy="activity-item-date"
          className="font-poppins-regular text-base text-grey"
        >
          {`${day} ${month} ${year}`}
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
