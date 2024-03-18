"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getStrapiMedia } from "../../utils/api-helpers";
import "swiper/css/autoplay";
import _ from "underscore";
import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
export default function IsotopGallery(params: {
  mediaGallery: [];
  categories: [];
}) {
  var [pictures_chunk, set_picture_chunk] = useState<any[][]>(
    _.chunk(_.shuffle([]), 4)
  );

  const handleFilter = (a: string) => {
    if (a == "") {
      set_picture_chunk(_.chunk(_.shuffle(params.mediaGallery), 4));
      return;
    }
    let filtered: any[] = params.mediaGallery.filter((p: any) =>
      p.attributes.gallery_categories.data?.some(
        (l: any) => l.attributes.name == a
      )
    );
    set_picture_chunk(_.chunk(_.shuffle(filtered), 4));
  };

  useEffect(() => {
    setTimeout(() => {
      set_picture_chunk(_.chunk(_.shuffle(params.mediaGallery), 4));
    }, 100);
    Fancybox.bind("[data-fancybox]", {
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [
            "toggle1to1",
            "toggleZoom",
            "rotateCCW",
            "rotateCW",
            "flipX",
            "flipY",

            "download",
            "fitX",
            "fitY",
            "reset",
            "togglefs",
          ],
          right: [
            "fullscreen",
            "slideshow",
            "thumbs",
            "toggleFS",
            "close",
            "iterateZoom",
          ],
        },
      },
      Carousel: {
        transition: "slide",
        Panzoom: {
          decelFriction: 0.5,
        },
      },
      Images: {
        zoom: true,
      },
      Fullscreen: { autoStart: false },
      showClass: "f-fadeIn",
    });
    console.log("fancy");
  }, []);

  return (
    <>
      <div className="flex relative items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => handleFilter("")}
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          همه
        </button>
        {params.categories.map((p: any) => (
          <button
            type="button"
            key={p.attributes.name}
            onClick={() => handleFilter(p.attributes.name)}
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            {p.attributes.name}
          </button>
        ))}
      </div>

      {pictures_chunk.map((j: any) => (
        <>
          <div
            key={j.id}
            className="grid  gallery grid-cols-2 md:grid-cols-4 gap-4"
          >
            {j.map((a: any) => {
              return (
                <div
                  key={a.id}
                  className="relative animate-fade animate-once animate-ease-in-out fade
                     filter-item pt-4 hover:scale-105 transition-all hover:transition-all"
                  data-fancybox="gallery"
                  data-caption={a.attributes.caption}
                  data-src={
                    getStrapiMedia(
                      a.attributes.Image.data.attributes.formats.large.url
                    ) || ""
                  }
                >
                  <Image
                    className="h-60 w-full rounded-lg"
                    width={1000}
                    height={1000}
                    src={
                      getStrapiMedia(
                        a.attributes.Image.data.attributes.formats.large.url
                      ) || ""
                    }
                    alt={a.attributes.caption}
                  ></Image>
                  <label
                    style={{
                      marginTop: "-45px",
                    }}
                    className="z-20 ps-4 rounded-sm border-0 text-white absolute flex justify-center items-center bg-gray-500 w-full bg-opacity-25 h-10"
                  >
                    {a.attributes.caption}
                  </label>
                </div>
              );
            })}
          </div>
        </>
      ))}
    </>
  );
}
