"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  let [loaded, setloaded] = useState(false);

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
        setloaded(true);
        clearInterval(interval);
      } else {
      }
    }, 100);
  }, [path]);

  return null;
}
