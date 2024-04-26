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
import type { Viewport } from "next";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import getBaseHttpOption from "./utils/get-base-http-options";
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

export async function getLanguages(): Promise<Array<any>> {
  const path = `/i18n/locales`;
  const options = getBaseHttpOption();
  return await fetchAPI(path, {}, options);
}

export const viewport: Viewport = {
  themeColor: "#ED1B24",
};

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
    applicationName: "Kara Gostar",
    referrer: "origin-when-cross-origin",
    keywords: [
      "karagostar",
      "کاراگستر",
      "شرکت مهندسی کاراگستر",
      "kara gostar",
      "KG",
    ],
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en",
        "de-DE": "/de",
        "fa-IR": "/fa",
      },
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

          <Footer
            lang={params.lang}
            logoUrl={navbarLogoUrl}
            logoText={navbar?.navbarLogo?.logoText || "کاراگستر"}
          ></Footer>

          <script src="/flowbite/flowbite.min.js"></script>
        </Flowbite>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
