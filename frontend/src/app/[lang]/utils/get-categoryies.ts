import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getCategories(lang: any) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/categories`;
  const urlParamsObject = {
    locale: lang,
    populate: ["picture"],
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
