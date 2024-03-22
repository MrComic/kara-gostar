"use client";
import { useState } from "react";

export default function CompanyRules({ params }: { params: { lang: string } }) {
  let [readMore, setReadmore] = useState(false);

  return (
    <>
      <div className="text-start">
        <h2 className="text-xl text-center">
          خط مشی کیفیت شرکت مهندسی کاراگستر
        </h2>
        <p className="mt-4 text-lg text-justify">
          ما نسبت به پيش بيني و تامين نيازمنديهاي حال و آينده مشتريان در رابطه
          با محصول خود متعهد مي باشيم. هدف ما به دست آوردن و حفظ بهترين موقعيت
          در كشور براي ساخت قالب ها و ماشين آلات تايرسازي و قطعات صنعتي پيشرفته
          با رعايت موارد زير مي باشد:
        </p>
        <ul className="text-lg text-justify">
          <li>
            • شناخت ذینفعان، نیازها و انتظارات ایشان علی الخصوص مشتریان و تدوین
            راهکارها در جهت ایجاد منافع متقابل
          </li>
          <li>
            • توسعه تفکر مبتنی بر ریسک به منظور شناسایی و مدیریت موثرتر فرصتها و
            تهدیدهای محیط بیرونی و درونی سازمان، در تمامی زمینه های عملکردی و
            کسب و کار شرکت
          </li>
          <li>• دستيابي به تكنولوژي روز توليد</li>
          <li>• رقابتي نمودن قيمت تمام شده محصول</li>
          <li>• برآوردن نيازمنديهاي محصول</li>
          <li>• توسعه محصولات وبازارهاي جديد</li>
        </ul>

        {readMore == true ? (
          <>
            <div>
              <p className="text-lg text-justify">
                در رابطه با موارد اشاره شده اصول زير را رعايت مي نمائيم:
              </p>
              <ol className="text-lg text-justify">
                <li>
                  -جذب نيروي انساني كارآمد، و استفاده از خلاقيتهاي فردي و ايجاد
                  امكان رشد پرسنل از طريق قرارگيري در فرآيند توسعه تكنولوژيك
                  شركت.
                </li>
                <li>-انجام اقدامات پيشگيرانه جهت جلوگيري از بروز مشكلات.</li>
                <li>-مشاوره مستمر و همفكري با مشتري.</li>
              </ol>
              <p className="text-lg text-justify">
                ما متعهد هستيم جهت ارائه محصولات با كيفيت از بهترين امكانات،
                منابع و تجهيزات (نيروي انساني ارتقا يافته و ماشين آلات پيشرفته)
                جهت استمرار سيستم مديريت كيفيت و اجراي آن استفاده نموده و همواره
                بطور مستمر در حفظ و ارتقاي كيفي منابع و تجهيزاتمان بكوشيم.
              </p>
              <p className="text-lg text-justify">
                سيستم كيفيت شركت مهندسي كاراگستر بر پايه مشاركت همگاني پرسنل
                درگير در امر كيفيت، در تمامي رده ها و سطوح سازمان استوار است و
                برآورده كننده نياز مشتريان بر اساس خواسته هاي استاندارد ISO 9001
                (مصوب 2015) مي باشد. هر يك از كاركنان شركت نسبت به كيفيت انجام
                كارهاي خود مسئول مي باشند.
              </p>
              <p className="text-lg text-justify">
                مسئوليت پيگيري و كنترل صحيح سيستم مديريت كيفيت بر عهده مديريت
                عامل مي باشد كه ايشان مستقيماً در جريان روند عملكرد سيستم قرار
                دارند
              </p>
            </div>
            <div className="flex w-full justify-center pt-10">
              <button
                onClick={() => {
                  setReadmore(false);
                }}
                className="text-center bg-transparent hover:bg-red-700 text-white font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded"
              >
                بستن جزئیات
              </button>
            </div>
          </>
        ) : (
          <div className="flex w-full justify-center pt-10">
            <button
              onClick={() => {
                setReadmore(true);
              }}
              className="text-center bg-transparent hover:bg-red-700 text-white font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded"
            >
              نمایش بیشتر
            </button>
          </div>
        )}
      </div>
    </>
  );
}
