import { fetchAPI } from "./fetch-api";
import getBaseHttpOption from "./get-base-http-options";

export async function getLanguageFile(lang: string): Promise<any> {
  const path = `/language`;
  const options = getBaseHttpOption();
  return await fetchAPI(path, { locale: lang }, options);
}
