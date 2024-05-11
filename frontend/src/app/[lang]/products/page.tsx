import { Carousel } from "flowbite-react";
import LangRedirect from "../components/LangRedirect";
import { getProductsByCategory } from "../utils/get-products-by-category";
import { RedirectType } from "next/navigation";
import { getCategoryByName } from "../utils/get-category-by-name";
import { getStrapiMedia } from "../utils/api-helpers";
import Glide from "../components/glide";
import Banner from "../components/Banner";
import { getEnabledCategories } from "trace_events";
import { getCategories } from "../utils/get-categoryies";
import { getLanguageFile } from "../utils/get-language-file";
import translate from "../utils/translate";
export default async function RootRoute({
  params,
}: {
  params: { lang: string; category: string };
}) {
  const languageFile = await getLanguageFile(params.lang);
  let data = languageFile?.data?.attributes.text;

  const products = await getProductsByCategory(params.category, params.lang);

  if (products.error && products.error.status == 401)
    throw new Error(
      "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
    );
  if (products.data == null)
    return (
      <div className="flex max-w-screen-2xl mx-auto my-auto h-screen items-center justify-center">
        <h1>{translate("products.noProductsDefined", data)}</h1>
      </div>
    );
  if (products.data.length === 0)
    return (
      <div className="flex max-w-screen-2xl mx-auto my-auto h-screen items-center justify-center">
        <h1>{translate("products.noProductsDefined", data)}</h1>
      </div>
    );

  return (
    <>
      <Banner>
        <div className="flex flex-col  items-center text-center  text-white py-20">
          <div className="flex max-w-screen-2xl flex-row  mx-auto justify-center">
            <h1 className="font-extrabold text-2xl">
              {translate("products.title", data)}
            </h1>
          </div>
        </div>
      </Banner>
      <section
        id="Projects"
        className="container grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1   mx-auto mt-10 mb-10 gap-8"
      >
        {products.data.map((j: any) => (
          <div className=" hover:scale-105 transition-all hover:transition-all ">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h2 className="text-lg text-gray-900 font-medium title-font my-4">
                {j?.attributes?.name}
              </h2>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
