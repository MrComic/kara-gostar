"use client";
import dynamic from "next/dynamic";
import Banner from "../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { faEarth } from "@fortawesome/free-solid-svg-icons/faEarth";
import { faA } from "@fortawesome/free-solid-svg-icons";
import translate from "../utils/translate";
import { getLanguageFile } from "../utils/get-language-file";
import { ContactFormSubmit } from "../actions/contact-form";
import { useFormStatus } from "react-dom";

export default async function RootRoute(params: { lang: string }) {
  const languageFile = await getLanguageFile(params.lang);
  let data = languageFile?.data?.attributes.text;
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
            <h1 className="font-extrabold text-4xl">
              {translate("contact-us.title", data)}
            </h1>
            <p className="mt-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
              {translate("contact-us.subtitle", data)}
            </p>
          </div>
        </div>
      </Banner>

      <div className="w-8/12  mx-auto flex flex-row justify-center mt-10 mb-10 bg-white dark:bg-gray-900">
        <div className="m-4 flex flex-col">
          <Map />

          <div className=" grid grid-cols-2 py-8 lg:py-16 px-4 w-full">
            <form action={ContactFormSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {translate("contact-us.email", data)}
                </label>
                <input
                  type="email"
                  name="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {translate("contact-us.name", data)}
                </label>
                <input
                  type="text"
                  name="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {translate("contact-us.subject", data)}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  {translate("contact-us.message", data)}
                </label>
                <textarea
                  name="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lg text-center justify-self-end  text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                {translate("contact-us.submit-form", data)}
              </button>
            </form>

            <div>
              <div className="m-4">
                <div className="contact__channels" data-v-2c279a3f="">
                  <h5 className="text-xl mb-5">
                    {translate("contact-us.contactTitle", data)}
                  </h5>
                  <div className="flex flex-row mb-5" data-v-2c279a3f="">
                    <FontAwesomeIcon
                      icon={faMobile}
                      className="me-5 font-extrabold h-5"
                    />
                    <div className="flex flex-col" data-v-2c279a3f="">
                      <p data-v-2c279a3f="">
                        {translate("contact-us.phone", data)}
                      </p>
                      <span data-v-2c279a3f="">
                        {translate("contact-us.phone-value", data)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row mb-5" data-v-2c279a3f="">
                    <FontAwesomeIcon
                      icon={faMailBulk}
                      className="me-5 font-extrabold h-5"
                    />
                    <div className="fa fa-col" data-v-2c279a3f="">
                      <p data-v-2c279a3f="">
                        {translate("contact-us.email", data)}
                      </p>
                      <span data-v-2c279a3f="">
                        {translate("contact-us.email-value", data)}
                      </span>
                    </div>
                  </div>
                  <div className="contact__channel" data-v-2c279a3f="">
                    <div className="flex flex-row" data-v-2c279a3f="">
                      <FontAwesomeIcon
                        icon={faEarth}
                        className="me-5 font-extrabold h-5"
                      />
                      <div className="fa fa-col">
                        <p data-v-2c279a3f="">
                          {translate("contact-us.address", data)}
                        </p>
                        <span data-v-2c279a3f="">
                          {translate("contact-us.address-value", data)}
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
