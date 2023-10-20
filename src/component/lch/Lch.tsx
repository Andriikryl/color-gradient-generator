"use client";
import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import * as Slider from "@radix-ui/react-slider";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";

const dataHue = [
  {
    title: "Hue",
    description:
      "A <number>, an <angle>, or the keyword none, which represents the hue angle. More details on this type can be found on the <hue> reference.",
  },
  {
    title: "CHROMA",
    description:
      " A <number>, a <percentage>, or the keyword none, where 0% is 0 and 100% is the number 150. It is a measure of the chroma (roughly representing the amount of color). Its minimum useful value is 0, while its maximum is theoretically unbounded (but in practice does not exceed 230).",
  },
  {
    title: "Lightness",
    description:
      "A <number> between 0 and 100, a <percentage> between 0% and 100%, or the keyword none, which specifies the CIE Lightness. Here the number 0 corresponds to 0% (black) and the number 100 corresponds to 100% (white).",
  },
];

export default function Lch() {
  const [generatorVolumeHue, setGeneratorVolumeHue] = React.useState(0);
  const [generatorVolumeSaturation, setGeneratorVolumeSaturation] =
    React.useState(0);
  const [generatorVolumeLightness, setGeneratorVolumeLightness] =
    React.useState(0);

  const Background = {
    backgroundColor: `lch(${generatorVolumeHue}% ${generatorVolumeSaturation} ${generatorVolumeLightness})`,
  };
  return (
    <section className={style.hsl}>
      <Container>
        <h3 className={style.hsl__title}>lsh</h3>
        <DescriptionBlock>
          LCH is a different way to specify colors compared to RGB or HSL. It
          uses Lightness, Chroma, and Hue instead of combinations of colors.
          Lightness refers to how light or dark a color is. Chroma refers to how
          vivid or intense the color is. Hue refers to the basic color, like
          red, blue, etc.
        </DescriptionBlock>
        <div className={style.flex__group}>
          <div>
            <div className={style.color__box}>
              <div className={style.description__block}>
                <span className={style.hsl__desc}>LIGHTNESS</span>
                <span>{generatorVolumeHue}</span>
              </div>
              <form className={style.form}>
                <Slider.Root
                  className={style.SliderRoot}
                  defaultValue={[generatorVolumeHue]}
                  onValueChange={(newValues) => {
                    setGeneratorVolumeHue(newValues[0]);
                  }}
                  max={100}
                  step={1}
                >
                  <Slider.Track className={style.SliderTrack}>
                    <Slider.Range className={style.SliderRange} />
                  </Slider.Track>
                  <Slider.Thumb
                    className={style.SliderThumb}
                    aria-label="Volume"
                  ></Slider.Thumb>
                </Slider.Root>
              </form>
            </div>
            <div className={style.color__box}>
              <div className={style.description__block}>
                <span className={style.hsl__desc}>HUE</span>
                <span>{generatorVolumeSaturation}</span>
              </div>
              <form className={style.form}>
                <Slider.Root
                  className={style.SliderRoot}
                  defaultValue={[generatorVolumeSaturation]}
                  onValueChange={(newValues) => {
                    setGeneratorVolumeSaturation(newValues[0]);
                  }}
                  max={360}
                  step={1}
                >
                  <Slider.Track className={style.SliderTrack}>
                    <Slider.Range className={style.SliderRange} />
                  </Slider.Track>
                  <Slider.Thumb
                    className={style.SliderThumb}
                    aria-label="Volume"
                  ></Slider.Thumb>
                </Slider.Root>
              </form>
            </div>
            <div className={style.color__box}>
              <div className={style.description__block}>
                <span className={style.hsl__desc}>CHROMA</span>
                <span>{generatorVolumeLightness}</span>
              </div>
              <form className={style.form}>
                <Slider.Root
                  className={style.SliderRoot}
                  defaultValue={[generatorVolumeLightness]}
                  onValueChange={(newValues) => {
                    setGeneratorVolumeLightness(newValues[0]);
                  }}
                  max={100}
                  step={1}
                >
                  <Slider.Track className={style.SliderTrack}>
                    <Slider.Range className={style.SliderRange} />
                  </Slider.Track>
                  <Slider.Thumb
                    className={style.SliderThumb}
                    aria-label="Volume"
                  ></Slider.Thumb>
                </Slider.Root>
              </form>
            </div>
          </div>
          <div className={style.bg__box}>
            <div className={style.hsl__box} style={Background}></div>
            <span>{Background.backgroundColor}</span>
          </div>
        </div>
        <div className={style.description__list}>
          <ul role="list" className={style.list}>
            {dataHue.map(({ title, description }, index) => {
              return (
                <li key={index} className={style.list__item}>
                  <span>{title}:</span>
                  <span>{description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
