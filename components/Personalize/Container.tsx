import React from "react";
import s from "./styles.module.scss";

interface IContainer {
  children: React.ReactNode;
  description: string;
}

export default function Container({ children, description }: IContainer) {
  return (
    <div className={s.grayContainer}>
      <h3 className={s.description}>{description}</h3>
      {children}
    </div>
  );
}
