import { Link } from "react-router-dom";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";
import TermsAndConditionsContent from "../components/TermsAndConditionsContent";
import { LEGAL_BUSINESS_NAME } from "../smsConsentCopy";
import { YASSCO_AGENCY } from "../growth/agentTracks";
import { yasscoHomePath, yasscoLegalPaths } from "./brand";
import YasscoFrame from "./YasscoFrame";

export default function YasscoLegal({ kind }) {
  const legal = yasscoLegalPaths();
  const isPrivacy = kind === "privacy";

  return (
    <YasscoFrame
      title={`${isPrivacy ? "Privacy Policy" : "Terms & Conditions"} | ${YASSCO_AGENCY.brand}`}
    >
      <main className="yassco-legal">
        <div className="yassco-legal-panel">
          <p className="yassco-legal-note">
            {YASSCO_AGENCY.brand} is a d/b/a of {LEGAL_BUSINESS_NAME}. This
            policy covers that entity.
          </p>
          <h1>{isPrivacy ? "Privacy Policy" : "Terms & Conditions"}</h1>
          {isPrivacy ? (
            <PrivacyPolicyContent termsTo={legal.terms} />
          ) : (
            <TermsAndConditionsContent privacyTo={legal.privacy} />
          )}
          <p style={{ marginTop: "2rem" }}>
            <Link to={yasscoHomePath()}>Back to {YASSCO_AGENCY.brand}</Link>
          </p>
        </div>
      </main>
    </YasscoFrame>
  );
}
