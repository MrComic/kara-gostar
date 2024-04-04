import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getGalleryCategories(lang: any, category: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  console.log(category);
  const path = `/gallery-categories`;
  const urlParamsObject = {
    filters: { gallery_pages: { EnglishTitle: category } },
    populate: ["gallery_pages"],
    locale: lang,
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
