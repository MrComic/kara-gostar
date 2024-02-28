import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getProductsByCategory(category: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/products`;
  const urlParamsObject = {
    filters: { category: { slug: category } },
    locale: lang,
    populate: ["category", "pictures"],
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
