"use client";
import React, { useState } from "react";
import { Container } from "../container/Container";
import * as Slider from "@radix-ui/react-slider";
import style from "./style.module.css";
import clsx from "clsx";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";
import { AnimatedText } from "../animatedText/AnimatedText";
export default function Rgb() {
  const [generatorVolumeRed, setGeneratorVolumeRed] = React.useState(0);
  const [generatorVolumeGreen, setGeneratorVolumeGreen] = React.useState(0);
  const [generatorVolumeBlue, setGeneratorVolumeBlue] = React.useState(0);

  const Background = {
    backgroundColor: `rgb(${generatorVolumeRed}, ${generatorVolumeGreen}, ${generatorVolumeBlue})`,
  };

  return (
    <section className={style.rgb}>
      <Container>
        <h3 className={style.rgb__title}>rgb</h3>
        <div className={style.rgb__box}>
          <div className={style.flex__group}>
            <div className={style.color__box}>
              <div className={style.description__block}>
                <span className={style.red}>red</span>
                <span>{generatorVolumeRed}</span>
              </div>
              <form className={style.form}>
                <Slider.Root
                  className={style.SliderRoot}
                  defaultValue={[generatorVolumeRed]}
                  onValueChange={(newValues) => {
                    setGeneratorVolumeRed(newValues[0]);
                  }}
                  max={250}
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
                <span className={style.green}>Green</span>
                <span>{generatorVolumeGreen}</span>
              </div>
              <form className={style.form}>
                <Slider.Root
                  className={style.SliderRoot}
                  defaultValue={[generatorVolumeGreen]}
                  onValueChange={(newValues) => {
                    setGeneratorVolumeGreen(newValues[0]);
                  }}
                  max={250}
                  step={1}
                >
                  <Slider.Track
                    className={clsx(style.SliderTrack, style.track__green)}
                  >
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
                <span className={style.blue}>Blue</span>
                <span>{generatorVolumeBlue}</span>
              </div>
              <form className={style.form}>
                <Slider.Root
                  className={style.SliderRoot}
                  defaultValue={[generatorVolumeBlue]}
                  onValueChange={(newValues) => {
                    setGeneratorVolumeBlue(newValues[0]);
                  }}
                  max={250}
                  step={1}
                >
                  <Slider.Track
                    className={clsx(style.SliderTrack, style.track__blue)}
                  >
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
          <div className={style.box}>
            <div className={style.rgb__colorBox} style={Background}></div>
            <span className={style.color__value}>
              {Background.backgroundColor}
            </span>
          </div>
        </div>
        <DescriptionBlock>
          Each value — red, green, blue — is referred to as a channel. Each
          channel goes from 0 to 255. By mixing these channels in different
          amounts, we can create over 16 milion different colors.
        </DescriptionBlock>
      </Container>
    </section>
  );
}
