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

  const categories = await getCategories(params.lang);
  if (categories.error && categories.error.status == 401)
    throw new Error(
      "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
    );
  if (categories.data == null)
    return (
      <div className="flex max-w-screen-2xl mx-auto my-auto h-screen items-center justify-center">
        <h1>{translate("products.noProductsDefined", data)}</h1>
      </div>
    );
  if (categories.data.length === 0)
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
            <h1 className="font-extrabold text-4xl">
              {translate("products.title", data)}
            </h1>
          </div>
        </div>
      </Banner>
      <section
        id="Projects"
        className="container grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   mx-auto mt-10 mb-5 gap-16"
      >
        {categories.data.map((j: any) => (
          <div className=" hover:scale-105 transition-all hover:transition-all ">
            <div className="bg-gray-100 p-6 rounded-lg">
              <a
                href={
                  "/" +
                  params.lang +
                  "/products/" +
                  j?.attributes?.slug +
                  "/" +
                  j?.attributes?.name
                }
              >
                <img
                  className="h-96 rounded w-full object-cover object-center mb-6"
                  src={
                    getStrapiMedia(
                      j?.attributes.picture.data?.attributes?.formats.medium.url
                    ) || ""
                  }
                  alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mt-4">
                  {j?.attributes?.name}
                </h2>
                <h3 className="mb-4 tracking-widest text-red-500 text-xs font-medium title-font">
                  {j?.attributes?.slug}
                </h3>
                <p className="leading-relaxed text-base">
                  {j?.attributes?.description}
                </p>
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
