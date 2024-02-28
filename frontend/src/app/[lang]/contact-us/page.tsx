"use client";
import dynamic from "next/dynamic";
import Banner from "../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { faEarth } from "@fortawesome/free-solid-svg-icons/faEarth";
import { faA } from "@fortawesome/free-solid-svg-icons";

export default async function RootRoute() {
  const Map = dynamic(
    () => import("./components/map"), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false, // This line is important. It's what prevents server-side render
    }
  );

  return (
    <>
      <Banner>
        <div className="flex flex-col  items-center text-center  text-white py-10">
          <div className="flex flex-col max-w-screen-2xl flex-row mx-auto justify-center">
            <h1 className="font-extrabold text-4xl">تماس با ما</h1>
            <p className="mt-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
              باعث افتخار ماست تا نظرات خود را با ما از طریق این فرم به اشتراک
              بگذارید.
            </p>
          </div>
        </div>
      </Banner>

      <div className="w-8/12  mx-auto flex flex-row justify-center mt-10 mb-10 bg-white dark:bg-gray-900">
        <div className="m-4 flex flex-col">
          <Map />

          <div className=" grid grid-cols-2 py-8 lg:py-16 px-4 w-full">
            <form action="#" className="space-y-8">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  id="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  موضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  پیغام
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lg text-center justify-self-end  text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                ارسال فرم
              </button>
            </form>

            <div>
              <div className="m-4">
                <div className="contact__channels" data-v-2c279a3f="">
                  <h5 className="text-xl mb-5">راه‌های ارتباطی</h5>
                  <div className="flex flex-row mb-5" data-v-2c279a3f="">
                    <FontAwesomeIcon
                      icon={faMobile}
                      className="me-5 font-extrabold h-5"
                    />
                    <div className="flex flex-col" data-v-2c279a3f="">
                      <p data-v-2c279a3f="">تلفن :</p>
                      <span data-v-2c279a3f="">021-46848781~3</span>
                    </div>
                  </div>
                  <div className="flex flex-row mb-5" data-v-2c279a3f="">
                    <FontAwesomeIcon
                      icon={faMailBulk}
                      className="me-5 font-extrabold h-5"
                    />
                    <div className="fa fa-col" data-v-2c279a3f="">
                      <p data-v-2c279a3f="">ایمیل:</p>
                      <span data-v-2c279a3f="">info@karagostar.com</span>
                    </div>
                  </div>{" "}
                  <div className="contact__channel" data-v-2c279a3f="">
                    {/* <img
                      src="https://cdn.jabama.com/original/statics/desktop/img/location.a2954a7.svg"
                      alt="location"
                      data-v-2c279a3f=""
                    /> */}

                    <div className="flex flex-row" data-v-2c279a3f="">
                      <FontAwesomeIcon
                        icon={faEarth}
                        className="me-5 font-extrabold h-5"
                      />
                      <div className="fa fa-col">
                        <p data-v-2c279a3f="">دفتر مرکزی تهران:</p>
                        <span data-v-2c279a3f="">
                          تهران، شهر قدس (قلعه حسنخان)، بلوار انقلاب، خیابان
                          صنعت 2، مجتمع صنعتی پویا، پلاک 5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
