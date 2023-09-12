import React from "react";
import { ReactComponent as HeroImage } from "../../assets/heroInage.svg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroBanner}>
      <HeroImage />
    </div>
  );
};

export default Hero;
