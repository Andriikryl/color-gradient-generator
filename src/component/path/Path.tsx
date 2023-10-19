"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";

export default function Path() {
  const [selectedOption, setSelectedOption] = React.useState("to left");
  const backgroundStyle = {
    background: `linear-gradient(${selectedOption}, #4587B3 0%, #ED7176 12.5%, #9EA3B5 26.56%, #D4B1AD 33.85%, #70A8A0 48.96%, #0F678D 100%)`,
  };
  return (
    <section className={style.path}>
      <Container>
        <h3 className={style.path__title}>Can we change path?</h3>
        <span className={style.path__subT}>try it</span>
        <div className={style.flex__group}>
          <div className={style.gradient__box} style={backgroundStyle}></div>
          <div>
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
            <div className={style.code__box}>
              <code className={style.code}>
                <p>{backgroundStyle.background}</p>
              </code>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
