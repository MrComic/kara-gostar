import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { i18n } from "../i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { RedirectType, redirect } from "next/navigation";
import { NextURL } from "next/dist/server/web/next-url";
import { getStrapiURL } from "./app/[lang]/utils/api-helpers";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      "/manifest.json",
      "/favicon.ico",
      // Your other files in `public`
    ].includes(pathname)
  )
    return;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  console.log(request.url);
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    //    redirect(new URL(`/${locale}`, request.url).href);
    //request.nextUrl.pathname = `/${locale}`;
    // return NextResponse.redirect(request.nextUrl);
    //return NextResponse.redirect(new NextURL(`/${locale}`));
  }
  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!_next).*)"],
};
