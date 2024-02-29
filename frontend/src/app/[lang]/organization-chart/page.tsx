"use client";
import Banner from "../components/Banner";
import { getStrapiMedia } from "../utils/api-helpers";
import { OrgChartComponent } from "./OrgChart";

const employees = [
  {
    id: 1,
    parentId: "",
    name: "John",
    positionName: "CEO",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    parentId: "1",
    name: "Smith",
    positionName: "COO",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/20.jpg",
  },

  {
    id: 3,
    parentId: "1",
    name: "Kate",
    positionName: "CTO",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    parentId: "6",
    team: "HR team",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    parentId: "3",
    name: "Erica",
    positionName: "Manager of something",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 6,
    parentId: "3",
    name: "Paul",
    positionName: "Manager of something",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    parentId: "5",
    team: "Developers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    parentId: "3",
    name: "Tony",
    positionName: "Manager of something",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 9,
    parentId: "2",
    name: "Sally",
    positionName: "Manager of something",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 10,
    parentId: "4",
    name: "Scott",
    positionName: "HR assistant",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
  },

  {
    id: 11,
    parentId: "1",
    name: "James",
    positionName: "CGO",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 12,
    parentId: "4",
    name: "Tony",
    positionName: "HR assistant",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 13,
    parentId: "4",
    name: "Sally",
    positionName: "HR assistant",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 14,
    parentId: "8",
    name: "Scott",
    positionName: "Teacher",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
  },

  {
    id: 15,
    parentId: "8",
    name: "James",
    positionName: "Teacher",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 16,
    parentId: "7",
    name: "Tony",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 17,
    parentId: "7",
    name: "Sally",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 18,
    parentId: "8",
    name: "Scott",
    positionName: "Teacher",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 19,
    parentId: "7",
    name: "Tony",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 20,
    parentId: "7",
    name: "Tony",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 21,
    parentId: "7",
    name: "Tony",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 22,
    parentId: "7",
    name: "Tony",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 23,
    parentId: "7",
    name: "Tony",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 24,
    parentId: "7",
    name: "Tony",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 25,
    parentId: "7",
    name: "Tony",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 26,
    parentId: "7",
    name: "Tony",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 27,
    parentId: "7",
    name: "Tony",
    positionName: "Developer",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  return (
    <>
      <Banner>
        <div className="flex flex-col  items-center text-center  text-white py-20">
          <div className="flex max-w-screen-2xl flex-row mx-auto justify-center">
            <h1 className="font-extrabold text-4xl">همکاران</h1>
          </div>
        </div>
      </Banner>
      <div className="text-center px-12 w-screen flex flex-col items-center justify-center">
        <p className="text-xl py-5 text-center w-6/12 text-start  mx-auto justify-self-center">
          هم اکنون بیش از 180 نفر در شرکت فعالیت می کنند. سرپرستان و مدیران از
          مهندسان برجسته و قوی هستند که حدود 10 درصد از منابع انسانی ما را تشکیل
          می دهند. ماهیت فعالیت ما مانند واحدهای تولیدی نیست که بر اساس اسپک و
          دستورالعمل محصولی را تولید کنند؛ هر قالب و ماشینی دستورالعمل خاص خود
          را دارد؛ از این رو نیاز است تا مهندسان و سرپرستان قوی داشته باشیم که
          بر فرایند ساخت قالب و ماشین نظارت و کنترل دقیق داشته باشند
        </p>
      </div>
      <div className=" px-10 w-full">
        <a
          href="#"
          className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row 
           hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover grayscale w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
            src={getStrapiMedia("/uploads/1_17cbe11e1c.jpg")}
            style={{ height: "300px" }}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 px-8 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ابراهیم عصمتی
            </h5>
            <h6 className="mb-2 text-xs font-light tracking-tight text-gray-700 dark:text-white">
              مدیر عامل و رئیس هیئت مدیره
            </h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ایمیل : esmati@karagostar.com
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              تلفن :
            </p>
          </div>
        </a>
      </div>

      <div className="my-10 px-10 w-full">
        <a
          href="#"
          className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row 
           hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full grayscale rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
            src={getStrapiMedia("/uploads/2_d7dfece3b3.jpg")}
            style={{ height: "300px" }}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              مسعود نوابی
            </h5>
            <h6 className="mb-2 text-xs font-light tracking-tight text-gray-700 dark:text-white">
              مدیر تکنولوژی و فروش
            </h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ایمیل : masoud.navabi@karagostar.com
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              تلفن : <span dir="ltr"> +98 - 21 468679 85 </span>
            </p>
          </div>
        </a>
      </div>

      <div className="my-10 px-10 w-full">
        <a
          href="#"
          className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row 
           hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg grayscale h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
            src={getStrapiMedia("/uploads/3_f32d9f56b8.jpg")}
            style={{ height: "300px" }}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              الناز عصمتی
            </h5>
            <h6 className="mb-2 text-xs font-light tracking-tight text-gray-700 dark:text-white">
              مدیر پروژه های پرس و قائم مقام مدیر عامل
            </h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ایمیل : elnaz.esmati@karagostar.com
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              تلفن : <span dir="ltr"> +98 - 21 468037 07 </span>
            </p>
          </div>
        </a>
      </div>

      <div className="my-10 px-10 w-full">
        <a
          href="#"
          className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row 
           hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover  w-full rounded-t-lg grayscale md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
            src={getStrapiMedia("/uploads/IMG_6835_74203776a9.jpg")}
            style={{ height: "300px" }}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              شهرام فلاحی
            </h5>
            <h6 className="mb-2 text-xs font-light tracking-tight text-gray-700 dark:text-white">
              مدیر مالی
            </h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ایمیل : acc@karagostar.com
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              تلفن : <span dir="ltr"> +98 - 21 468613 11</span>
            </p>
          </div>
        </a>
      </div>

      <div className="my-10 px-10 w-full">
        <a
          href="#"
          className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row 
           hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover  w-full grayscale rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
            src={getStrapiMedia("/uploads/4_0605bcd3d9.jpg")}
            style={{ height: "300px" }}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              حمید مومنی
            </h5>
            <h6 className="mb-2 text-xs font-light tracking-tight text-gray-700 dark:text-white">
              مدیر خرید و تدارکات
            </h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ایمیل : momeni@karagostar.com
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              تلفن : <span dir="ltr"> +98 - 21 468195 44</span>
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
