import React from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import styles from "./Carousel.module.css";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBegining);
  useState(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBeginning);
    });
  }, []);

  return (
    <div className={styles.leftNavigate}>
      {!isBegining && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
