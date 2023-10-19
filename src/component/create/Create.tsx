"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";

export default function Create() {
  const [colors, setColors] = React.useState([
    "#FFD500",
    "#06d6a0",
    "#3a86ff",
    "#ffc2d1",
    "#ef476f",
  ]);
  const [numOfVisibleColors, setNumOfVisibleColors] = React.useState(2);

  const visibleColors = colors.slice(0, numOfVisibleColors);

  const colorStops = visibleColors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

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
    <section className={style.create}>
      <Container>
        <div className={style.create__box}>
          <h2 className={style.create__title}>So...... how create gradient?</h2>
        </div>
        <div>
          <div
            className={style.gradient__preview}
            style={{
              backgroundImage,
            }}
          />
          <div className={style.wrapper}>
            <div className={style.colors}>
              <p className={style.input__description}>Colors:</p>
              <div className={style.flex__group}>
                <button onClick={addColor} className={style.add__button}>
                  +<VisuallyHidden>Add color</VisuallyHidden>
                </button>
                {visibleColors.map((color, index) => {
                  const colorId = `color-${index}`;
                  return (
                    <div key={colorId} className={style.color__wrapper}>
                      <label htmlFor={colorId} className={style.label}>
                        Color {index + 1}:
                      </label>
                      <div className={style.input__wrapper}>
                        <input
                          className={style.input__colorAdd}
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
                <button onClick={removeColor} className={style.remove__button}>
                  -<VisuallyHidden>Remove color</VisuallyHidden>
                </button>
              </div>
            </div>
            <div className={style.code__box}>
              <code className={style.code}>
                <p>{backgroundImage}</p>
              </code>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
