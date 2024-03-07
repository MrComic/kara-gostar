import { Carousel, Pagination } from "flowbite-react";
import LangRedirect from "../../../components/LangRedirect";
import { getProductsByCategory } from "../../../utils/get-products-by-category";
import { RedirectType } from "next/navigation";
import { getCategoryByName } from "../../../utils/get-category-by-name";
import { getStrapiMedia } from "../../../utils/api-helpers";
import Glide from "../../../components/glide";
import { getProductsById } from "@/app/[lang]/utils/get-products-by-id";
import { json } from "stream/consumers";
import Banner from "@/app/[lang]/components/Banner";
import Swiper from "swiper";
import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import SingleProductSlider from "./single-product-slider";

export default async function RootRoute({
  params,
}: {
  params: { id: number; lang: string };
}) {
  const product = await getProductsById(params.id, params.lang);
  //return <h1 dir="ltr">{JSON.stringify(product.data.attributes.category)}</h1>;
  const category = await getCategoryByName(
    product.data.attributes.category.data[0].attributes.slug,
    params.lang
  );

  if (product.error && product.error.status == 401)
    throw new Error(
      "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
    );
  if (product.data == null)
    return (
      <div className="flex max-w-screen-2xl mx-auto my-auto h-screen items-center justify-center">
        <h1>محصول پیدا </h1>
      </div>
    );
  if (product.data.length === 0)
    return (
      <div className="flex max-w-screen-2xl mx-auto my-auto h-screen items-center justify-center">
        <h1>محصولی تعریف نشده است</h1>
      </div>
    );

  return (
    <>
      <section
        id="Projects"
        className="container mx-auto grid grid-cols-1 mt-10"
      >
        <div className=" bg-white  rounded-xl  ">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto flex flex-col">
              <div className="lg:w-4/6 mx-auto">
                <h1 className="font-medium mb-10 title-font mt-4 text-gray-900 text-4xl">
                  {product.data.attributes.name}
                </h1>
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ height: "600px" }}
                >
                  <SingleProductSlider
                    images={product.data.attributes.pictures.data}
                  />
                </div>
                <div className="flex flex-col sm:flex-row mt-1">
                  <div className="sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-lg mb-4 text-start text-justify">
                      {product.data.attributes.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
