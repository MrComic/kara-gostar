"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link
        href={url}
        className={`hover:dark:text-violet-400 ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className="flex">
      <Link
        href={`/blog/${attributes.slug}`}
        className="hover:dark:text-violet-400"
      >
        {attributes.name}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite />;
    case "TWITTER":
      return <AiFillTwitterCircle />;
    case "YOUTUBE":
      return <AiFillYoutube />;
    case "DISCORD":
      return <FaDiscord />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  categoryLinks,
  legalLinks,
  socialLinks,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  categoryLinks: Array<CategoryLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
}) {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 shadow-md border-t border-slate-300 shadow-slate-800 ">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 text-black dark:text-white">
            <Logo src={logoUrl}>
              {logoText && (
                <h2 className="text-2xl p-4 font-bold">{logoText}</h2>
              )}
            </Logo>
            <div className="flex flex-col w-96">
              <div className="flex flex-row mt-4 justify-start">
                {socialLinks.map((link: FooterLink) => {
                  return (
                    <a
                      key={link.id}
                      rel="noopener noreferrer"
                      href={link.url}
                      title={link.text}
                      target={link.newTab ? "_blank" : "_self"}
                      className="flex items-center justify-center w-10 h-10 me-2 rounded-full dark:bg-red-500 dark:text-gray-900"
                    >
                      <RenderSocialIcon social={link.social} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                منو سایت
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {menuLinks.map((link: FooterLink) => (
                  <li className="mb-4">
                    <a
                      href={link.url}
                      target={link.newTab ? "_blank" : "_self"}
                      className="hover:underline"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                لینک های مهم
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {legalLinks.map((link: FooterLink) => (
                  <li className="mb-4">
                    <a
                      href={link.url}
                      target={link.newTab ? "_blank" : "_self"}
                      className="hover:underline"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 تمامی حقوق مادی و معنوی متعلق به&nbsp;
            <a
              href="https://flowbite.com"
              className="hover:underline text-red-500 ps-2"
            >
              کاراگستر™
            </a>
          </span>
        </div>
      </div>
    </footer>

    // <footer className="py-6 dark:bg-black dark:text-gray-50">
    //   <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
    //     <div className="grid grid-cols-12">
    //       <div className="pb-6 col-span-full md:pb-0 md:col-span-6">

    //       </div>

    //       <div className="col-span-6 text-center md:text-left md:col-span-3">
    //         <p className="pb-1 text-lg font-medium">Categories</p>
    //         <ul>
    //           {categoryLinks.map((link: CategoryLink) => (
    //             <CategoryLink key={link.id} {...link} />
    //           ))}
    //         </ul>
    //       </div>

    //       <div className="col-span-6 text-center md:text-left md:col-span-3">
    //         <p className="pb-1 text-lg font-medium">Menu</p>
    //         <ul>
    //           {menuLinks.map((link: FooterLink) => (
    //             <FooterLink key={link.id} {...link} />
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="grid justify-center pt-6 lg:justify-between">
    //       <div className="flex">
    //         <span className="mr-2">
    //           ©{new Date().getFullYear()} All rights reserved
    //         </span>
    //         <ul className="flex">
    //           {legalLinks.map((link: FooterLink) => (
    //             <Link
    //               href={link.url}
    //               className="text-gray-400 hover:text-gray-300 mr-2"
    //               key={link.id}
    //             >
    //               {link.text}
    //             </Link>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
    //         {socialLinks.map((link: FooterLink) => {
    //           return (
    //             <a
    //               key={link.id}
    //               rel="noopener noreferrer"
    //               href={link.url}
    //               title={link.text}
    //               target={link.newTab ? "_blank" : "_self"}
    //               className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
    //             >
    //               <RenderSocialIcon social={link.social} />
    //             </a>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}
