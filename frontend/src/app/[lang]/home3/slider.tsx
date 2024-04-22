"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import translate from "../utils/translate";
import { getStrapiMedia } from "../utils/api-helpers";

export default function HomePageSlider(params: { languageFile: any }) {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <section
          className="flex flex-row justify-start items-end   relative h-screen w-full p-20"
          style={{
            background: `url('${getStrapiMedia(
              "/uploads/Screenshot_2024_04_18_142659_11d42a78fb.png"
            )}')`,
            flexWrap: "wrap",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "cover",
          }}
        >
          <div
            className="flex flex-col justify-items-end p-10 "
            style={{
              backgroundColor: "rgba(55,65,80,0.7)",
              position: "absolute",
              top: "50dvh",
            }}
          >
            <h1 className="text-5xl text-white">
              شرکت مهندسی <span className="text-red-600">کاراگستر</span>
            </h1>
            <h2 className="text-2xl text-white pt-5">
              تولید کننده قالب تایر و پرس پخت
            </h2>
            <div className="pt-7">
              <a
                href="/fa/contact-us"
                className="inline-flex me-3 justify-self-center px-5 py-3 
               font-medium text-center border border-gray-300 rounded-lg
                hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white
                 border-gray-700 bg-gray-600 focus:ring-gray-800"
              >
                {translate("home.section1.contact-us", params.languageFile)}
              </a>
              <a
                href="/fa/products"
                className="inline-flex  justify-self-center px-5 py-3 text-base font-medium text-center
               text-gray-900 border border-red-300 rounded-lg hover:bg-red-100 focus:ring-4 focus:ring-red-100
                text-white border-red-700 bg-red-700 focus:ring-red-800"
              >
                {translate("home.section1.view-products", params.languageFile)}
              </a>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section
          className="flex flex-row justify-start items-end   relative h-screen w-screen p-20"
          style={{
            background: `url('${getStrapiMedia(
              "/uploads/header3_76469aa713.jpg"
            )}')`,
            flexWrap: "wrap",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "contain",
          }}
        >
          <div
            className="flex flex-col justify-items-end p-10 "
            style={{
              backgroundColor: "rgba(55,65,80,0.7)",
              position: "absolute",
              top: "50dvh",
            }}
          >
            <h1 className="text-5xl text-white">
              شرکت مهندسی <span className="text-red-600">کاراگستر</span>
            </h1>
            <h2 className="text-2xl text-white pt-5">
              تولید کننده قالب تایر و پرس پخت
            </h2>
            <div className="pt-7">
              <a
                href="/fa/contact-us"
                className="inline-flex me-3 justify-self-center px-5 py-3 
               font-medium text-center border border-gray-300 rounded-lg
                hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white
                 border-gray-700 bg-gray-600 focus:ring-gray-800"
              >
                {translate("home.section1.contact-us", params.languageFile)}
              </a>
              <a
                href="/fa/products"
                className="inline-flex  justify-self-center px-5 py-3 text-base font-medium text-center
               text-gray-900 border border-red-300 rounded-lg hover:bg-red-100 focus:ring-4 focus:ring-red-100
                text-white border-red-700 bg-red-700 focus:ring-red-800"
              >
                {translate("home.section1.view-products", params.languageFile)}
              </a>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section
          className="flex flex-row justify-start items-start  relative h-screen w-screen p-20"
          style={{
            background: `url('${getStrapiMedia(
              "/uploads/Header2_7b47e81edb.jpg"
            )}')`,
            flexWrap: "wrap",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "contain",
          }}
        >
          <div
            className="flex flex-col justify-items-end p-10"
            style={{
              backgroundColor: "rgba(55,65,80,0.7)",
            }}
          >
            <h1 className="text-5xl text-white">
              شرکت مهندسی <span className="text-red-600">کاراگستر</span>
            </h1>
            <h2 className="text-2xl text-white pt-5">
              تولید کننده قالب تایر و پرس پخت
            </h2>
            <div className="pt-7">
              <a
                href="/fa/contact-us"
                className="inline-flex me-3 justify-self-center px-5 py-3 
               font-medium text-center border border-gray-300 rounded-lg
                hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white
                 border-gray-700 bg-gray-600 focus:ring-gray-800"
              >
                {translate("home.section1.contact-us", params.languageFile)}
              </a>
              <a
                href="/fa/products"
                className="inline-flex  justify-self-center px-5 py-3 text-base font-medium text-center
               text-gray-900 border border-red-300 rounded-lg hover:bg-red-100 focus:ring-4 focus:ring-red-100
                text-white border-red-700 bg-red-700 focus:ring-red-800"
              >
                {translate("home.section1.view-products", params.languageFile)}
              </a>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section
          className="flex flex-row justify-center items-center w-full h-screen"
          style={{
            background: `url('${getStrapiMedia(
              "/uploads/header_9ce715cd3d.jpg"
            )}')`,
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "contain",
            backgroundColor: "rgba(55 65 80/1)",
          }}
        >
          {/* <img
          src={getStrapiMedia("/uploads/header3_76469aa713.jpg") || ""}
          className="w-full h-full"
        /> */}
          <div className="absolute top-auto flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white">فناوری پیشرفته صنعت تایر</h1>
            <h2 className="text-2xl text-white pt-5">
              تولید کننده پرس پخت قالب با همکاری شرکت HERBERT Maschinen
            </h2>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}
