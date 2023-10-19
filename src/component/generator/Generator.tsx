"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import clsx from "clsx";
import { InputFrame } from "../inputFrame/InputFrame";

export default function Generator() {
  const [colorStops, setColorStops] = React.useState([10, 50]);
  const [generatorVolume, setGeneratorVolume] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(" ");
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

  React.useEffect(() => {
    if (selectedOption === "to right") {
      setGeneratorVolume(90);
    } else if (selectedOption === "to bottom right") {
      setGeneratorVolume(142);
    } else if (selectedOption === "to bottom") {
      setGeneratorVolume(180);
    } else if (selectedOption === "to bottom left") {
      setGeneratorVolume(218);
    } else if (selectedOption === "to left") {
      setGeneratorVolume(270);
    } else if (selectedOption === "to top left") {
      setGeneratorVolume(322);
    } else if (selectedOption === "to top") {
      setGeneratorVolume(0);
    } else if (selectedOption === "to top right") {
      setGeneratorVolume(38);
    }
  }, [selectedOption]);

  const backgroundImage = `linear-gradient(${generatorVolume}deg, ${visibleColors
    .map((color, index) => color + " " + colorStops[index] + "%")
    .join(", ")})`;

  const colorStopInputs = colorStops.map((stop, index) => (
    <input
      key={index}
      type="range"
      min="0"
      max="100"
      value={stop}
      onChange={(e) => {
        const newStops = [...colorStops];
        newStops[index] = parseInt(e.target.value, 10);
        setColorStops(newStops);
      }}
    />
  ));

  function addColor() {
    if (numOfVisibleColors >= 5) {
      window.alert("There is a maximum of 5 colors");
      return;
    }
    const newColor = "#FF0040";
    const newColorStop = Math.floor(Math.random() * 101);

    const updatedColors = [...colors, newColor];
    const updatedStops = [...colorStops, newColorStop];

    setColors(updatedColors);
    setColorStops(updatedStops);
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
          <div className={style.box}>
            <div
              className={style.gradient__preview}
              style={{
                backgroundImage,
              }}
            />
            <div
              className={style.line}
              style={{ transform: `rotate(${generatorVolume}deg)` }}
            ></div>
            <div className={style.dot__center}></div>
          </div>

          <div className={style.colors}>
            <p className={style.input__description}>Colors:</p>
            <div className={style.flex__group}>
              <button onClick={addColor} className={style.add__button}>
                +<VisuallyHidden>add color</VisuallyHidden>
              </button>
              {visibleColors.map((color, index) => {
                const colorId = `color-${index}`;
                return (
                  <div key={colorId} className={style.color__wrapper}>
                    <label htmlFor={colorId}>Color{index + 1}:</label>
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
            <div className={style.angel__wrapper}>
              <form className={style.form__direaction}>
                <fieldset>
                  <legend className={style.legend}>Angel diraction</legend>
                  <select
                    className={style.select}
                    value={selectedOption}
                    onChange={(event) => {
                      setSelectedOption(event.target.value);
                    }}
                  >
                    <option value="to left">to left</option>
                    <option value="to right">to right</option>
                    <option value="to bottom right">to bottom right</option>
                    <option value="to bottom">to bottom</option>
                    <option value="to bottom left">to bottom left</option>
                    <option value="to top right">to top right</option>
                    <option value="to top">to top</option>
                    <option value="to top left">to top left</option>
                  </select>
                </fieldset>
              </form>
              <div className={style.angel__visual}>
                <div
                  className={clsx(style.visual__box, {
                    [style.active__angel]: selectedOption === "to top left",
                  })}
                ></div>
                <div
                  className={clsx(style.visual__box, {
                    [style.active__angel]: selectedOption === "to top",
                  })}
                ></div>
                <div
                  className={clsx(style.visual__box, {
                    [style.active__angel]: selectedOption === "to top right",
                  })}
                ></div>
                <div
                  className={clsx(style.visual__box, {
                    [style.active__angel]: selectedOption === "to left",
                  })}
                ></div>
                <div
                  className={clsx(style.visual__box, style.unactive__angel)}
                ></div>
                <div
                  className={clsx(style.visual__box, {
                    [style.active__angel]: selectedOption === "to right",
                  })}
                ></div>
                <div
                  className={clsx(style.visual__box, {
                    [style.active__angel]: selectedOption === "to bottom left",
                  })}
                ></div>
                <div
                  className={clsx(style.visual__box, {
                    [style.active__angel]: selectedOption === "to bottom",
                  })}
                ></div>
                <div
                  className={clsx(style.visual__box, {
                    [style.active__angel]: selectedOption === "to bottom right",
                  })}
                ></div>
              </div>
              <div
                className={clsx(style.range__box)}
                style={{ "--angle": `${generatorVolume}deg` }}
              >
                <div className={style.range__visual}></div>
                <InputFrame
                  className={style.form__angel}
                  value={generatorVolume}
                  set={setGeneratorVolume}
                  min={0}
                  max={360}
                  rangeLabel="angel-range"
                  numberLabel="angel-number"
                ></InputFrame>
              </div>
            </div>
          </div>
          <div className={style.side__range}>
            {visibleColors.map((color, index) => {
              const colorId = `color-${index}`;
              return (
                <div key={colorId} className={style.color__Sidewrapper}>
                  <div className={style.side__flex}>
                    <div className={style.input__wrapper}>
                      <input
                        className={style.input__colorAddSide}
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
                    <label htmlFor={colorId}>{color}</label>
                  </div>
                  <div className={style.side__flex__group}>
                    {colorStopInputs[index]}
                    <p className={style.colorStop}>{colorStops[index]}%</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
