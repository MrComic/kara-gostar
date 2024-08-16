"use client";
import { useState } from "react";
import translate from "./utils/translate";

export default function CompanyRules({
  params,
}: {
  params: { lang: string; language: any };
}) {
  let [readMore, setReadmore] = useState(false);

  return (
    <>
      <div className="text-start">
        <h2 className="text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-center">
          {translate("home.section2.title", params.language)}
        </h2>
        <p className="mt-4 text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-justify">
          {translate("home.section2.1", params.language)}
        </p>
        <ul className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-justify list-disc list-inside">
          <li>{translate("home.section2.2", params.language)}</li>
          <li>{translate("home.section2.3", params.language)}</li>
          <li> {translate("home.section2.4", params.language)}</li>
          <li> {translate("home.section2.5", params.language)}</li>
          <li> {translate("home.section2.6", params.language)}</li>
          {translate("home.section2.7", params.language) != "" ? (
            <li> {translate("home.section2.7", params.language)}</li>
          ) : (
            ""
          )}
        </ul>

        {readMore == true ? (
          <>
            <div>
              <br />
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-xl mb-5  text-bold text-justify">
                {translate("home.section2.8", params.language)}
              </h3>
              <ol className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-justify list-disc list-inside">
                <li>{translate("home.section2.9", params.language)}</li>
                <li> {translate("home.section2.10", params.language)}</li>
                <li> {translate("home.section2.11", params.language)}</li>
              </ol>
              <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-justify">
                {translate("home.section2.12", params.language)}
              </p>
              <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-justify">
                {translate("home.section2.13", params.language)}
              </p>
            </div>
            <div className="flex w-full justify-center pt-10">
              <button
                onClick={() => {
                  setReadmore(false);
                }}
                className="text-center bg-transparent hover:bg-red-700 text-white font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded"
              >
                {translate("home.section2.closeDetail", params.language)}
              </button>
            </div>
          </>
        ) : (
          <div className="flex w-full justify-center pt-10">
            <button
              onClick={() => {
                setReadmore(true);
              }}
              className="text-center bg-transparent hover:bg-red-700 text-white font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded"
            >
              {translate("home.section2.openDetail", params.language)}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
