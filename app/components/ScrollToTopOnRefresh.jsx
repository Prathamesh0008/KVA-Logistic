"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopOnRefresh() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Remove #services / #about / #contact from URL
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    const goTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    goTop();

    const timers = [
      setTimeout(goTop, 0),
      setTimeout(goTop, 50),
      setTimeout(goTop, 150),
      setTimeout(goTop, 400),
      setTimeout(goTop, 800),
    ];

    const showPage = setTimeout(() => {
      document.documentElement.classList.remove("page-loading-hide");
    }, 120);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(showPage);
    };
  }, [pathname]);

  return null;
}