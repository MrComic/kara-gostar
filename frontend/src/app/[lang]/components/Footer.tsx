"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

export default function Footer(params: {
  lang: string;
  logoText: string;
  logoUrl: string;
}) {
  return (
    <footer
      className="text-gray-600  bg-gray-300 body-font border-t-gray-400 divide-y divide-gray-400"
      style={{ borderTop: "1px solid #ccc" }}
    >
      <div className="relative overflow-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  container py-4 mx-auto text-center items-center lg:py-4 ">
        <div className="flex flex-row sm:justify-center md:justify-center">
          <Logo lang={params.lang} src={params.logoUrl}>
            {params.logoText && (
              <p
                className="flex-none ms-5 text-2xl font-semibold dark:text-white"
                aria-label="Brand"
              >
                {params.logoText}
              </p>
            )}
          </Logo>
        </div>
        <div
          className="mb-8 mt-4 md:mt-3 md:mb-0 text-center flex items-center px-5
        sm:justify-end md:justify-center lg:justify-end xl:justify-end 2xl:justify-end flex-wrap lg:flex-nowrap text-body-2 col-span-2 text-neutral-700 "
        >
          <p className="shrink-0 " data-cro-id="footer-phonenumber">
            تلفن پشتیبانی 021-46848785
          </p>
          <div className="px-5 text-neutral-400 hidden lg:block">|</div>
          <p className="mt-1 md:mt-0 text-start">
            تهران، شهر قدس (قلعه حسنخان)، بلوار انقلاب، خیابان صنعت 2، مجتمع
            صنعتی پویا، پلاک 6
          </p>
        </div>
      </div>

      <div className="container px-5  py-1 mx-auto flex items-center justify-center sm:flex-row flex-col py-4 ">
        <p className="text-sm justify-end text-gray-500 sm:ms-4 sm:ps-4 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} تمامی حقوق مادی و معنوی این سایت متعلق
          به&nbsp;
          <a
            href="https://karagostar.com"
            className="hover:underline text-red-500 ps-2"
          >
            شرکت مهندسی کاراگستر
          </a>
        </p>
      </div>
    </footer>
  );
}
