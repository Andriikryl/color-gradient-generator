import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";
export default function Gamut() {
  return (
    <section className={style.gamut}>
      <Container>
        <h3 className={style.gamut__title}> color gamut</h3>
        <DescriptionBlock>
          A gamut represents the size of something. The phrase millions of
          colors is a comment about the gamut of a display, or the range of
          colors it has to choose from. In the following image, three gamuts are
          compared, and the larger the size the more colors it offers.
        </DescriptionBlock>
        <div className={style.flex__group}>
          <div className={style.inner__box}>
            <div className={style.srgb}></div>
            <span>sRGB</span>
          </div>
          <div className={style.inner__box}>
            <div className={style.display}></div>
            <span>Display P3</span>
          </div>
          <div className={style.inner__box}>
            <div className={style.rec}></div>
            <span>Rec2020</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
