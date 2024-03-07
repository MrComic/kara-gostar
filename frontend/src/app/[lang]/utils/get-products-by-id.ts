import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getProductsById(id: number, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/products/` + id;
  const urlParamsObject = {
    locale: lang,
    populate: ["category", "pictures"],
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
