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
          <div className="flex flex-row py-8 lg:py-16 px-4 w-full">
            <form action="#" className="space-y-8 w-full">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  id="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  موضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  پیغام
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lg text-center justify-self-end  text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                ارسال فرم
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
