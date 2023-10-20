import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import Link from "next/link";
const linksData = [
  {
    id: 1,
    title: "LCH colors in CSS: what, why, and how?",
    href: "https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/#:~:text=most%20vivid%20colors%20the%20screen%20can%20display",
  },
  {
    id: 2,
    title: "Color Formats in CSS",
    href: "https://www.joshwcomeau.com/css/color-formats/#lch-7",
  },
];

export default function Resources() {
  return (
    <section className={style.resource}>
      <Container>
        <h4 className={style.resoursec__title}>Resources:</h4>
        <ul className={style.resource__list} role="list">
          {linksData.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <Link className={style.item__link} href={item.href}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
