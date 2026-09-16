import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  YASSCO_EMAIL_MARKETING_CONSENT_LABEL,
  YASSCO_SMS_MARKETING_CONSENT_LABEL,
  YASSCO_SMS_NON_MARKETING_CONSENT_LABEL,
} from "./consent";
import { useTrack } from "./TrackLayout";

export default function TrackApply() {
  const { track, paths } = useTrack();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [licensed, setLicensed] = useState(false);
  const [emailMarketingConsent, setEmailMarketingConsent] = useState(false);
  const [smsMarketingConsent, setSmsMarketingConsent] = useState(false);
  const [smsNonMarketingConsent, setSmsNonMarketingConsent] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const prefix = track.id;

  async function handleSubmit(event) {
    event.preventDefault();
    const endpoint =
      import.meta.env.VITE_OPTIN_ENDPOINT || import.meta.env.VITE_FORM_ENDPOINT;
    setStatus("loading");
    setMessage("");

    try {
      if (endpoint && typeof endpoint === "string") {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            email,
            phone: phone.trim() || undefined,
            licensed,
            emailMarketingConsent,
            smsMarketingConsent,
            smsNonMarketingConsent,
            source: paths.source,
            track: track.id,
            page_url: window.location.href,
          }),
        });
        if (!res.ok) throw new Error("Request failed");
      }
      navigate(paths.thanks);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again or pick a time to talk.");
    }
  }

  return (
    <form className="track-form" onSubmit={handleSubmit}>
      <label htmlFor={`${prefix}-first-name`}>
        First name
        <input
          id={`${prefix}-first-name`}
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label htmlFor={`${prefix}-email`}>
        Email
        <input
          id={`${prefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label htmlFor={`${prefix}-phone`}>
        Mobile phone
        <input
          id={`${prefix}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <label className="track-check" htmlFor={`${prefix}-licensed`}>
        <input
          id={`${prefix}-licensed`}
          name="licensed"
          type="checkbox"
          required
          checked={licensed}
          onChange={(event) => setLicensed(event.target.checked)}
        />
        <span>I have an active license to sell Medicare.</span>
      </label>
      <label className="track-check" htmlFor={`${prefix}-email-m`}>
        <input
          id={`${prefix}-email-m`}
          type="checkbox"
          checked={emailMarketingConsent}
          onChange={(event) => setEmailMarketingConsent(event.target.checked)}
        />
        <span>{YASSCO_EMAIL_MARKETING_CONSENT_LABEL}</span>
      </label>
      <label className="track-check" htmlFor={`${prefix}-sms-m`}>
        <input
          id={`${prefix}-sms-m`}
          type="checkbox"
          checked={smsMarketingConsent}
          onChange={(event) => setSmsMarketingConsent(event.target.checked)}
        />
        <span>{YASSCO_SMS_MARKETING_CONSENT_LABEL}</span>
      </label>
      <label className="track-check" htmlFor={`${prefix}-sms-n`}>
        <input
          id={`${prefix}-sms-n`}
          type="checkbox"
          checked={smsNonMarketingConsent}
          onChange={(event) => setSmsNonMarketingConsent(event.target.checked)}
        />
        <span>{YASSCO_SMS_NON_MARKETING_CONSENT_LABEL}</span>
      </label>
      <p className="track-legal-links">
        <Link to={paths.privacy}>Privacy Policy</Link>
        {" · "}
        <Link to={paths.terms}>Terms &amp; Conditions</Link>
      </p>
      <button
        className="track-btn"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : track.page.cta}
      </button>
      {message ? (
        <p className="track-form-status" data-kind="error" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
