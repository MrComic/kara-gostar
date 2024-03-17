import { Carousel } from "flowbite-react";
import LangRedirect from "./components/LangRedirect";
import { sectionRenderer } from "./utils/section-renderer";
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";
import Glide from "./components/glide";
import { getStrapiMedia } from "./utils/api-helpers";
import HomeSlider from "./slider";
import PartnersSlider from "./partners";
import { height } from "@fortawesome/free-solid-svg-icons/faPhone";
import Footer from "./components/Footer";
import CompanyRules from "./home-company-rules";

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  return (
    <>
      <section
        className="flex flex-row justify-center items-center"
        style={{
          background: `url("${getStrapiMedia(
            "/uploads/main_554646b309.png"
          )}")`,
          // background:
          //   "url('http://localhost:1337/uploads/20180220_093628_09030780df.jpg')",
          // "background-blend-mode": "multiply",
        }}
      >
        <div className="max-w-screen-2xl grid grid-cols-2 p-3 ">
          <div>
            <img src={getStrapiMedia("/uploads/main_3255edbcd3.jpg") || ""} />
          </div>
          <div className=" flex flex-col sm:text-end justify-end items-end sm:mb-0  mx-auto">
            <div className="h-96 my-3">
              <h1 className="text-white pb-5 text-start text-2xl">
                شرکت مهندسی
                <span className="text-red-700"> کاراگستر </span>
              </h1>
              <p className=" mb-6 font-light lg:mb-8 text-lg  leading-10 text-justify text-gray-300">
                شرکت مهندسی کارگستر در سال 1372 تاسیس شد و در زمینه طراحی و ساخت
                انواع قطعات ماشین آلات و قالب های صنعتی و تجهیزات جانبی صنایع از
                جمله قالب های پخت لاستیک و سایر محصولات لاستیکی - ارائه خدمات
                فنی و مهندسی و اخذ تاییدیه و مجوزهای قانونی اولیه ساخت و بهره
                برداری کارخانجات ساخت قطعات و ماشین آلات صنعتی و قالب - واردات و
                صادرات قطعات یدکی و ماشین آلات و قالب های صنعتی و اخذ نمایندگی
                داخلی و خارجی و انجام کلیه امور مربوط به موارد فوق.
              </p>
              <a
                href="/fa/contact-us"
                className="inline-flex me-3 items-center justify-center px-5 py-3 
               font-medium text-center text-gray-900 border border-gray-300 rounded-lg
                hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white
                 border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
              >
                تماس با ما
              </a>
              <a
                href="/fa/products"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center
               text-gray-900 border border-red-300 rounded-lg hover:bg-red-100 focus:ring-4 focus:ring-red-100
                text-white border-red-700 hover:bg-red-700 focus:ring-red-800"
              >
                محصولات
              </a>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: "#212830" }}>
        <div className="text-gray-300">
          <div className="max-w-screen-2xl mx-auto py-16 ">
            <div className="grid grid-cols-2">
              <CompanyRules></CompanyRules>
              <img
                className="ps-32 pe-5 object-fit"
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
            کاراگستر در یک نگاه
          </h1>

          <div className="max-w-screen-2xl mx-auto ">
            <div className="grid grid-cols-5 justify-center">
              <div
                style={{ height: 500, marginTop: -68 }}
                className="text-gray-300 col-span-1 justify-end flex"
              >
                <img src={getStrapiMedia("/uploads/TIRE_2_7a240e6ee9.png")} />
              </div>
              <div className="text-start col-span-3">
                <video
                  style={{
                    height: "400px",
                    width: "100%",
                  }}
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
                  Your browser does not support the video tag.
                </video>
              </div>

              <div
                style={{ height: 500, marginTop: -68 }}
                className="text-gray-300 justify-start flex col-span-1"
              >
                <img src={getStrapiMedia("/uploads/TIRE_1_8f51fdcd66.png")} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-300">
        <div className="grid grid-cols-5 max-w-screen-2xl py-4 mx-auto text-center items-center lg:py-4 ">
          <div className="col-span1 text-start px-4">
            <h2 className="text-2xl text-black">برخی از مشتریان</h2>
          </div>
          <div className="col-span-4 flex flex-row items-start">
            <PartnersSlider></PartnersSlider>
          </div>
        </div>
      </div>
 */}

      <div style={{ background: "#212830" }}>
        <div className="relative overflow-hidden grid grid-cols-2 max-w-screen-2xl py-4 mx-auto text-center items-center lg:py-4 ">
          <div
            style={{ height: "500px" }}
            className="col-span-1 flex flex-row justify-center"
          >
            <img
              style={{ height: "500px" }}
              className="animate-spin animate-infinite animate-duration-[60000ms]"
              src={getStrapiMedia("/uploads/Capture_2_ea7729d813.png")}
            />
            <div className="flex text-white absolute top-1/2 -mt-3.5 justify-center items-center w-full text-center">
              <p className=" text-xl">برخی از مشتریان ما</p>
            </div>
          </div>
          <div className="col-span-1  text-white text-start text-xl">
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
              <p>
                طي روشي مشخص و مدون رضايت مشتريان ، اطلاعات ، نظرات و شكايات
                مشتريان بطور مستمر جمع آوري و مورد بررسي و ارزيابي قرار مي گيرند
                و بر اساس آن ميزان رضايت مشتري اندازه گيري مي شود .
              </p>
              <ol
                style={{ listStyle: "outside", listStyleType: "upper-roman" }}
              >
                <li>
                  <p>
                    نظر خواهي از مشتري سالي يكبار با استفاده از فرم نظر خواهي
                    انجام ميشود كه اين فرم طي دو مرحله تکمیل میگردد:
                  </p>
                  <ul style={{ listStyle: "inside" }}>
                    <li>توسط كاراگستر براساس مذاكرات مدير عامل با مشتريان</li>
                    <li> توسط مشتري </li>
                  </ul>
                </li>
                <li>
                  <p>
                    {" "}
                    گزارشات خدمات پس از فروش اين اطلاعات جمع آوري شده و ساليانه
                    طبق دستور مورد تجزيه و تحليل قرار ميگيرد.{" "}
                  </p>
                  <ol style={{ listStyle: "inside" }}>
                    <li>
                      درصورتيكه ميزان عدم رضايت مشتري خيلي شاخص وبحراني تشخيص
                      داده شود ، اين گزارش جهت طرح در كميته بازنگري مديريت آماده
                      مي شود .
                    </li>
                  </ol>
                </li>
              </ol>
            </blockquote>
            <div className="flex justify-end w-full">
              <svg
                style={{ height: "30px;" }}
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
  try {
    const page = await getPageBySlug("home", params.lang);
    if (page.error && page.error.status == 401)
      throw new Error(
        "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
      );

    if (page.data.length == 0 && params.lang !== "en") return <LangRedirect />;
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) =>
      sectionRenderer(section, index)
    );
  } catch (error: any) {
    window.alert("Missing or invalid credentials");
  }
}
