import React from "react";
import styles from "../styles/House.module.css";

interface HouseProps {
  name: string;
  animal: string;
  colors: string;
  founder: string;
}

const isColor = (color: string): boolean => {
  const nowStyle = new Option().style;
  nowStyle.color = color;
  return nowStyle.color !== "";
};

const House: React.FC<HouseProps> = ({ name, animal, colors, founder }) => {
  let [color1, color2] = colors.toLowerCase().split(" and ");

  if (!isColor(color1) || !isColor(color2)) {
    color1 = "white";
    color2 = "black";
  }

  const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

  return (
    <div className={styles.house}>
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
        <div className={styles.animal}>{animal}</div>
      </div>
      <div
        className={styles.bar}
        style={{
          background: gradient,
        }}
      />
      <div className={styles.founder}>
        Founder:{" "}
        <span style={{ fontWeight: "bold", marginLeft: "5px" }}>{founder}</span>
      </div>
    </div>
  );
};

export default House;
