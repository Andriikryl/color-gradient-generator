"use client";
import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import styles from "./style.module.css";

interface ToastyProps {
  text: string;
}

function Toasty({ text }: ToastyProps) {
  const [isShown, setIsShown] = useState(false);

  const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;

        setIsShown(entry.isIntersecting);
      });

      observer.observe(wrapperRef.current);
    }
  }, []);

  const handelClickButtonClose = () => {
    setIsShown(false);
  };

  const translateX = isShown ? "0%" : "100%";

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        className={styles.character}
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        <button onClick={handelClickButtonClose} className={styles.close__btn}>
          close
        </button>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Toasty;
