import { createContext, useContext, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import YasscoMark from "../components/YasscoMark";
import { getOtherTrack, getTrack, YASSCO_AGENCY } from "../growth/agentTracks";
import { useFunnelTracking } from "../hooks/useFunnelTracking";
import { LEGAL_BUSINESS_NAME } from "../smsConsentCopy";
import {
  getTrackSiteOrigin,
  MEDIGARD_ORIGIN,
  yasscoHomePath,
  yasscoLegalPaths,
} from "./brand";
import { trackPaths } from "./paths";
import "./tracks.css";

const TrackContext = createContext(null);

export function useTrack() {
  const value = useContext(TrackContext);
  if (!value) {
    throw new Error("useTrack must be used inside TrackLayout");
  }
  return value;
}

export default function TrackLayout({ trackId }) {
  const { pathname } = useLocation();
  const track = getTrack(trackId);
  const other = getOtherTrack(trackId);
  const paths = trackPaths(trackId);
  const applyHref = pathname === paths.home ? "#apply" : `${paths.home}#apply`;
  const value = { track, other, paths };
  const legal = yasscoLegalPaths();
  useFunnelTracking(pathname);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${track.ownerName} | ${YASSCO_AGENCY.brand}`;
    return () => {
      document.title = previousTitle;
    };
  }, [track.ownerName]);

  useEffect(() => {
    const origin = getTrackSiteOrigin();
    if (!origin) return undefined;
    const href = `${origin}${pathname}`;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
    return undefined;
  }, [pathname]);

  return (
    <TrackContext.Provider value={value}>
      <div className="track-shell" data-tone={track.tone}>
        <a className="skip-link" href="#track-main">
          Skip to content
        </a>
        <header className="track-nav">
          <Link
            to={yasscoHomePath()}
            className="track-brand"
            aria-label={YASSCO_AGENCY.brand}
          >
            <YasscoMark />
          </Link>
          <a className="track-nav-cta" href={applyHref}>
            {track.page.cta}
          </a>
        </header>
        <div id="track-main">
          <Outlet />
        </div>
        <footer className="track-footer">
          <div className="track-footer-inner">
            <div className="track-footer-links">
              <Link to={legal.privacy}>Privacy Policy</Link>
              <Link to={legal.terms}>Terms &amp; Conditions</Link>
              <Link to={paths.otherHome}>{other.ownerName}</Link>
              <a href={MEDIGARD_ORIGIN}>{track.page.ownerEscape}</a>
            </div>
            <p>
              {YASSCO_AGENCY.brand} is the agency. We do not promise income,
              enrollments, commissions, or what you write.
            </p>
            <p>
              © {new Date().getFullYear()} {LEGAL_BUSINESS_NAME} d/b/a{" "}
              {YASSCO_AGENCY.brand}.
            </p>
          </div>
        </footer>
      </div>
    </TrackContext.Provider>
  );
}
