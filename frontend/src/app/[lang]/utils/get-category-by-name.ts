import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getCategoryByName(name: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/categories`;
  const urlParamsObject = {
    filters: { slug: name },
    locale: lang,
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
