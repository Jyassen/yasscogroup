import { Link } from "react-router-dom";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";
import TermsAndConditionsContent from "../components/TermsAndConditionsContent";
import { LEGAL_BUSINESS_NAME } from "../smsConsentCopy";
import { YASSCO_AGENCY } from "../growth/agentTracks";
import { useTrack } from "./TrackLayout";

export default function TrackLegal({ kind }) {
  const { track, paths } = useTrack();
  const isPrivacy = kind === "privacy";

  return (
    <main className="track-main track-legal-page">
      <div className="track-legal-panel">
        <p className="track-legal-note">
          {YASSCO_AGENCY.brand} is a d/b/a of {LEGAL_BUSINESS_NAME}. This policy
          covers that entity.
        </p>
        <h1>{isPrivacy ? "Privacy Policy" : "Terms & Conditions"}</h1>
        {isPrivacy ? (
          <PrivacyPolicyContent termsTo={paths.terms} />
        ) : (
          <TermsAndConditionsContent privacyTo={paths.privacy} />
        )}
        <p style={{ marginTop: "2rem" }}>
          <Link to={paths.home}>Back to {track.ownerName}</Link>
        </p>
      </div>
    </main>
  );
}
