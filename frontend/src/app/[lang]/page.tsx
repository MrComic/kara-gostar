import { Carousel } from "flowbite-react";
import LangRedirect from "./components/LangRedirect";
import { sectionRenderer } from "./utils/section-renderer";
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";
import Glide from "./components/glide";
import { getStrapiMedia } from "./utils/api-helpers";
import HomeSlider from "./slider";
import PartnersSlider from "./partners";
import CertificatesSlider from "./certificates";

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  return (
    <>
      <section
        className="grid grid-cols-2 items-center"
        style={{
          background: `url("${getStrapiMedia(
            "/uploads/main_554646b309.png"
          )}")`,
          // background:
          //   "url('http://localhost:1337/uploads/20180220_093628_09030780df.jpg')",
          // "background-blend-mode": "multiply",
        }}
      >
        <div>
          <img src={getStrapiMedia("/uploads/main_3255edbcd3.jpg")} />
        </div>
        <div className="max-w-2xl  flex  flex-col sm:text-end sm:mb-0  mx-auto">
          <div className="h-96 sm:h-64 my-5">
            <p className=" mb-6 font-light lg:mb-8 text-lg  leading-10 text-justify text-gray-300">
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
        </div>
      </section>

      <div>
        <div className="text-gray-300" style={{ background: "#070a0f" }}>
          <div className="max-w-screen-2xl mx-auto py-16 ">
            <div className="grid grid-cols-2">
              <div className="text-start">
                <h2 className="text-xl text-center">
                  خط مشی کیفیت شرکت مهندسی کاراگستر
                </h2>
                <p className="mt-4 text-lg text-justify">
                  ما نسبت به پيش بيني و تامين نيازمنديهاي حال و آينده مشتريان در
                  رابطه با محصول خود متعهد مي باشيم. هدف ما به دست آوردن و حفظ
                  بهترين موقعيت در كشور براي ساخت قالب ها و ماشين آلات تايرسازي
                  و قطعات صنعتي پيشرفته با رعايت موارد زير مي باشد:
                </p>
                <ul className="text-lg text-justify">
                  <li>
                    • شناخت ذینفعان، نیازها و انتظارات ایشان علی الخصوص مشتریان
                    و تدوین راهکارها در جهت ایجاد منافع متقابل
                  </li>
                  <li>
                    • توسعه تفکر مبتنی بر ریسک به منظور شناسایی و مدیریت موثرتر
                    فرصتها و تهدیدهای محیط بیرونی و درونی سازمان، در تمامی زمینه
                    های عملکردی و کسب و کار شرکت
                  </li>
                  <li>• دستيابي به تكنولوژي روز توليد</li>
                  <li>• رقابتي نمودن قيمت تمام شده محصول</li>
                  <li>• برآوردن نيازمنديهاي محصول</li>
                  <li>• توسعه محصولات وبازارهاي جديد</li>
                </ul>
              </div>

              <div
                className="ms-32"
                style={{
                  background: `url(${getStrapiMedia(
                    "/uploads/background_Copy_2_f709ffb72e.png"
                  )})`,
                  "background-blend-mode": "multiply",
                  "background-repeat": "no-repeat",
                  "background-size": "cover",
                  "--tw-bg-opacity": "1",
                  "background-color": "rgb(55 65 81/var(--tw-bg-opacity))",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gray-800">
          <div className="max-w-screen-2xl mx-auto py-5">
            <div className="grid grid-cols-2 justify-center">
              <div className="text-start">
                <video
                  style={{
                    height: "380px",
                  }}
                  autoPlay
                  muted
                  controls
                >
                  <source
                    src={getStrapiMedia(
                      "/uploads/4_5825592244706481604_040ea44d54.mp4"
                    )}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="text-gray-300">
                <p className="text-lg text-justify">
                  در رابطه با موارد اشاره شده اصول زير را رعايت مي نمائيم:
                </p>
                <ol className="text-lg text-justify">
                  <li>
                    -جذب نيروي انساني كارآمد، و استفاده از خلاقيتهاي فردي و
                    ايجاد امكان رشد پرسنل از طريق قرارگيري در فرآيند توسعه
                    تكنولوژيك شركت.
                  </li>
                  <li>-انجام اقدامات پيشگيرانه جهت جلوگيري از بروز مشكلات.</li>
                  <li>-مشاوره مستمر و همفكري با مشتري.</li>
                </ol>
                <p className="text-lg text-justify">
                  ما متعهد هستيم جهت ارائه محصولات با كيفيت از بهترين امكانات،
                  منابع و تجهيزات (نيروي انساني ارتقا يافته و ماشين آلات
                  پيشرفته) جهت استمرار سيستم مديريت كيفيت و اجراي آن استفاده
                  نموده و همواره بطور مستمر در حفظ و ارتقاي كيفي منابع و
                  تجهيزاتمان بكوشيم.
                </p>
                <p className="text-lg text-justify">
                  سيستم كيفيت شركت مهندسي كاراگستر بر پايه مشاركت همگاني پرسنل
                  درگير در امر كيفيت، در تمامي رده ها و سطوح سازمان استوار است و
                  برآورده كننده نياز مشتريان بر اساس خواسته هاي استاندارد ISO
                  9001 (مصوب 2015) مي باشد. هر يك از كاركنان شركت نسبت به كيفيت
                  انجام كارهاي خود مسئول مي باشند.
                </p>
                <p className="text-lg text-justify">
                  مسئوليت پيگيري و كنترل صحيح سيستم مديريت كيفيت بر عهده مديريت
                  عامل مي باشد كه ايشان مستقيماً در جريان روند عملكرد سيستم قرار
                  دارند
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-300">
        <div className="grid grid-cols-5 max-w-screen-2xl py-4 mx-auto text-center items-center lg:py-4 ">
          <div className="col-span1 text-start px-4">
            <h2 className="text-2xl text-black">برخی از مشتریان</h2>
          </div>
          <div className="col-span-4 flex flex-row items-start">
            <PartnersSlider></PartnersSlider>
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
