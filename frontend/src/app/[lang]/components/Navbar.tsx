"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { v4 as uuidv4 } from "uuid";
import { useMotionValueEvent, useScroll } from "framer-motion";
interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  parent: string;
}

interface MobileNavLink extends NavLink {
  children: NavLink[];
  closeMenu: () => void;
}

function NavLink({ url, text }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <a
        href={url}
        className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </a>
    </li>
  );
}

function MobileNavLink({ url, text, closeMenu, children }: MobileNavLink) {
  const path = usePathname();
  const handleClick = () => {
    closeMenu();
  };
  const id = uuidv4();
  return children.length == 0 ? (
    <li>
      <a
        href={url}
        style={{ fontSize: "16px" }}
        className={`block py-2 px-3 text-black sm:text-black  rounded md:bg-transparent md:text-black md:p-0 md:dark:text-red-500
        hover:text-red-700
        dark:bg-red-600 md:dark:bg-transparent`}
        aria-current="page"
      >
        {text}
      </a>
    </li>
  ) : (
    <li>
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle={id}
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900
         hover:bg-gray-200 md:hover:bg-transparent 
         md:border-0 hover:text-red-700 md:p-0 md:w-auto
          dark:text-white md:dark:hover:text-red-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        {text}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id={id}
        style={{ fontSize: "16px" }}
        className="z-10 hidden font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownLargeButton"
        >
          {children.map((n) => (
            <li>
              <Link
                href={n.url}
                prefetch={true}
                onClick={handleClick}
                className={`block hover:text-red-700
                dark:bg-red-600 px-4 py-2 bg-gray-300  dark:hover:bg-gray-600 dark:hover:text-white ${
                  path === url && "text-red-400 border-red-400"
                }`}
              >
                {n.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Nav({
  links,
  logoUrl,
  logoText,
  buttons,
  langs,
  lang,
}: {
  links: Array<NavLink>;
  logoUrl: string | null;
  logoText: string | null;
  buttons: Array<any>;
  langs: Array<any>;
  lang: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  let flags: Record<string, string> = { en: "us", fa: "ir", de: "de" };

  const { scrollY } = useScroll();
  const [animateMenu, setanimateMenu] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest == 0 ? setanimateMenu(false) : setanimateMenu(true);
  });

  function changeLanguage(ev: string) {
    let url = window.location.pathname.split("/").filter((p) => p != "");
    console.log(url.map((p) => p + "/"));
    url[0] = ev.replace(",", "");
    let finalUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      url.map((p) => p + "/");
    window.location.replace(finalUrl.replace(",", ""));
  }

  return (
    <nav
      className={`border-gray-20 dark:bg-gray-900 sticky bg-gray-300 top-0  dark:border-gray-700 shadow-sm shadow-slate-300 border-b-slate-400`}
      style={{
        zIndex: "500",
      }}
    >
      <div
        className={`container flex flex-wrap items-center bg-gray-300 justify-between text-2xl mx-auto  ${
          animateMenu ? "p-1 fixed-nav h-16" : "p-3 sticky-nav h-20"
        }`}
      >
        <Logo lang={lang} src={logoUrl}></Logo>

        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <ul
              className="bg-gray-200 text-black sm:bg-gray-200 md:bg-transparent space-x-3 lg:space-x-8 xl:space-x-9 2xl:space-x-10 lg:bg-transparent xl:bg-transparent 2xl:bg-transparent items-center me-5 w-screen sm:w-screen md:w-auto lg:w-auto flex flex-col font-normal p-4 md:p-0 
            mt-4 border border-gray-100 rounded-lg  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
             dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
              style={{
                fontSize: "16px",
              }}
            >
              {(links || [])
                ?.filter((p) => p.parent == null)
                .map((item) => (
                  <MobileNavLink
                    key={item.id}
                    closeMenu={closeMenu}
                    children={(links || [])?.filter(
                      (p) => p.parent == item.text
                    )}
                    {...item}
                  />
                ))}
              <li>
                <button
                  id="states-button"
                  data-dropdown-toggle="dropdown-states"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center
                 text-gray-500 bg-gray-200 border border-gray-300 rounded-lg
                  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700
                   dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  <span
                    className={`fi fi-${flags[lang]} ps-2 pe-2 pl-10 pr-10`}
                  ></span>
                  <span className="ps-2">{lang}</span>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown-states"
                  className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 bg-gray-200 dark:text-gray-200"
                    aria-labelledby="states-button"
                  >
                    {langs.map((p) => (
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <div
                            onClick={(e) => changeLanguage(p.code)}
                            className="inline-flex items-center"
                          >
                            <span
                              className={`fi fi-${
                                flags[p.code] + p.code
                              } ps-2 pe-2 pl-10 pr-10`}
                            ></span>
                            {p.name}
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
