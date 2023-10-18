"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";

export default function Generator() {
  const [colors, setColors] = React.useState([
    "#0077b6",
    "#FFD500",
    "#FF0040",
    "#FF0040",
    "#FF0040",
    "#FF0040",
  ]);
  const [numOfVisibleColors, setNumOfVisibleColors] = React.useState(2);

  const visibleColors = colors.slice(0, numOfVisibleColors);

  const colorStops = visibleColors.join(", ");
  const backgroundImage = `linear-gradient(90deg,${colorStops})`;

  function addColor() {
    if (numOfVisibleColors >= 5) {
      window.alert("There is a maximum of 5 colors");
      return;
    }
    setNumOfVisibleColors(numOfVisibleColors + 1);
  }

  function removeColor() {
    if (numOfVisibleColors <= 2) {
      window.alert("There is a minimum of 2 colors");
      return;
    }
    setNumOfVisibleColors(numOfVisibleColors - 1);
  }
  return (
    <section
      className={style.generate}
      style={{
        backgroundImage,
      }}
    >
      <Container>
        <div className={style.wrapper}>
          <div
            className={style.gradient__preview}
            style={{
              backgroundImage,
            }}
          />
          <div className={style.add__buttonGroup}></div>

          <div className={style.colors}>
            <p className={style.input__description}>Colors:</p>
            <div className={style.flex__group}>
              <button onClick={addColor}>
                +<VisuallyHidden>add color</VisuallyHidden>
              </button>
              {visibleColors.map((color, index) => {
                const colorId = `color-${index}`;
                return (
                  <div key={colorId} className={style.color__wrapper}>
                    <label htmlFor={colorId}>Color {index + 1}:</label>
                    <div className={style.input__wrapper}>
                      <input
                        id={colorId}
                        type="color"
                        value={color}
                        onChange={(event) => {
                          const nextColors = [...colors];
                          nextColors[index] = event.target.value;
                          setColors(nextColors);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
              <button onClick={removeColor}>
                -<VisuallyHidden>Remove color</VisuallyHidden>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
