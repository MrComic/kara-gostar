import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getGalleryCategories(lang: any) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/gallery-categories`;
  const urlParamsObject = {
    locale: lang,
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
