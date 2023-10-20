import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";
import TableCompere from "./tableCompere/TableCompere";
export default function CompereHl() {
  return (
    <section>
      <Container>
        <DescriptionBlock>
          LCH color space has a property called perceptual uniformity that makes
          it easier to work with colors than RGB or HSL.
        </DescriptionBlock>
        <DescriptionBlock>
          In LCH, if you increase or decrease one of the L (lightness), C
          (chroma), or H (hue) values by the same amount, it will result in a
          color change that looks visually equal, or uniform.
        </DescriptionBlock>
        <div className={style.color__format}>
          <div className={style.color__box}>
            <span>background-color: hsl(30, 100%, 50%);</span>
            <span>background-color: hsl(30, 100%, 50%);</span>
          </div>
          <div className={style.color__box}>
            <span> background-color: hsl(50, 100%, 50%);</span>
            <span> background-color: hsl(50, 100%, 50%);</span>
          </div>
          <div className={style.color__box}>
            <span> background-color: hsl(230, 100%, 50%);</span>
            <span> background-color: hsl(230, 100%, 50%);</span>
          </div>
          <div className={style.color__box}>
            <span>background-color: hsl(250, 100%, 50%);</span>
            <span>background-color: hsl(250, 100%, 50%);</span>
          </div>
        </div>
        <DescriptionBlock>
          For example, increasing lightness by 10 units would produce a color
          that looks consistently lighter. Decreasing chroma by 10 units would
          produce a color that looks consistently less vivid. RGB and HSL do not
          have this property. The same numerical change in their values can
          produce color changes that look very different visually.
        </DescriptionBlock>
        <div className={style.color__format}>
          <div
            className={style.color__box}
            style={{ backgroundColor: "hsl(60, 100%, 50%)" }}
          >
            <span> background-color: hsl(60, 100%, 50%);</span>
            <span> background-color: hsl(60, 100%, 50%);</span>
          </div>
          <div
            className={style.color__box}
            style={{ backgroundColor: "hsl(240, 100%, 50%)" }}
          >
            <span> background-color: hsl(240, 100%, 50%);</span>
            <span> background-color: hsl(240, 100%, 50%);</span>
          </div>
        </div>
        <DescriptionBlock>
          Both of these colors have a lightness of 50%, but they are most
          certainly not equally light. What does HSL lightness actually mean
          then?
        </DescriptionBlock>
        <DescriptionBlock>
          In HSL (Hue, Saturation, Lightness) color space, the lightness value
          does not accurately represent how light or dark a color appears to
          human perception. The page gives the example that yellow and blue can
          have the same HSL lightness value, but they are clearly not equally
          light or dark when viewed by humans.
        </DescriptionBlock>
        <h3 className={style.compere__title}>Lightness vs Luminance</h3>
        <TableCompere />
      </Container>
    </section>
  );
}
