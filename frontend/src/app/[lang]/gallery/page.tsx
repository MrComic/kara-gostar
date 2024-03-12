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
import { getGallery } from "../utils/get-galleries";
import _ from "underscore";
import { getGalleryCategories } from "../utils/get-galleries-category";
import React from "react";
import IsotopGallery from "./gallery";
declare var Isotope: any;
export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  const chunkSize = 10;
  const pictures = await getGallery(params.lang);
  const categories = await getGalleryCategories(params.lang);

  if (pictures.error && pictures.error.status == 401)
    throw new Error(
      "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
    );
  if (pictures.data == null)
    return (
      <div className="flex max-w-screen-2xl mx-auto my-auto h-screen items-center justify-center">
        <h1>محصولی تعریف نشده است</h1>
      </div>
    );
  if (pictures.data.length === 0)
    return (
      <div className="flex max-w-screen-2xl mx-auto my-auto h-screen items-center justify-center">
        <h1>محصولی تعریف نشده است</h1>
      </div>
    );

  return (
    <>
      <Banner>
        <div className="flex flex-col  items-center text-center  text-white py-20">
          <div className="flex max-w-screen-2xl flex-row  mx-auto justify-center">
            <h1 className="font-extrabold text-4xl">تصاویر</h1>
          </div>
        </div>
      </Banner>

      <section
        id="Projects"
        className="container flex flex-col h-auto mx-auto mt-10 mb-5"
      >
        <IsotopGallery
          categories={categories.data}
          mediaGallery={pictures.data}
        />
      </section>
    </>
  );
}
