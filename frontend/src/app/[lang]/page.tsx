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
                "/uploads/header_9ce715cd3d.jpg"
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
              <h1 className="text-lg text-white">
                {translate("home.section1.main-heading", data)}
                <span className="text-white">
                  {translate("home.section1.title", data)}
                </span>
              </h1>
              <h2 className="text-lg text-white pt-5">
                {translate("home.section1.slogan", data)}
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

        <section className="container hidden md:hidden lg:flex xl:flex 2xl:flex pt-14 ">
          <section
            className="flex flex-row justify-start items-end   relative w-full p-20"
            style={{
              background: `url('${getStrapiMedia(
                "/uploads/header_9ce715cd3d.jpg"
              )}')`,
              backgroundBlendMode: "multiply",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "contain",
              height: "100dvh",
            }}
          >
            <div
              className="flex flex-col justify-items-end p-10 "
              style={{
                backgroundColor: "rgba(55,65,80,0.3)",
                position: "absolute",
                borderRadius: "5px",
                top: "50dvh",
              }}
            >
              <h1 className="text-4xl text-white">
                {translate("home.section1.main-heading", data)}
                <span className="text-white">
                  {" "}
                  {translate("home.section1.title", data)}
                </span>
              </h1>
              <h2 className="text-lg text-white pt-5">
                {translate("home.section1.slogan", data)}
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
          <div className="max-w-screen-2xl mx-auto pt-16 px-3 py-16">
            <h2 className="w-full text-center text-lg lg:text-4xl xl:text-4xl  mb-9">
              {translate("home.section1.about-company-title", data)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 text-lg lg:text-lg xl:text-lg 2xl:text-lg text-justify ">
              {/* 
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
               */}
              {translate("home.section1.about-company", data)}
            </div>
          </div>
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
        <div className="flex justify-start flex-col h-full items-center">
          <h1 className="text-lg sm:text-lg md:text-lg xl:text-lg 2xl:text-3xl py-6 text-white">
            {translate("home.address.title", data)}
          </h1>
          <h1 className="text-white text-lg sm:text-lg md:text-lg xl:text-lg 2xl:text-3xl text-white">
            {translate("home.address.value", data)}
          </h1>
        </div>
      </section>

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

      <div
        style={{ background: "#212830" }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"
      >
        <div className="text-gray-300 p-6">
          <div className="max-w-screen-2xl mx-auto px-10 flex items-center flex-col h-full justify-center">
            <h2 className="w-full text-center text-lg sm:text-lg md:text-lg lg:text-3xl xl:text-3xl 2xl:text-3xl mb-9">
              {translate("home.ISO.title", data)}
            </h2>
            <div className=" text-lg text-justify md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
              {/* شرکت کاراگستر در سال 2002 ميلادی موفق به اخذ گواهينامه سيستم
              مديريت کيفيت ISO 9001 شده و هرساله علاوه بر اجرای مميزی های داخلی،
              توسط مميزين شرکت TUV Nord مورد مميزی قرار می گيرد. */}
              {translate("home.ISO.value", data)}
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

      <div>
        <div
          style={{
            background: "linear-gradient(to bottom,  #2d2e30 0%,#565759 100%)",
          }}
        >
          <h2 className="text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-white text-center p-5">
            {translate("home.section3.title", data)}
          </h2>

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
              <p className="md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
                {translate("home.section4.title", data)}
              </p>
            </div>
          </div>
          <div className="p-8 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-5 xl:col-span-7 2xl:col-span-8 text-white text-start md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
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
