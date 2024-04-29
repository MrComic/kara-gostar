import { getStrapiMedia } from "./utils/api-helpers";
import CompanyRules from "./home-company-rules";
import { getLanguageFile } from "./utils/get-language-file";
import translate from "./utils/translate";
import HomePageSlider from "./slider";

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  const languageFile = await getLanguageFile(params.lang);
  let data = languageFile?.data?.attributes.text;

  return (
    <section className="">
      <div className="flex flex-row justify-center items-center sm:mt-0 md:mt-0 lg:-mt-[60px] 2xl:-mt-[60px] xl:-mt-[60px]">
        <section className="w-screen  visible md:visible lg:hidden xl:hidden 2xl:hidden">
          <section
            className="flex flex-row justify-center items-center  relative w-full"
            style={{
              background: `url('${getStrapiMedia(
                "/uploads/Screenshot_2024_04_18_142659_11d42a78fb.png"
              )}')`,
              backgroundBlendMode: "multiply",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "cover",
              height: "50dvh",
            }}
          >
            <div
              className="flex flex-col justify-items-center p-10"
              style={{
                backgroundColor: "rgba(55,65,80,0.7)",
              }}
            >
              <h1 className="text-2xl text-white">
                شرکت مهندسی <span className="text-white">کاراگستر</span>
              </h1>
              <h2 className="text-lg text-white pt-5">
                تولید کننده قالب تایر و پرس پخت
              </h2>
              <div className="pt-7 flex justify-items-center justify-center">
                <a
                  href="/fa/contact-us"
                  className="me-3 px-5 py-3 
               font-medium text-center border border-gray-300 rounded-lg
                hover:bg-red-500 focus:ring-4 focus:ring-gray-100 text-white
                border-red-700 bg-red-700 focus:ring-red-800"
                >
                  {translate("home.section1.contact-us", data)}
                </a>
              </div>
            </div>
          </section>
        </section>

        <section className="w-screen  hidden md:hidden lg:flex xl:flex 2xl:flex ">
          <section
            className="flex flex-row justify-start items-end   relative w-full p-20"
            style={{
              background: `url('${getStrapiMedia(
                "/uploads/Screenshot_2024_04_18_142659_11d42a78fb.png"
              )}')`,
              backgroundBlendMode: "multiply",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "cover",
              height: "100dvh",
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
                شرکت مهندسی <span className="text-white">کاراگستر</span>
              </h1>
              <h2 className="text-2xl text-white pt-5">
                تولید کننده قالب تایر و پرس پخت
              </h2>
              <div className="pt-7 flex justify-items-end justify-end">
                <a
                  href="/fa/contact-us"
                  className="me-3 px-5 py-3 
               font-medium text-center border border-gray-300 rounded-lg
                hover:bg-red-500 focus:ring-4 focus:ring-gray-100 text-white
                border-red-700 bg-red-700 focus:ring-red-800"
                >
                  {translate("home.section1.contact-us", data)}
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>

      <div style={{ background: "#212830" }}>
        <div className="text-gray-300">
          <div className="max-w-screen-2xl mx-auto pt-16 px-3">
            <h2 className="w-full text-center text-2xl lg:text-4xl xl:text-4xl  mb-9">
              مختصری درباره شرکت
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl text-justify">
              شرکت مهندسی کاراگستر فعاليت خود را از سال 1372با هدف تأمين و توليد
              انواع قالب تاير آغاز نموده است. اين شرکت از بدو فعاليت خود با اتکا
              به دانش، تخصص،ماشین الات پیشرفته و تجربه کارشناسان خود توانسته است
              نياز کارخانجات تاير سازی را مرتفع نمايد. شرکت کاراگسترظرفيت توليد
              خود را به 600 دست انواع قالب تاير، تيوب ، بلادر و فلپ در سال
              رساند. شرکت کاراگستر در سال 2012 موفق به امضای قرارداد همکاری و
              انتقال دانش فنی ساخت انواع پرس پخت تاير گرديد و هم اکنون قادر است
              نيآز مشتری در ارتباط با خريد پرس پخت را مرتفع سازد. شرکت مهندسی
              کاراگستر با بهره گیری از ماشین الات دقیق و نیروی متخصص امکان ارایه
              خدمات فنی ، مهندسی و تولیدی جهت سایر صنایع نیازمند قطعات با دقت
              بالا مانند صنایع نیروگاهی ، هواپیمایی ، پتروشیمی و ... را دارا می
              باشد.
            </div>
          </div>
          <section>
            <div className="text-white max-w-screen-xl px-4 py-5 mx-auto text-center lg:py-16 lg:px-6">
              <dl className="grid  gap-8 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
                <div
                  className="text-white flex flex-col p-8 items-center justify-center"
                  style={{
                    borderRadius: "10px",
                    "--tw-bg-opacity": 1,
                    padding: "20px",
                    backgroundColor: "rgb(41 50 63)",
                    "--tw-shadow":
                      "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)",
                    "--tw-shadow-colored":
                      "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
                    "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <dt>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-600 lg:h-12 lg:w-12 ">
                      <svg
                        className="w-7 h-7 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </dt>

                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    +100
                  </dt>
                  <dd className="font-light text-white dark:text-gray-400">
                    نفر پرسنل متخصص
                  </dd>
                </div>
                <div
                  className="flex flex-col text-white items-center justify-center"
                  style={{
                    borderRadius: "10px",
                    "--tw-bg-opacity": 1,
                    padding: "20px",
                    backgroundColor: "rgb(41 50 63)",
                    "--tw-shadow":
                      "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)",
                    "--tw-shadow-colored":
                      "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
                    "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <dt>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-600 lg:h-12 lg:w-12 ">
                      <svg
                        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                    </div>
                  </dt>
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    +1000
                  </dt>
                  <dd className="font-light text-white dark:text-gray-400">
                    پروژه موفق
                  </dd>
                </div>
                <div
                  className="flex flex-col text-white items-center justify-center"
                  style={{
                    borderRadius: "10px",
                    "--tw-bg-opacity": 1,
                    padding: "20px",
                    backgroundColor: "rgb(41 50 63)",
                    "--tw-shadow":
                      "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)",
                    "--tw-shadow-colored":
                      "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
                    "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <dt>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-600 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg
                        className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </dt>
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    +500
                  </dt>
                  <dd className="font-light text-white dark:text-gray-400">
                    محصول متنوع
                  </dd>
                </div>
                <div
                  className="flex flex-col text-white items-center justify-center"
                  style={{
                    borderRadius: "10px",
                    "--tw-bg-opacity": 1,
                    padding: "20px",
                    backgroundColor: "rgb(41 50 63)",
                    "--tw-shadow":
                      "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)",
                    "--tw-shadow-colored":
                      "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
                    "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <dt>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-600 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg
                        className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </dt>
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    +500
                  </dt>
                  <dd className="font-light text-white dark:text-gray-400">
                    محصول متنوع
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>

      <section
        className=" relativen p-10 h-[300px] sm:h-[300px] md:h-[300px] lg:h-[600px] xl:h-[600px]"
        style={{
          background: `url('${getStrapiMedia(
            "/uploads/header3_76469aa713.jpg"
          )}')`,
          flexWrap: "wrap",
          backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "cover",
          backgroundColor: "rgba(55,65,81,0.7)",
        }}
      >
        <div className="flex justify-center flex-col h-full items-center">
          <h1 className="text-2xl sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl py-6 text-white">
            دفتر مرکزی شرکت :
          </h1>
          <h1 className="text-white text-2xl sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl text-white">
            تهران شهر قدس (قلعه حسنخان)، بلوار انقلاب، خیابان صنعت 2، مجتمع
            صنعتی پویا، پلاک 6
          </h1>
        </div>
      </section>

      <div
        style={{ background: "#212830" }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"
      >
        <div className="text-gray-300 p-6">
          <div className="max-w-screen-2xl mx-auto px-10 flex items-center flex-col h-full justify-center">
            <h2 className="w-full text-center text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl mb-9">
              گواهينامه ISO 9001
            </h2>
            <div className=" text-lg text-justify md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
              شرکت کاراگستر در سال 2002 ميلادی موفق به اخذ گواهينامه سيستم
              مديريت کيفيت ISO 9001 شده و هرساله علاوه بر اجرای مميزی های داخلی،
              توسط مميزين شرکت TUV Nord مورد مميزی قرار می گيرد.
            </div>
          </div>
        </div>
        <div
          style={{
            height: "600px",
            background: `url('${getStrapiMedia(
              "/uploads/iso9001_2fb3478d85.jpg"
            )}')`,
            flexWrap: "wrap",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 160%",
            backgroundPosition: "contain",
            backgroundColor: "rgba(55,65,81,0.3)",
          }}
        ></div>
      </div>

      <div style={{ background: "#212830" }}>
        <div className="text-gray-300">
          <div className="mx-auto py-16 px-3">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 text-justify">
              <div className="order-first sm:order-first md:order-first lg:order-first xl:order-first 2xl:order-last flex items-center flex-col h-full justify-center p-6">
                <CompanyRules
                  params={{ lang: params.lang, language: data }}
                ></CompanyRules>
              </div>
              <img
                className=" mx-auto object-fit order-last sm:order-last lg:order-first xl:order-first 2xl:order-first p-6"
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
          <h1 className="text-4xl text-white text-center p-5">
            {translate("home.section3.title", data)}
          </h1>

          <div className="max-w-screen-2xl mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 justify-center">
              <div
                style={{ height: 500, marginTop: -68 }}
                className="text-gray-300 col-span-1 justify-start  hidden md:hidden lg:flex xl:flex 2xl:flex"
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
                className="text-gray-300 justify-end col-span-1 hidden md:hidden lg:flex xl:flex 2xl:flex"
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
              <p className="md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                {translate("home.section4.title", data)}
              </p>
            </div>
          </div>
          <div className="p-8 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-5 xl:col-span-7 2xl:col-span-8 text-white text-start md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
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
    </section>
  );
}
