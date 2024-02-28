import { Carousel } from "flowbite-react";
import LangRedirect from "../../../components/LangRedirect";
import { getProductsByCategory } from "../../../utils/get-products-by-category";
import { RedirectType } from "next/navigation";
import { getCategoryByName } from "../../../utils/get-category-by-name";
import { getStrapiMedia } from "../../../utils/api-helpers";
import Glide from "../../../components/glide";

export default async function RootRoute({
  params,
}: {
  params: { lang: string; category: string };
}) {
  try {
    const products = await getProductsByCategory(params.category, params.lang);
    const category = await getCategoryByName(params.category, params.lang);
    if (products.error && products.error.status == 401)
      throw new Error(
        "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
      );
    if (products.data == null)
      return (
        <div className="flex max-w-screen-2xl mx-auto my-auto h-screen items-center justify-center">
          <h1>محصولی تعریف نشده است</h1>
        </div>
      );
    if (products.data.length === 0)
      return (
        <div className="flex max-w-screen-2xl mx-auto my-auto h-screen items-center justify-center">
          <h1>محصولی تعریف نشده است</h1>
        </div>
      );

    return (
      <>
        <div className="flex max-w-screen-2xl flex-row mt-10 mx-auto justify-center">
          <h1 className="font-extrabold text-4xl">
            {category.data[0].attributes.name}
          </h1>
        </div>
        <div className="flex max-w-screen-2xl flex-row mt-10 mx-auto justify-center">
          <p className="font-extrabold">
            {category.data[0].attributes.description}
          </p>
        </div>

        <section
          id="Projects"
          className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2   gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {products.data.map((j) => (
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <div
                  id="controls-carousel"
                  className="relative w-full"
                  data-carousel="static"
                >
                  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    ></div>
                    {j.attributes.pictures.data.map((img) => (
                      <img
                        src={getStrapiMedia(img.attributes.formats.medium.url)}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    ))}
                  </div>
                </div>

                <div className="px-4 py-3 w-72">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {j.attributes.name}
                  </p>
                  <span className="text-gray-400 uppercase text-xs">
                    {j.attributes.englishTitle}
                  </span>
                  <div className="flex items-center"></div>
                </div>
              </a>
            </div>
          ))}
        </section>
      </>
    );

    for (let product of products.data) {
      return <h1>{product.attributes.name}</h1>;
    }
  } catch (error: any) {
    throw new Error(error + "Missing or invalid credentials");
  }
}
