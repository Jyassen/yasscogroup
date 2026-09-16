import { useEffect } from "react";
import { Link } from "react-router-dom";
import YasscoMark from "../components/YasscoMark";
import { LEGAL_BUSINESS_NAME } from "../smsConsentCopy";
import { YASSCO_AGENCY } from "../growth/agentTracks";
import { MEDIGARD_ORIGIN, yasscoHomePath, yasscoLegalPaths } from "./brand";
import "./yassco.css";

export default function YasscoFrame({ children, title }) {
  const home = yasscoHomePath();
  const legal = yasscoLegalPaths();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title || YASSCO_AGENCY.brand;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return (
    <div className="yassco-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="yassco-transom">
        <div className="yassco-transom-inner">
          <Link to={home} className="yassco-wordmark" aria-label={YASSCO_AGENCY.brand}>
            <YasscoMark />
          </Link>
          <a className="yassco-transom-cta" href={MEDIGARD_ORIGIN}>
            Agency owner? That’s Medigard.
          </a>
        </div>
      </header>
      <div id="main">{children}</div>
      <footer className="yassco-footer">
        <div className="yassco-footer-inner">
          <div className="yassco-footer-links">
            <Link to={legal.privacy}>Privacy Policy</Link>
            <Link to={legal.terms}>Terms &amp; Conditions</Link>
            <a href={MEDIGARD_ORIGIN}>Agency owner? That’s Medigard.</a>
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
  );
}
