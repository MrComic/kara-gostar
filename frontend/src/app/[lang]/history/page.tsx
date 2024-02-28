import LangRedirect from "../components/LangRedirect";
import { sectionRenderer } from "../utils/section-renderer";
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";
import Banner from "../components/Banner";
import { Timeline } from "flowbite-react";

export class TimeLineItemModel {
  time: string = "";
  title: string = "";
  subtitle: string = "";
  description: string = "";
}

export function TimelineItem(props: TimeLineItemModel) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-medium text-2xl text-start rtl:ms-[8rem] ltr:me-[8rem]  text-red-500 mb-1 sm:mb-0">
        {props.title}
      </div>
      <div
        className="flex flex-col sm:flex-row items-start mb-1 
          group-last:before:hidden 
          before:absolute 
          rtl:before:start-2 
          
          sm:before:start-0 
          before:h-full before:px-px 
          before:bg-slate-300 
          sm:before:ms-[6.5rem] 
          before:self-start 
          before:-translate-x-1/2 
          before:translate-y-3 after:absolute 
          after:start-2 sm:after:start-0 
          after:w-2 after:h-2 after:bg-red-600 
          after:border-4 
          after:box-content after:border-slate-50 after:rounded-full
          sm:after:ms-[6.5rem] 
          rtl:after:-translate-x-1/5
          rtl:after:-translate-y-1.5
          ltr:after:-translate-x-1/2
          ltr:after:translate-y-1.4
          "
      >
        <time
          className="sm:absolute start-0 
        -translate-y-3
           inline-flex items-center
          justify-center text-xs font-semibold uppercase w-20 
          h-7 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full"
        >
          {props.time}
        </time>
        <div className="text-xl font-bold text-slate-900 rtl:ms-[8rem] ltr:me-[8rem] ">
          {props.subtitle}
        </div>
      </div>

      <div className="text-slate-500 rtl:ms-[8rem] ltr:me-[8rem] ">
        {props.description}
      </div>
    </div>
  );
}

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
            <h1 className="font-extrabold text-4xl">تاریخچه</h1>
          </div>
        </div>
      </Banner>

      <div className="max-w-full flex flex-row justify-center mt-10 mb-10">
        <div className="-my-6 w-8/12">
          <TimelineItem
            time="فروردین 1372"
            subtitle="شرکت کاراگستر در تهران تاسیس شد"
            description="شرکت مهندسی کاراگستر در سال ۱۳۷۲ تاسیس گردیده و در زمینه طراحی و ساخت انواع قطعات ماشین‌آلات و قالب‌های صنعتی و تجهیزات جانبی صنایع از جمله قالب‌های پخت تایر و سایر محصولات لاستیکی- ارائه خدمات فنی و مهندسی و اخذ موافقت اصولی و مجوزهای قانونی جهت احداث و راه‌اندازی کارخانجات ساخت قطعات و ماشین‌آلات و قالب‌های صنعتی- واردات و صادرات قطعات یدکی و ماشین‌آلات و قالب‌های صنعتی و اخذ نمایندگی داخلی و خارجی و انجام کلیه امور مرتبط به فعالیت های فوق الذکر فعالیت می نماید."
            title="تاسیس شرکت"
          ></TimelineItem>

          <TimelineItem
            time="فروردین 1372"
            subtitle="شرکت کاراگستر در تهران تاسیس شد"
            description="شرکت مهندسی کاراگستر در سال ۱۳۷۲ تاسیس گردیده و در زمینه طراحی و ساخت انواع قطعات ماشین‌آلات و قالب‌های صنعتی و تجهیزات جانبی صنایع از جمله قالب‌های پخت تایر و سایر محصولات لاستیکی- ارائه خدمات فنی و مهندسی و اخذ موافقت اصولی و مجوزهای قانونی جهت احداث و راه‌اندازی کارخانجات ساخت قطعات و ماشین‌آلات و قالب‌های صنعتی- واردات و صادرات قطعات یدکی و ماشین‌آلات و قالب‌های صنعتی و اخذ نمایندگی داخلی و خارجی و انجام کلیه امور مرتبط به فعالیت های فوق الذکر فعالیت می نماید."
            title="تاسیس شرکت"
          ></TimelineItem>

          <TimelineItem
            time="فروردین 1372"
            subtitle="شرکت کاراگستر در تهران تاسیس شد"
            description="شرکت مهندسی کاراگستر در سال ۱۳۷۲ تاسیس گردیده و در زمینه طراحی و ساخت انواع قطعات ماشین‌آلات و قالب‌های صنعتی و تجهیزات جانبی صنایع از جمله قالب‌های پخت تایر و سایر محصولات لاستیکی- ارائه خدمات فنی و مهندسی و اخذ موافقت اصولی و مجوزهای قانونی جهت احداث و راه‌اندازی کارخانجات ساخت قطعات و ماشین‌آلات و قالب‌های صنعتی- واردات و صادرات قطعات یدکی و ماشین‌آلات و قالب‌های صنعتی و اخذ نمایندگی داخلی و خارجی و انجام کلیه امور مرتبط به فعالیت های فوق الذکر فعالیت می نماید."
            title="تاسیس شرکت"
          ></TimelineItem>

          <TimelineItem
            time="فروردین 1372"
            subtitle="شرکت کاراگستر در تهران تاسیس شد"
            description="شرکت مهندسی کاراگستر در سال ۱۳۷۲ تاسیس گردیده و در زمینه طراحی و ساخت انواع قطعات ماشین‌آلات و قالب‌های صنعتی و تجهیزات جانبی صنایع از جمله قالب‌های پخت تایر و سایر محصولات لاستیکی- ارائه خدمات فنی و مهندسی و اخذ موافقت اصولی و مجوزهای قانونی جهت احداث و راه‌اندازی کارخانجات ساخت قطعات و ماشین‌آلات و قالب‌های صنعتی- واردات و صادرات قطعات یدکی و ماشین‌آلات و قالب‌های صنعتی و اخذ نمایندگی داخلی و خارجی و انجام کلیه امور مرتبط به فعالیت های فوق الذکر فعالیت می نماید."
            title="تاسیس شرکت"
          ></TimelineItem>

          <TimelineItem
            time="فروردین 1372"
            subtitle="شرکت کاراگستر در تهران تاسیس شد"
            description="شرکت مهندسی کاراگستر در سال ۱۳۷۲ تاسیس گردیده و در زمینه طراحی و ساخت انواع قطعات ماشین‌آلات و قالب‌های صنعتی و تجهیزات جانبی صنایع از جمله قالب‌های پخت تایر و سایر محصولات لاستیکی- ارائه خدمات فنی و مهندسی و اخذ موافقت اصولی و مجوزهای قانونی جهت احداث و راه‌اندازی کارخانجات ساخت قطعات و ماشین‌آلات و قالب‌های صنعتی- واردات و صادرات قطعات یدکی و ماشین‌آلات و قالب‌های صنعتی و اخذ نمایندگی داخلی و خارجی و انجام کلیه امور مرتبط به فعالیت های فوق الذکر فعالیت می نماید."
            title="تاسیس شرکت"
          ></TimelineItem>
        </div>
      </div>
    </>
  );
}
