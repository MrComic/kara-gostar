import { Carousel } from "flowbite-react";
import LangRedirect from "./components/LangRedirect";
import { sectionRenderer } from "./utils/section-renderer";
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";
import Glide from "./components/glide";

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  return (
    <>
      <section
        className="relative"
        style={{
          background:
            "url('http://localhost:1337/uploads/20180220_093628_09030780df.jpg')",
          "background-blend-mode": "multiply",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "50%",
          "--tw-bg-opacity": "1",
          "background-color": "rgb(55 65 81/var(--tw-bg-opacity))",
        }}
      >
        <div className="grid max-w-screen-2xl grid-cols-2 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <div className="h-96">
            <h1 className="max-w-2xl mb-4 text-xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">
              شرکت مهندسی کاراگستر
            </h1>
            <p className="hidden">
              پایه یک متعهد به کیفیت، ایمنی، التزام به برنامه زمانبندی و احترام
              به تعهدات قراردادی
            </p>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400 ">
              شرکت مهندسی کارگستر در سال 1372 تاسیس شد و در زمینه طراحی و ساخت
              انواع قطعات ماشین آلات و قالب های صنعتی و تجهیزات جانبی صنایع از
              جمله قالب های پخت لاستیک و سایر محصولات لاستیکی - ارائه خدمات فنی
              و مهندسی و اخذ تاییدیه و مجوزهای قانونی اولیه ساخت و بهره برداری
              کارخانجات ساخت قطعات و ماشین آلات صنعتی و قالب - واردات و صادرات
              قطعات یدکی و ماشین آلات و قالب های صنعتی و اخذ نمایندگی داخلی و
              خارجی و انجام کلیه امور مربوط به موارد فوق.
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
          <div className="flex justify-center">
            <Carousel slideInterval={5000}>
              <img
                src="http://127.0.0.1:1337/uploads/IMG_6107_95086858be.jpg"
                alt="..."
                style={{
                  "background-size": "cover",
                }}
              />
              <img
                src="http://127.0.0.1:1337/uploads/IMG_6107_95086858be.jpg"
                alt="..."
                style={{
                  "background-size": "cover",
                }}
              />
            </Carousel>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="text-black">
          <div className="max-w-screen-2xl mx-auto py-16 ">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                حوزه‌های فعالیت شرکت
              </h2>
              <p className="mt-4 text-xl">
                جذب رضایت مشتریان تنها با ارائه خدمات باکیفیت امکان پذیر است، ما
                نیز تمام تلاشمان در جهت کسب رضایت شماعزیزان است.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-4 gap-4">
              <img
                src="http://127.0.0.1:1337/uploads/1_97867bd3c5.png"
                alt=""
                className="w-full h-auto col-span-2 rounded-lg"
                style={{
                  height: "300px",
                  "aspect-ratio": "300 / 200",
                  "object-fit": "cover",
                }}
              />
              <img
                src="http://127.0.0.1:1337/uploads/FINAL_27_9fae161436.jpg"
                alt=""
                className="w-full h-auto rounded-lg col-span-1	"
                style={{
                  height: "300px",
                  "aspect-ratio": "300 / 200",
                  "object-fit": "cover",
                }}
              />
              <img
                src="http://127.0.0.1:1337/uploads/FINAL_27_9fae161436.jpg"
                alt=""
                className="w-full h-auto rounded-lg col-span-1	"
                style={{
                  height: "300px",
                  "aspect-ratio": "300 / 200",
                  "object-fit": "cover",
                }}
              />
              <img
                src="http://127.0.0.1:1337/uploads/FINAL_27_9fae161436.jpg"
                alt=""
                className="w-full h-auto rounded-lg col-span-1	"
                style={{
                  height: "300px",
                  "aspect-ratio": "300 / 200",
                  "object-fit": "cover",
                }}
              />
              <img
                src="http://127.0.0.1:1337/uploads/2_d72dc5e9a3.png"
                alt=""
                className="w-full h-auto col-span-2 rounded-lg"
                style={{
                  height: "300px",
                  "aspect-ratio": "300 / 200",
                  "object-fit": "cover",
                }}
              />
              <img
                src="http://127.0.0.1:1337/uploads/FINAL_20_389ec60bc2.jpg"
                alt=""
                className="w-full h-auto rounded-lg col-span-1	"
                style={{
                  height: "300px",
                  "aspect-ratio": "300 / 200",
                  "object-fit": "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-700">
        <div className="grid grid-cols-5 max-w-screen-2xl py-8 mx-auto text-center items-center lg:py-16 ">
          <div className="col-span1 text-start px-4">
            <h2 className="text-3xl text-white">برخی از مشتریان</h2>
          </div>
          <div className="col-span-4 flex flex-row items-start">
            <Glide>
              <img
                className="px-4"
                src="http://127.0.0.1:1337/uploads/yokohama_1656309400_2aa53826f5.png"
                alt="..."
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                src="http://127.0.0.1:1337/uploads/toyo_tires_1656328813_62880905f1.png"
                alt="..."
                className="px-4"
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                src="http://127.0.0.1:1337/uploads/sumitomo_1535202312_71413a506a.png"
                alt="..."
                className="px-4"
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                src="http://127.0.0.1:1337/uploads/titan_1656328754_2573892588.png"
                alt="..."
                className="px-4"
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                src="http://127.0.0.1:1337/uploads/cordiant_1656329001_0960a93fb8.png"
                alt="..."
                className="px-4"
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                src="http://127.0.0.1:1337/uploads/belshina_1529324822_a80228303f.jpg"
                alt="..."
                className="px-4"
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                src="http://127.0.0.1:1337/uploads/continental_1529325836_30027dbfca.jpg"
                alt="..."
                className="px-4"
                style={{
                  "background-size": "cover",
                }}
              />
            </Glide>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 mx-auto text-center ">
          <div className="items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light  sm:text-lg text-gray-400 pe-10">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <blockquote>
                  <p className="text-xl font-medium dark:text-white md:text-2xl text-gray-900">
                    "یکی از عوامل اصلی موفقیت شرکت ها و بنگاههای اقتصادی داشتن
                    تعهد ، تخصص ، خلاقیت و احترام به خواسته های مشتریان می باشد
                    و شرکت هایی موفق خواهند بود که بتوانند با دقت و ریزبینی به
                    نظارت و خواسته های مشتریان گوش فراداده و سپس آن را با دانش و
                    فناوری نوین آمیخته و یک اثر ماندگار خلق کنند"
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="ps-2 font-medium dark:text-white  text-gray-900">
                      آقای ....
                    </div>
                    <div className="pe-3 ps-1 text-sm font-light dark:text-white  text-gray-500">
                      مدیر عامل <span className="text-red-600">کاراگستر</span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-full rounded-lg"
                src="http://127.0.0.1:1337/uploads/20180220_111733_350c13abfc.jpg"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                style={{ height: "400px" }}
                src="http://127.0.0.1:1337/uploads/20180220_155549_97982010e4.jpg"
                alt="office content 2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600">
        <div className="grid grid-cols-5 max-w-screen-2xl py-8 mx-auto text-center items-center lg:py-16 ">
          <div className="col-span1 text-start px-4">
            <h2 className="text-3xl text-white">گواهی های اخذ شده</h2>
          </div>
          <div className="col-span-4 flex flex-row items-start">
            <Glide>
              <img
                className="px-4"
                src="http://127.0.0.1:1337/uploads/yokohama_1656309400_2aa53826f5.png"
                alt="..."
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                className="px-4"
                src="http://127.0.0.1:1337/uploads/toyo_tires_1656328813_62880905f1.png"
                alt="..."
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                className="px-4"
                src="http://127.0.0.1:1337/uploads/sumitomo_1535202312_71413a506a.png"
                alt="..."
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                className="px-4"
                src="http://127.0.0.1:1337/uploads/titan_1656328754_2573892588.png"
                alt="..."
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                className="px-4"
                src="http://127.0.0.1:1337/uploads/cordiant_1656329001_0960a93fb8.png"
                alt="..."
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                className="px-4"
                src="http://127.0.0.1:1337/uploads/belshina_1529324822_a80228303f.jpg"
                alt="..."
                style={{
                  "background-size": "cover",
                }}
              />

              <img
                className="px-4"
                src="http://127.0.0.1:1337/uploads/continental_1529325836_30027dbfca.jpg"
                alt="..."
                style={{
                  "background-size": "cover",
                }}
              />
            </Glide>
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
