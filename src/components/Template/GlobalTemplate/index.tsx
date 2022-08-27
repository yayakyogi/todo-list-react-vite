import React, { ReactNode } from "react";

interface GlobalTemplateProps {
  children: ReactNode;
}

export default function GlobalTemplate(props: GlobalTemplateProps) {
  const { children } = props;
  return (
    <div>
      <div className="px-64 py-8 bg-lightBlue">
        <h1
          data-cy="header-title"
          className="font-poppins-bold text-2xl text-white uppercase"
        >
          to do list app
        </h1>
      </div>
      <div className="px-64 py-11 w-full">{children}</div>
    </div>
  );
}
