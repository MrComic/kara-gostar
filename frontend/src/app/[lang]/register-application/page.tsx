"use client";
import Banner from "../components/Banner";

export default async function RootRoute() {
  return (
    <>
      <Banner>
        <div className="flex flex-col  items-center text-center  text-white py-8">
          <div className="flex flex-col max-w-screen-2xl flex-row mx-auto justify-center">
            <h1 className="font-extrabold text-4xl">همکاری با ما</h1>
            <p className="mt-10 font-light text-center text-white dark:text-gray-400 sm:text-xl">
              علاقه مندان به همکاری با گروه کاراگستر می‌توانند اطلاعات و رزومه
              کاری خود را در این فرم ثبت و ذخیره کرده تا همکاران ما در واحد
              منابع انسانی بررسی قرار دهند.
            </p>
            <p className="mt-2 font-light text-center text-white dark:text-gray-400 sm:text-xl">
              لطفا به منظور بررسی بهتر درخواست شما، موارد خواسته شده را کامل و
              دقیق تکمیل کنید.
            </p>
          </div>
        </div>
      </Banner>

      <div className="w-8/12 mx-auto flex flex-row justify-center mb-10 bg-white dark:bg-gray-900">
        <div className="m-4 flex flex-row w-full">
          <div className="flex flex-row py-8 lg:py-16 px-4 w-full"></div>
        </div>
      </div>
    </>
  );
}
