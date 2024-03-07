"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default function SingleProductSlider(params: { images: [] }) {
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
      {params.images.map((h: any) => (
        <SwiperSlide>
          <img
            className="object-scale-down"
            src={getStrapiMedia(h.attributes.formats.medium.url)}
            alt="..."
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
