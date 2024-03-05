import React from "react";
import styles from "../styles/HouseContainer.module.css";
import House from "./House";

interface HouseContainerProps {
  houses: any[];
}

const HouseContainer: React.FC<HouseContainerProps> = ({ houses }) => {
  return (
    <div className={styles.container}>
      {houses.map((house: any, index: number) => (
        <House
          key={index}
          name={house.name}
          animal={house.animal}
          colors={house.houseColours}
          founder={house.founder}
        />
      ))}
    </div>
  );
};

export default HouseContainer;
