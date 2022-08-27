import React from "react";
import {
  ImgActivityEmpteState,
  ImgTodoEmptyState,
} from "../../../assets/images";

interface EmptyImageProps {
  isNewActivityPage: boolean;
  dataCy: string;
}

export default function EmptyImage(props: EmptyImageProps) {
  const { isNewActivityPage, dataCy } = props;
  return (
    <div data-cy={dataCy} className="flex justify-center pt-10">
      <img
        src={isNewActivityPage ? ImgTodoEmptyState : ImgActivityEmpteState}
        className="w-1/2"
      />
    </div>
  );
}
