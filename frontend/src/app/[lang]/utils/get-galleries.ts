import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getGallery(lang: any, page_slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/galleries`;
  const urlParamsObject = {
    locale: lang,
    filters: { gallery_page: { EnglishTitle: page_slug } },
    populate: ["gallery_categories", "Image", "gallery_page"],
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
