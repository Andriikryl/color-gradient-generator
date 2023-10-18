import { useId } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
interface InputProps {
  rangeLabel: string;
  numberLabel: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export function InputFrame({
  value,
  rangeLabel,
  numberLabel,
  set,
  min = -500,
  max = 500,
  className,
}: InputProps) {
  const id = useId();
  const rangeValumeId = `${id}-range-value`;
  const numberValumeId = `${id}-number-value`;
  return (
    <form className={clsx(style.form, className)}>
      <div className={style.label__box}>
        <label className={style.label} htmlFor={rangeValumeId}>
          <VisuallyHidden>{rangeLabel}</VisuallyHidden>
        </label>
        <input
          className={style.input}
          value={value}
          id={rangeValumeId}
          type="range"
          min={min}
          max={max}
          onChange={(e) => set(parseFloat(e.target.value))}
        />
      </div>
      <div className={style.label__box}>
        <label className={style.label} htmlFor={numberValumeId}>
          <VisuallyHidden>{numberLabel}</VisuallyHidden>
        </label>
        <input
          className={clsx(style.input, style.input__number)}
          type="number"
          id={numberValumeId}
          value={value}
          min={min}
          max={max}
          onChange={(e) => set(parseFloat(e.target.value) || 0)}
        />
      </div>
    </form>
  );
}
