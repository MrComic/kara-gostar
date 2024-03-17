"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <footer
      className="text-gray-600  bg-gray-300 body-font border-t-gray-400"
      style={{ borderTop: "1px solid #ccc" }}
    >
      <div className="container px-5  py-1 mx-auto flex items-center justify-center sm:flex-row flex-col">
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
