import { TimeLineItemModel } from "./TimelineItemModel";

export function TimelineItem(props: TimeLineItemModel): any {
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
