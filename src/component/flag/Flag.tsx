import React from "react";
import range from "lodash.range";

import styles from "./style.module.css";
import { COLORS, FlagVariant } from "./constants"; // Make sure to import your COLORS and FlagVariant types

interface FlagProps {
  variant?: FlagVariant; // Define the possible values for the variant prop
  width?: number;
  numOfColumns?: number;
  staggeredDelay?: number;
  billow?: number;
}

function Flag({
  variant = "rainbow",
  width = 100,
  numOfColumns = 8,
  staggeredDelay = 100,
  billow = 2,
}: FlagProps) {
  const colors = COLORS[variant];

  const friendlyWidth = Math.round(width / numOfColumns) * numOfColumns;

  const firstColumnDelay = numOfColumns * staggeredDelay * -1;

  return (
    <div className={styles.flag} style={{ width: friendlyWidth }}>
      {range(numOfColumns).map((columnIndex) => (
        <div
          key={columnIndex}
          className={styles.column}
          style={{
            "--billow": columnIndex * billow + "px",
            background: generateGradientString(colors),
            animationDelay:
              firstColumnDelay + columnIndex * staggeredDelay + "ms",
          }}
        />
      ))}
    </div>
  );
}

function generateGradientString(colors: string[]) {
  const numOfColors = colors.length;
  const segmentHeight = 100 / numOfColors;

  const gradientStops = colors.map((color, index) => {
    const from = index * segmentHeight;
    const to = (index + 1) * segmentHeight;

    return `${color} ${from}% ${to}%`;
  });

  return `linear-gradient(to bottom, ${gradientStops.join(", ")})`;
}

export default Flag;
