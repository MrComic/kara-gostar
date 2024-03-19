import type { Metadata } from "next";
import "./globals.css";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";
import { ThemeModeScript } from "flowbite-react";
import { i18n } from "../../../i18n-config";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import { FALLBACK_SEO } from "@/app/[lang]/utils/constants";
import iranSans from "./font";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";
function getBaseHttpOption() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");
  return { headers: { Authorization: `Bearer ${token}` } };
}

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
config.autoAddCss = true;

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-gray-700 hover:bg-gray-700 text-white",
    },
  },
};

async function getGlobal(lang: string): Promise<any> {
  const path = `/global`;
  const options = getBaseHttpOption();

  const urlParamsObject = {
    populate: [
      "metadata.shareImage",
      "favicon",
      "notificationBanner.link",
      "navbar.links",
      "navbar.buttons",
      "navbar.navbarLogo.logoImg",
      "footer.footerLogo.logoImg",
      "footer.menuLinks",
      "footer.legalLinks",
      "footer.socialLinks",
      "footer.categories",
    ],
    locale: lang,
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getLanguageFile(lang: string): Promise<Array<any>> {
  const path = `/language`;
  const options = getBaseHttpOption();
  return await fetchAPI(path, { locale: lang }, options);
}

export async function getLanguages(): Promise<Array<any>> {
  const path = `/i18n/locales`;
  const options = getBaseHttpOption();
  return await fetchAPI(path, {}, options);
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const meta = await getGlobal(params.lang);
  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta?.data?.attributes;
  const { url } = favicon?.data?.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const global = await getGlobal(params.lang);
  const langs = await getLanguages();
  const languageFile = getLanguageFile(params.lang);
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global) return null;

  const { navbar } = global?.data?.attributes || {
    links: [],
    buttons: [],
    navbarLogo: { logoText: "" },
  };

  const navbarLogoUrl = getStrapiMedia(
    navbar?.navbarLogo.logoImg.data?.attributes?.url || ""
  );

  return (
    <html
      dir={params.lang == "fa" ? "rtl" : "ltr"}
      lang={params.lang}
      className={`${iranSans.variable} font-sans default light`}
    >
      <Head>
        <ThemeModeScript />
      </Head>
      <body>
        <Flowbite theme={{ theme: customTheme }}>
          <Nav
            links={navbar?.links}
            langs={langs}
            lang={params.lang}
            buttons={navbar?.buttons}
            logoUrl={navbarLogoUrl}
            logoText={navbar?.navbarLogo?.logoText || "کاراگستر"}
          />
          <main className=" dark:bg-black dark:text-gray-100 min-h-screen">
            {children}
          </main>

          <Footer></Footer>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
        </Flowbite>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
