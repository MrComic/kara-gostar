"use client";
import Banner from "../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { faEarth } from "@fortawesome/free-solid-svg-icons/faEarth";
import { faA } from "@fortawesome/free-solid-svg-icons";
import translate from "../utils/translate";
import { getLanguageFile } from "../utils/get-language-file";
import ContactForm from "./components/contact-form";
import ContactMap from "./components/map";

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  const languageFile = await getLanguageFile(params.lang);
  let data = languageFile?.data?.attributes.text;

  return (
    <>
      <Banner>
        <div className="flex flex-col  items-center text-center  text-white py-10">
          <div className="flex flex-col  mx-auto justify-center">
            <h1 className="font-extrabold text-4xl">
              {translate("contact-us.title", data)}
            </h1>
            <p className="mt-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
              {translate("contact-us.subtitle", data)}
            </p>
          </div>
        </div>
      </Banner>

      <div className="container mx-auto flex flex-row justify-center mt-10 mb-10 bg-white dark:bg-gray-900">
        <div className="m-4 flex flex-col">
          <ContactMap />
          <div className=" grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 py-8 lg:py-16 px-4 w-full">
            <ContactForm data={data} />
            <div className="order-first sm:order-first xl:order-last 2xl:order-last lg:order-last">
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
