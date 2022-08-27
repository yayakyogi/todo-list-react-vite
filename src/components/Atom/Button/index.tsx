import React, { ReactNode } from "react";
import { Link, To } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  dataCy?: string;
  onClick?(): Function | void;
  isWihoutStyle?: boolean;
  isRoute?: boolean;
  route?: any;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    onClick,
    dataCy,
    route,
    className,
    isWihoutStyle = false,
    isRoute = false,
  } = props;

  const style = [
    "bg-lightBlue rounded-full px-7 py-3.5 text-white flex justify-center items-center flex",
    className,
  ];

  const onClickAction = () => {
    if (onClick) {
      onClick();
    }
  };

  // jika button icon true
  if (isWihoutStyle) {
    // dan jika isRoute true
    if (isRoute) {
      // maka arahkan ke route
      return (
        <Link to={route} className={className}>
          <button data-cy={dataCy} className={className}>
            {children}
          </button>
        </Link>
      );
    }
    // jika isRoute falas maka tampilkan action
    return (
      <button data-cy={dataCy} onClick={onClickAction} className={className}>
        {children}
      </button>
    );
  }

  // jika isRoute true
  if (isRoute) {
    // maka arahkan ke halaman selanjutnya (button dengan style)
    return (
      <Link to={route}>
        <button data-cy={dataCy} className={className}>
          {children}
        </button>
      </Link>
    );
  }

  // jika isRoute false dan isWihoutStyle false
  return (
    // maka tampilkan action
    <button
      onClick={onClickAction}
      data-cy={dataCy}
      className={style.join(" ")}
    >
      {children}
    </button>
  );
}
