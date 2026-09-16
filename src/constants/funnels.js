export const BOOKING_URLS = {
  growth:
    import.meta.env.VITE_GROWTH_BOOKING_URL ||
    "https://api.leadconnectorhq.com/widget/booking/SETykFwwf8aabbIIsSUN?source=medigard_growth",
};

export const CRM_SOURCES = {
  yassco: "yassco_group",
  homeDesk: "yassco_home_desk",
  homeDeskBook: "yassco_home_desk_booking",
  localPractice: "yassco_local_practice",
  localPracticeBook: "yassco_local_practice_booking",
};

export function withSource(url, source) {
  if (!url) return "";
  const attributedUrl = new URL(url);
  attributedUrl.searchParams.set("source", source);
  return attributedUrl.toString();
}

const BOOKING_EMBED_HOSTS = new Set([
  "api.leadconnectorhq.com",
  "link.msgsndr.com",
]);

export function canEmbedBooking(url) {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return (
      BOOKING_EMBED_HOSTS.has(parsed.hostname) &&
      parsed.pathname.startsWith("/widget/booking/")
    );
  } catch {
    return false;
  }
}

const GHL_MESSAGE_ORIGINS = new Set([
  "https://api.leadconnectorhq.com",
  "https://link.msgsndr.com",
]);

export function isGhlBookingOrigin(origin) {
  return GHL_MESSAGE_ORIGINS.has(origin);
}

export function isGhlBookingCompleteMessage(data) {
  if (data === "msgsndr-booking-complete" || data === "booking_complete") {
    return true;
  }
  if (Array.isArray(data)) {
    return (
      data[0] === "msgsndr-booking-complete" || data[0] === "booking_complete"
    );
  }
  if (data && typeof data === "object") {
    const type = data.type || data.event;
    return type === "msgsndr-booking-complete" || type === "booking_complete";
  }
  return false;
}
