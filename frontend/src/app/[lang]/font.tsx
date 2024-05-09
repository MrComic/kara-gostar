import localFont from "next/font/local";

const iranSans = localFont({
  src: [
    {
      path: "../../../public/fonts/IRANSansXRegular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/IRANSansXMedium.ttf",
      weight: "700",
    },
  ],
  variable: "--iran-sans-font",
});

export default iranSans;
