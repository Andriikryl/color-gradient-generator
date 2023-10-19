"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import clsx from "clsx";
import { InputFrame } from "../inputFrame/InputFrame";

export default function Angel() {
  const [generatorVolume, setGeneratorVolume] = React.useState(90);
  const backgroundStyle = {
    background: `linear-gradient(${generatorVolume}deg, hsl(240deg 100% 20%) 0%,
    hsl(289deg 100% 21%) 11%,
    hsl(315deg 100% 27%) 22%,
    hsl(329deg 100% 36%) 33%,
    hsl(337deg 100% 43%) 44%,
    hsl(357deg 91% 59%) 56%,
    hsl(17deg 100% 59%) 67%,
    hsl(34deg 100% 53%) 78%,
    hsl(45deg 100% 50%) 89%,
    hsl(55deg 100% 50%) 100%)`,
  };
  return (
    <section className={style.angel}>
      <Container>
        <h3 className={style.angel__title}>
          Its cool..... but wath about angel?
        </h3>
        <div className={style.flex__group}>
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
          <div className={style.box}>
            <div className={style.gradient__preview} style={backgroundStyle} />
            <div
              className={style.line}
              style={{ transform: `rotate(${generatorVolume}deg)` }}
            ></div>
            <div className={style.dot__center}></div>
          </div>
          <div className={style.code__block}>
            <code className={style.code}>
              <p>{backgroundStyle.background}</p>
            </code>
          </div>
        </div>
      </Container>
    </section>
  );
}
