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

export default function PartnersSlider() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      autoplay={{
        waitForTransition: false,
        reverseDirection: false,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        delay: 3000,
        stopOnLastSlide: false,
      }}
      modules={[Autoplay, Pagination, Scrollbar, A11y]}
    >
      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/5_98b740e103.png")}
          alt="..."
          style={{
            width: "100%",
            height: "70px;",
            "background-size": "cover",
          }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/1_dfc3af8044.jpg")}
          alt="..."
          style={{
            width: "100%",
            height: "70px;",
            "background-size": "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/7_2410fe8c88.jpg")}
          alt="..."
          style={{
            width: "100%",
            height: "70px;",
            "background-size": "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/2_b8f3638569.jpg")}
          alt="..."
          style={{
            width: "100%",
            height: "70px;",
            "background-size": "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/6_983c08d28f.jpg")}
          alt="..."
          style={{
            width: "100%",
            height: "70px;",
            "background-size": "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/3_2cca28d831.png")}
          alt="..."
          style={{
            width: "100%",
            height: "70px;",
            "background-size": "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={getStrapiMedia("/uploads/4_55d48842ef.png")}
          style={{ width: "100%", height: "70px;", backgroundSize: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
