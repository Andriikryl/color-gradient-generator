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
      "This is the pigment we want to use. Valid values range from 0 to 360, and we specify it in degrees because the scale is circular (0deg and 360deg represent the same red hue).",
  },
  {
    title: "Saturation",
    description:
      " How much pigment is in the color? Valid values range from 0% to 100%. At 0%, there is no pigment in the color, and it's totally grayscale. At 100%, the color is as vibrant as possible.",
  },
  {
    title: "Lightness",
    description:
      "how light/dark is the color? Valid values range from 0% to 100%. At 0%, the color is pitch black. At 100%, the color is pure white",
  },
];

export default function Hsl() {
  const [generatorVolumeHue, setGeneratorVolumeHue] = React.useState(0);
  const [generatorVolumeSaturation, setGeneratorVolumeSaturation] =
    React.useState(0);
  const [generatorVolumeLightness, setGeneratorVolumeLightness] =
    React.useState(0);

  const Background = {
    backgroundColor: `hsl(${generatorVolumeHue}deg, ${generatorVolumeSaturation}%, ${generatorVolumeLightness}%)`,
  };

  return (
    <section className={style.hsl}>
      <Container>
        <h3 className={style.hsl__title}>hsl</h3>
        <div className={style.flex__group}>
          <div>
            <div className={style.color__box}>
              <div className={style.description__block}>
                <span className={style.hsl__desc}>hue</span>
                <span>{generatorVolumeHue}</span>
              </div>
              <form className={style.form}>
                <Slider.Root
                  className={style.SliderRoot}
                  defaultValue={[generatorVolumeHue]}
                  onValueChange={(newValues) => {
                    setGeneratorVolumeHue(newValues[0]);
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
                <span className={style.hsl__desc}>Saturation</span>
                <span>{generatorVolumeSaturation}</span>
              </div>
              <form className={style.form}>
                <Slider.Root
                  className={style.SliderRoot}
                  defaultValue={[generatorVolumeSaturation]}
                  onValueChange={(newValues) => {
                    setGeneratorVolumeSaturation(newValues[0]);
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
                <span className={style.hsl__desc}>Lightness</span>
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
