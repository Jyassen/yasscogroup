import { MEDIGARD_GTM, YASSCO_AGENCY } from "../growth/agentTracks";

function envOrigin(value, fallback) {
  if (value && typeof value === "string" && value.trim()) {
    return value.replace(/\/$/, "");
  }
  return fallback;
}

export const YASSCO_ORIGIN = envOrigin(
  import.meta.env.VITE_YASSCO_SITE_URL,
  `https://${YASSCO_AGENCY.domain}`,
);

export const MEDIGARD_ORIGIN = envOrigin(
  import.meta.env.VITE_MEDIGARD_SITE_URL || import.meta.env.VITE_SITE_URL,
  `https://${MEDIGARD_GTM.domain}`,
);

function hostnameOf(hostname) {
  const raw =
    hostname ?? (typeof window !== "undefined" ? window.location.hostname : "");
  return String(raw)
    .replace(/^www\./i, "")
    .toLowerCase();
}

export function isYasscoHost(hostname) {
  const host = hostnameOf(hostname);
  return (
    host === YASSCO_AGENCY.domain ||
    host.endsWith(`.${YASSCO_AGENCY.domain}`) ||
    host === "yassco.localhost" ||
    host === "yasscogroup.localhost" ||
    host === "localhost" ||
    host === "127.0.0.1"
  );
}

export function isMedigardHost(hostname) {
  const host = hostnameOf(hostname);
  return (
    host === MEDIGARD_GTM.domain ||
    host.endsWith(`.${MEDIGARD_GTM.domain}`) ||
    host === "medigard.com" ||
    host.endsWith(".medigard.com")
  );
}

export function yasscoHomePath(hostname) {
  return isYasscoHost(hostname) ? "/" : "/yassco";
}

export function yasscoLegalPaths(hostname) {
  if (isYasscoHost(hostname)) {
    return { home: "/", privacy: "/privacy", terms: "/terms" };
  }
  return {
    home: "/yassco",
    privacy: "/yassco/privacy",
    terms: "/yassco/terms",
  };
}

export function getTrackSiteOrigin() {
  const fromEnv = import.meta.env.VITE_YASSCO_SITE_URL;
  if (fromEnv && typeof fromEnv === "string" && fromEnv.trim()) {
    return fromEnv.replace(/\/$/, "");
  }
  if (typeof window !== "undefined" && isYasscoHost()) {
    return window.location.origin;
  }
  if (typeof window !== "undefined" && !isMedigardHost()) {
    return window.location.origin;
  }
  return YASSCO_ORIGIN;
}
