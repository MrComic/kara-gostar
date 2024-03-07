"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { getStrapiMedia } from "../utils/api-helpers";
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
import _ from "underscore";
import { useState } from "react";

export default function IsotopGallery(params: {
  mediaGallery: [];
  categories: [];
}) {
  var pictures_chunk = _.chunk(_.shuffle(params.mediaGallery), 4);

  const handleFilter = (a: string) => {
    var filtered = params.mediaGallery.filter((p) =>
      p.attributes.gallery_categories.data?.some(
        (l: any) => l.attributes.name == a
      )
    );

    pictures_chunk = _.chunk(_.shuffle(filtered), 4);
  };

  return pictures_chunk.map((j) => (
    <>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {params.categories.map((p) => (
          <button
            type="button"
            onClick={() => handleFilter(p.attributes.name)}
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            {p.attributes.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {j.map((a) => {
          return (
            <>
              <div className="relative filter-item max-h-32 hover:scale-105 transition-all hover:transition-all">
                <img
                  className="h-60 w-full rounded-lg"
                  src={getStrapiMedia(
                    a.attributes.Image.data.attributes.formats.medium.url
                  )}
                  alt=""
                />
                <p
                  style={{
                    marginTop: "-45px",
                  }}
                  className="z-20 ps-4 rounded-sm border-0 text-white absolute flex justify-center items-center bg-gray-500 w-full bg-opacity-25 h-10"
                >
                  {a.attributes.caption}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  ));
}
