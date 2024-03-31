import { redirect } from "next/navigation";
import { i18n } from "../../i18n-config";

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  redirect(`/${i18n.defaultLocale}/`);
}
