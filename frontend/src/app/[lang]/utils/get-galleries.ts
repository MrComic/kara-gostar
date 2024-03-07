import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getGallery(lang: any) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/galleries`;
  const urlParamsObject = {
    locale: lang,
    populate: ["gallery_categories", "Image"],
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
