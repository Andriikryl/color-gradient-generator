"use client";
import React from "react";
import style from "./style.module.css";
import clsx from "clsx";
import VisuallyHidden from "@/component/visuallyhidden/VisuallyHidden";

interface BoxBlock {
  amount: number;
  type?: string;
  className: string;
  percent?: string;
  percentages?: string[];
}

const hslPercentages = [
  "54%",
  "68%",
  "97%",
  "90%",
  "89%",
  "88%",
  "91%",
  "53%",
  "30%",
  "39%",
  "60%",
  "56%",
];

export default function TableCompere() {
  return (
    <div className={style.body}>
      <div className={style.header}>
        <div className={style.center__split}>
          <p>
            HSLs lightness is 50% but the perceptual lightness is wildly
            different.
          </p>
          <p>
            LCH perceptual lightness is consistent to human eyes. Less vibrant,
            but constant
          </p>
        </div>
      </div>
      <div className={style.main}>
        <div className={clsx(style.hsl, style.section)}>
          <h2 className={style.hsl__title}>
            <span>H</span>
            <span>S</span>
            <span>L</span>
            <VisuallyHidden>hsl</VisuallyHidden>
          </h2>
          <BoxBlock amount={12} className={style.colorful} percent="50%" />
          <BoxBlock
            amount={12}
            className={style.luminance}
            percentages={hslPercentages}
          />
        </div>
        <div className={clsx(style.lch, style.section)}>
          <BoxBlock amount={12} className={style.luminance} percent="50%" />
          <BoxBlock amount={12} className={style.colorful} percent="50%" />
          <h2 className={style.lch__title}>
            <span>L</span>
            <span>C</span>
            <span>H</span>
            <VisuallyHidden>lch</VisuallyHidden>
          </h2>
        </div>
      </div>
      <div className={style.footer}>
        <p>Notice that 50% gray in LCH is ~46.5% in HSL.</p>
        <p>Even the middle gray definition is different.</p>
      </div>
    </div>
  );
}

function BoxBlock({ amount, type, className, percent, percentages }: BoxBlock) {
  let blocks = [];
  for (let i = 0; i < amount; i++) {
    blocks.push(
      <div key={i} className={clsx(style.block)}>
        {percent || (percentages ? percentages[i] : "")}
      </div>
    );
  }
  return <div className={className}>{blocks}</div>;
}
