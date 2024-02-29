"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { getStrapiMedia } from "./utils/api-helpers";
import {
  Parallax,
  Autoplay,
  Navigation,
  Pagination,
  EffectCreative,
  Scrollbar,
  EffectFade,
  A11y,
} from "swiper/modules";
import "swiper/css/autoplay";

export default function HomeSlider() {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        waitForTransition: false,
        reverseDirection: false,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        delay: 3000,
        stopOnLastSlide: false,
      }}
      navigation
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
    >
      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/IMG_6107_95086858be.jpg")}
          alt="..."
          style={{
            width: "100%",
            height: " 450px",
            "background-size": "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/Screenshot_2_c29ded37a4.png")}
          alt="..."
          style={{
            width: "100%",
            height: " 450px",
            "background-size": "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/FINAL_14_a60da0ff01.jpg")}
          alt="..."
          style={{
            width: "100%",
            height: " 450px",
            "background-size": "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/FINAL_27_9fae161436.jpg")}
          style={{ width: "100%", height: "450px", backgroundSize: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
