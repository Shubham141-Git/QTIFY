import React from "react";
import styles from "./Card.module.css";
import { ReactComponent as CoverImg } from "../../assets/cardCover.svg";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <CoverImg />

        <span className={styles.follows}>100 Follows</span>
      </div>
      <span className={styles.text}>NEW BOLLYWOOD</span>
    </div>
  );
};

export default Card;
