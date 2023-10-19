import React, { ReactNode } from "react";
import style from "./style.module.css"
interface DescriptionBlockProps {
    children: ReactNode
}
export default function DescriptionBlock({children}: DescriptionBlockProps) {
  return   <p className={style.description}>
    {children}
  </p>;
}
