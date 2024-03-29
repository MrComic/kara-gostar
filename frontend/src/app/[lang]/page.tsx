import { getStrapiMedia } from "./utils/api-helpers";
import CompanyRules from "./home-company-rules";
import { getLanguageFile } from "./utils/get-language-file";
import translate from "./utils/translate";

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  const languageFile = await getLanguageFile(params.lang);
  let data = languageFile?.data?.attributes.text;

  return (
    <>
      <section
        className="flex flex-row justify-center items-center"
        style={{
          background: `url("${getStrapiMedia(
            "/uploads/main_554646b309.png"
          )}")`,
        }}
      >
        <div className="max-w-screen-2xl grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 px-5 text-justify sm:grid-cols-1 ">
          <div className="hidden sm:hidden lg:block md:hidden xl:block 2xl:block">
            <img
              className="w-full h-full"
              src={getStrapiMedia("/uploads/main_3255edbcd3.jpg") || ""}
            />
          </div>
          <div className=" flex flex-col relative sm:text-end justify-end items-center sm:mb-0 mx-auto ">
            <img
              src={getStrapiMedia("/uploads/main_3255edbcd3.jpg") || ""}
              className="absolute top-0 z-0 w-full h-full sm:visible md:visible lg:hidden xl:hidden 2xl:hidden"
            />
            <div className="my-3 relative flex flex-col justify-center h-full">
              <h1 className="text-white pb-5 text-center sm:text-center md:text-center xl:text-start 2xl:text-start lg:text-start text-2xl">
                {translate("home.section1.main-heading", data)} &nbsp;
                <span className="text-red-700">
                  {translate("home.section1.title", data)}
                </span>
              </h1>
              <p className=" mb-6 font-light lg:mb-8 text-lg  leading-10 text-justify text-gray-300">
                {translate("home.section1.about-company", data)}
              </p>
              <div className="flex flex-row justify-center">
                <a
                  href="/fa/contact-us"
                  className="inline-flex me-3 justify-self-center px-5 py-3 
               font-medium text-center text-gray-900 border border-gray-300 rounded-lg
                hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white
                 border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
                >
                  {translate("home.section1.contact-us", data)}
                </a>
                <a
                  href="/fa/products"
                  className="inline-flex  justify-self-center px-5 py-3 text-base font-medium text-center
               text-gray-900 border border-red-300 rounded-lg hover:bg-red-100 focus:ring-4 focus:ring-red-100
                text-white border-red-700 hover:bg-red-700 focus:ring-red-800"
                >
                  {translate("home.section1.view-products", data)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: "#212830" }}>
        <div className="text-gray-300">
          <div className="max-w-screen-2xl mx-auto py-16 px-3">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 text-justify">
              <div className="order-last sm:order-last md:order-last lg:order-first xl:order-first 2xl:order-first">
                <CompanyRules
                  params={{ lang: params.lang, language: data }}
                ></CompanyRules>
              </div>
              <img
                className=" mx-auto object-fit order-first sm:order-first lg:order-last xl:order-last 2xl:order-last"
                src={getStrapiMedia("/uploads/background_cc3915025b.png") || ""}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            background: "linear-gradient(to bottom,  #2d2e30 0%,#565759 100%)",
          }}
        >
          <h1 className="text-xl text-white text-center p-5">
            {translate("home.section3.title", data)}
          </h1>

          <div className="max-w-screen-2xl mx-auto ">
            <div className="grid grid-cols-5 justify-center">
              <div
                style={{ height: 500, marginTop: -68 }}
                className="text-gray-300 col-span-1 justify-start flex"
              >
                <img
                  src={getStrapiMedia("/uploads/TIRE_2_7a240e6ee9.png") || ""}
                />
              </div>
              <div className="text-start col-span-3">
                <video
                  style={{
                    height: "400px",
                    width: "100%",
                  }}
                  className="object-cover"
                  autoPlay
                  muted
                  controls
                >
                  <source
                    src={
                      getStrapiMedia(
                        "/uploads/4_5825592244706481604_040ea44d54.mp4"
                      ) || ""
                    }
                    type="video/mp4"
                  />
                </video>
              </div>

              <div
                style={{ height: 500, marginTop: -68 }}
                className="text-gray-300 justify-end flex col-span-1"
              >
                <img
                  src={getStrapiMedia("/uploads/TIRE_1_8f51fdcd66.png") || ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#212830" }}>
        <div
          className="relative overflow-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-12
         container py-4 mx-auto text-center items-center lg:py-4 "
        >
          <div
            style={{ height: "500px" }}
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-5 xl:col-span-5 2xl:col-span-4 flex flex-row items-center justify-center"
          >
            <img
              style={{ maxHeight: "500px", minWidth: "350px" }}
              className="animate-spin absolute animate-infinite animate-duration-[60000ms]"
              src={getStrapiMedia("/uploads/Capture_2_ea7729d813.png") || ""}
            />
            <div className="flex text-white justify-center items-center  text-center">
              <p className=" text-xl">
                {translate("home.section4.title", data)}
              </p>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-5 xl:col-span-7 2xl:col-span-8 text-white text-start text-xl">
            <div className="flex justify-start w-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="text-white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                />
              </svg>
            </div>
            <blockquote>
              <p>{translate("home.section4.1", data)}</p>
              <ol style={{ listStyle: "inside", listStyleType: "decimal" }}>
                <li>
                  <span>{translate("home.section4.2", data)}</span>
                  <ul style={{ listStyle: "inside" }}>
                    <li>{translate("home.section4.3", data)}</li>
                    <li>{translate("home.section4.4", data)}</li>
                  </ul>
                </li>
                <li>
                  <span>{translate("home.section4.5", data)}</span>
                  <ol style={{ listStyle: "inside" }}>
                    <li>{translate("home.section4.6", data)}</li>
                  </ol>
                </li>
              </ol>
            </blockquote>
            <div className="flex justify-end w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="text-white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
