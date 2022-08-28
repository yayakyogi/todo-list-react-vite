import React, { ReactNode } from "react";

interface ModalTemplateProps {
  dataCy: string;
  children: ReactNode;
}

export default function ModalTemplate(props: ModalTemplateProps) {
  const { dataCy, children } = props;
  return (
    <div
      data-cy={dataCy}
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
    >
      {children}
    </div>
  );
}
