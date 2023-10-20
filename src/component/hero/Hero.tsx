import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { AnimatedText } from "../animatedText/AnimatedText";
export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <h1 className={style.hero__title}>color</h1>
      </Container>
    </section>
  );
}
