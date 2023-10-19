import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <h1 className={style.hero__title}>Color gradients</h1>
      </Container>
    </section>
  );
}
