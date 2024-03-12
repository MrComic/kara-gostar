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
      <Link
        href={url}
        className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
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
        className={`block py-2 px-3 text-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-red-500
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
         hover:bg-gray-100 md:hover:bg-transparent 
         md:border-0 md:hover:text-red-700 md:p-0 md:w-auto
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
              <a
                href={n.url}
                onClick={handleClick}
                className={`block hover:text-red-700
                dark:bg-red-600 px-4 py-2 bg-gray-300  dark:hover:bg-gray-600 dark:hover:text-white ${
                  path === url && "text-red-400 border-red-400"
                }`}
              >
                {n.text}
              </a>
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
    url[0] = ev;
    let finalUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      url.map((p) => p + "/");
    window.location.replace(finalUrl);
  }

  return (
    <nav
      className={` border-gray-20 dark:bg-gray-900 sticky bg-gray-300 top-0  dark:border-gray-700 shadow-sm shadow-slate-300 border-b-slate-400`}
      style={{
        zIndex: "500",
        //background: "rgb(0 0 0 / 0.1) !important"
      }}
    >
      <div
        className={`max-w-screen-2xl flex flex-wrap items-center bg-gray-300 justify-between text-2xl mx-auto  ${
          animateMenu ? "p-1 fixed-nav h-16" : "p-3 sticky-nav h-20"
        }`}
      >
        <Logo src={logoUrl}>
          {logoText && (
            <p
              className="flex-none ms-5 text-2xl font-semibold dark:text-white"
              aria-label="Brand"
            >
              {logoText}
            </p>
          )}
        </Logo>

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
              className="items-center me-5 w-screen sm:w-screen md:w-auto lg:w-auto flex flex-col font-normal p-4 md:p-0 
            mt-4 border border-gray-100 rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
             dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
              style={{
                fontSize: "16px",
              }}
            >
              {links
                .filter((p) => p.parent == null)
                .map((item) => (
                  <MobileNavLink
                    key={item.id}
                    closeMenu={closeMenu}
                    children={links.filter((p) => p.parent == item.text)}
                    {...item}
                  />
                ))}
            </ul>

            <div className="flex">
              <button
                id="states-button"
                data-dropdown-toggle="dropdown-states"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center
                 text-gray-500 bg-gray-200 border border-gray-300 rounded-lg
                  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700
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
                              flags[p.code]
                            } ps-2 pe-2 pl-10 pr-10`}
                          ></span>
                          {p.name}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    // <header className="sticky flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
    //   <nav
    //     className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
    //     aria-label="Global"
    //   >
    //     <div className="flex items-center justify-between">
    //       <Logo src={logoUrl}>
    //         {logoText && (
    //           <p
    //             className="flex-none text-xl font-semibold dark:text-white"
    //             aria-label="Brand"
    //           >
    //             {logoText}
    //           </p>
    //         )}
    //       </Logo>

    //       <div className="sm:hidden">
    //         <button
    //           type="button"
    //           className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //           data-hs-collapse="#navbar-collapse-with-animation"
    //           aria-controls="navbar-collapse-with-animation"
    //           aria-label="Toggle navigation"
    //         >
    //           <svg
    //             className="hs-collapse-open:hidden size-4"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             viewBox="0 0 16 16"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    //             />
    //           </svg>
    //           <svg
    //             className="hs-collapse-open:block flex-shrink-0 hidden size-4"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       id="navbar-collapse-with-animation"
    //       className="hs-collapse hidden transition-all duration-300 basis-full grow sm:block"
    //     >
    //       <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
    //         {links
    //           .filter((p) => p.parent == null)
    //           .map((item) => (
    //             <MobileNavLink
    //               key={item.id}
    //               closeMenu={closeMenu}
    //               children={links.filter((p) => p.parent == item.text)}
    //               {...item}
    //             />
    //           ))}

    //         <select
    //           id="changelang"
    //           onChange={(e) => console.log(e.target.value)}
    //           data-hs-select='{
    //   "placeholder": "Select option...",
    //   "toggleTag": "<button type=\"button\"><span className=\"me-2\" data-icon></span><span className=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
    //   "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex items-center text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-red-500 focus:ring-red-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
    //   "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700",
    //   "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
    //   "optionTemplate": "<div><div className=\"flex items-center\"><div className=\"me-2\" data-icon></div><div className=\"font-semibold text-gray-800 dark:text-gray-200\" data-title></div></div><div className=\"mt-1.5 text-sm text-gray-500\" data-description></div></div>"
    // }'
    //         >
    //           <option value="">Choose</option>

    //           {langs.map((p) => {
    //             let option = {
    //               selected: true,
    //               icon: `<span className="fi fi-${flags[
    //                 p.code
    //               ].toString()}"></span>`,
    //             };

    //             return (
    //               <option
    //                 selected={lang == p.code}
    //                 value={p.code}
    //                 data-hs-select-option={JSON.stringify(option)}
    //               >
    //                 {p.name}
    //               </option>
    //             );
    //           })}
    //         </select>
    //       </div>
    //     </div>
    //   </nav>
    // </header>

    // <div className="sticky top-0 bg-white shadow p-4 p-4 ">
    //       <div className="container flex justify-between h-16 mx-auto px-0 sm:px-6">
    //         <Logo src={logoUrl}>
    //           {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
    //         </Logo>

    //         <div className="items-center flex-shrink-0 hidden lg:flex">
    //           <ul className="items-stretch hidden space-x-3 lg:flex">
    //             {links.map((item: NavLink) => (
    //               <NavLink key={item.id} {...item} />
    //             ))}
    //           </ul>
    //         </div>

    //         <Dialog
    //           as="div"
    //           className="lg:hidden"
    //           open={mobileMenuOpen}
    //           onClose={setMobileMenuOpen}
    //         >
    //           <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75" />{" "}
    //           {/* Overlay */}
    //           <Dialog.Panel className="fixed inset-y-0 rtl:left-0 ltr:right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10">
    //             <div className="flex items-center justify-between">
    //               <a href="#" className="-m-1.5 p-1.5">
    //                 <span className="sr-only">Strapi</span>
    //                 {logoUrl && <img className="h-8 w-auto" src={logoUrl} alt="" />}
    //               </a>
    //               <button
    //                 type="button"
    //                 className="-m-2.5 rounded-md p-2.5 text-white"
    //                 onClick={() => setMobileMenuOpen(false)}
    //               >
    //                 <span className="sr-only">Close menu</span>
    //                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    //               </button>
    //             </div>
    //             <div className="mt-6 flow-root">
    //               <div className="-my-6 divide-y divide-gray-700">
    //                 <div className="space-y-2 py-6">
    //                   {links.map((item) => (
    //                     <MobileNavLink
    //                       key={item.id}
    //                       closeMenu={closeMenu}
    //                       {...item}
    //                     />
    //                   ))}
    //                 </div>
    //               </div>
    //             </div>
    //           </Dialog.Panel>
    //         </Dialog>
    //         <button
    //           className="p-4 lg:hidden"
    //           onClick={() => setMobileMenuOpen(true)}
    //         >
    //           <Bars3Icon className="h-7 w-7 text-gray-100" aria-hidden="true" />
    //         </button>
    //       </div>
    //     </div>
  );
}
