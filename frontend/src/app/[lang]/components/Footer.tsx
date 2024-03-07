"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

export default function Footer({
  logoUrl,
  logoText,
}: {
  logoUrl: string | null;
  logoText: string | null;
}) {
  return (
    <footer className="text-gray-600 body-font border-t-gray-400 border-t-2">
      <div className="container px-5  py-1 mx-auto flex items-center justify-between sm:flex-row flex-col">
        <Logo src={logoUrl}>
          {logoText && <h2 className="text-2xl p-3 font-bold">{logoText}</h2>}
        </Logo>
        <p className="text-sm justify-end text-gray-500 sm:ms-4 sm:ps-4 sm:border-s-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} تمامی حقوق مادی و معنوی متعلق به&nbsp;
          <a
            href="https://karagostar.com"
            className="hover:underline text-red-500 ps-2"
          >
            کاراگستر
          </a>
        </p>
      </div>
    </footer>
  );
}
