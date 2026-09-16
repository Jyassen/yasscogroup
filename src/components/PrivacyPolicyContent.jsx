import { Link } from "react-router-dom";

const LEGAL_EMAIL = import.meta.env.VITE_LEGAL_EMAIL || "privacy@yasscogroup.com";

export default function PrivacyPolicyContent({ termsTo = "/terms" }) {
  return (
    <div className="legal-copy">
      <p>
        This Privacy Policy explains how Yassco Group, a d/b/a of Medigard
        Compliance Systems LLC (“Yassco,” “we,” “us,” or “our”), collects, uses,
        and protects information submitted through this recruiting website. This
        website is intended for insurance professionals and prospective
        insurance professionals, not Medicare beneficiaries seeking plan advice.
      </p>
      <h2>1. Information we collect</h2>
      <p>
        We may collect identifiers and professional information you provide,
        including your name, email address, telephone number, license status,
        application responses, and communication preferences.
      </p>
      <p>
        We may also collect device, browser, approximate location, referring-page,
        advertising-attribution, and website-usage information through server
        logs, cookies, pixels, analytics tools, and similar technology. This can
        include UTM parameters and advertising click identifiers.
      </p>
      <h2>2. How we use information</h2>
      <p>
        We use information to review recruiting inquiries; contact applicants;
        evaluate potential agent relationships; provide requested information;
        operate, secure, and improve the website; measure advertising
        performance; prevent misuse; and comply with legal, regulatory, carrier,
        or contractual obligations.
      </p>
      <h2>3. Calls, texts, and email</h2>
      <p>
        If you request contact, we may respond by telephone or email regarding
        your application. If you separately opt in to marketing calls or text
        messages, we may contact you at the number provided, including through
        automated technology. Consent to marketing is not a condition of joining.
        Message frequency varies, and message and data rates may apply. Reply
        STOP to opt out of texts or use the unsubscribe link in marketing
        emails.
      </p>
      <h2>4. How information may be shared</h2>
      <p>
        We may share information with service providers that support recruiting,
        communications, analytics, hosting, security, contracting, onboarding,
        and business operations. If a relationship moves forward, information
        may also be shared as reasonably necessary with affiliated
        organizations, carriers, licensing or background-check providers, and
        other parties involved in evaluating or administering the relationship.
        We may disclose information when required by law or to protect rights,
        safety, and security.
      </p>
      <p>
        We do not sell personal information for money. Some advertising or
        analytics activity may be treated as “sharing,” “targeted advertising,”
        or a “sale” under certain state privacy laws. Where required, you may
        request to opt out.
      </p>
      <h2>5. Cookies and advertising</h2>
      <p>
        We may use cookies, pixels, and similar tools to remember preferences,
        understand site activity, measure campaigns, and improve recruiting
        outreach. Browser settings and certain advertising platforms offer
        controls for cookies and interest-based advertising. Disabling some
        technologies may affect site functionality.
      </p>
      <h2>6. Data retention and security</h2>
      <p>
        We retain information for as long as reasonably needed for the purposes
        described here, including recruiting records, relationship management,
        compliance, dispute resolution, and legal obligations. We use
        reasonable administrative, technical, and organizational safeguards, but
        no transmission or storage system is completely secure.
      </p>
      <h2>7. Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights to request access,
        correction, deletion, portability, or additional information about how
        we use personal information, and to opt out of certain advertising
        uses. We may need to verify your identity before fulfilling a request.
      </p>
      <h2>8. Children and sensitive consumer data</h2>
      <p>
        This site is not directed to children under 18, and we do not knowingly
        collect their information. Do not submit beneficiary health information,
        Social Security numbers, financial-account information, or other highly
        sensitive consumer information through recruiting forms.
      </p>
      <h2>9. Updates</h2>
      <p>
        We may update this policy from time to time. Material changes may be
        communicated through the website or another appropriate method.
      </p>
      <h2>10. Contact</h2>
      <p>
        For privacy questions or requests, contact{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>. See also our{" "}
        <Link to={termsTo}>Terms &amp; Conditions</Link>.
      </p>
    </div>
  );
}
