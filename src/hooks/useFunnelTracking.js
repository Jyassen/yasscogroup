import { useEffect } from "react";

export function useFunnelTracking(pathname) {
  useEffect(() => {
    try {
      sessionStorage.setItem("yassco_funnel", pathname);
    } catch {
      /* ignore private-mode storage */
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "funnel_view", path: pathname });
  }, [pathname]);
}
