import React from "react";
import styles from "./Section.module.css";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({ title, data, value, handleChange }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse"}
        </h4>
      </div>
      {title === "Songs" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card type="album" data={item} key={item.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              componentRender={(ele) => <Card data={ele} type="album" />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
