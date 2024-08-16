import Link from "next/link";
import Banner from "../components/Banner";
import { getStrapiMedia } from "../utils/api-helpers";
import { getLanguageFile } from "../utils/get-language-file";
import translate from "../utils/translate";
import RegisterApplicationForm from "./register-application-form";

export default async function RegisterApplication({
  params,
}: {
  params: { lang: string };
}) {
  const languageFile = await getLanguageFile(params.lang);
  let data = languageFile?.data?.attributes.text;

  return (
    <>
      <Banner>
        <div className="flex flex-col  items-center text-center  text-white py-8">
          <div className="flex flex-col mx-auto justify-center">
            <h1 className="font-extrabold text-2xl">
              {translate("register-application.title", data)}
            </h1>
            <p className="mt-10 font-light text-center text-white dark:text-gray-400 sm:text-lg md:text-md">
              {translate("register-application.subtitle1", data)}
            </p>
          </div>
        </div>
      </Banner>

      <div className="container mx-auto flex flex-col justify-center mb-10 bg-white dark:bg-gray-900">
        <div className="flex flex-col w-full">
          <div className="flex flex-col py-5 px-4 w-full">
            <p className="mt-10 font-light text-center text-black dark:text-gray-400 sm:text-lg md:text-md">
              {translate("register-application.download-resume", data)}
              <a
                className="text-blue-600"
                href={`${getStrapiMedia(
                  "/uploads/frm_astkhdam_dc1143d9be.xls"
                )}`}
              >
                {translate("register-application.file", data)}
              </a>
            </p>
            <RegisterApplicationForm data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
