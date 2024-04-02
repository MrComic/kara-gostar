import Banner from "../components/Banner";
import { getLanguageFile } from "../utils/get-language-file";
import translate from "../utils/translate";

export default async function RegisterApplication(params: { lang: string }) {
  const languageFile = await getLanguageFile(params.lang);
  let data = languageFile?.data?.attributes.text;

  return (
    <>
      <Banner>
        <div className="flex flex-col  items-center text-center  text-white py-8">
          <div className="flex flex-col max-w-screen-2xl flex-row mx-auto justify-center">
            <h1 className="font-extrabold text-4xl">
              {translate("register-application.title", data)}
            </h1>
            <p className="mt-10 font-light text-center text-white dark:text-gray-400 sm:text-xl">
              {translate("register-application.subtitle1", data)}
            </p>
            <p className="mt-2 font-light text-center text-white dark:text-gray-400 sm:text-xl">
              {translate("register-application.subtitle2", data)}
            </p>
          </div>
        </div>
      </Banner>

      <div className="w-8/12 mx-auto flex flex-row justify-center mb-10 bg-white dark:bg-gray-900">
        <div className="m-4 flex flex-row w-full">
          <div className="flex flex-row py-8 lg:py-16 px-4 w-full"></div>
        </div>
      </div>
    </>
  );
}
