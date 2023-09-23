import React from "react";
import styles from "./Carousel.module.css";

import { useSwiper, SwiperSlide, Swiper } from "swiper/react";
import { useEffect } from "react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";

const Carousel = ({ data, componentRender }) => {
  const Controls = ({ data }) => {
    const swiper = useSwiper();

    useEffect(() => {
      swiper.slideTo(0, null);
    }, [data]);
  };

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />

        {data.map((item) => {
          return <SwiperSlide>{componentRender(item)}</SwiperSlide>;
        })}
        <CarouselRightNavigation />
      </Swiper>
    </div>
  );
};

export default Carousel;
