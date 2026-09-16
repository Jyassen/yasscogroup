import { Link } from "react-router-dom";

const LEGAL_EMAIL = import.meta.env.VITE_LEGAL_EMAIL || "privacy@yasscogroup.com";

export default function TermsAndConditionsContent({ privacyTo = "/privacy" }) {
  return (
    <div className="legal-copy">
      <p>
        These Terms &amp; Conditions (“Terms”) govern use of this Yassco Group
        recruiting website, operated by Medigard Compliance Systems LLC d/b/a
        Yassco Group. By using the site, you agree to these Terms. If you do
        not agree, do not use the site. See our{" "}
        <Link to={privacyTo}>Privacy Policy</Link>.
      </p>
      <h2>1. Recruiting information only</h2>
      <p>
        This site provides general information about potential independent agent
        relationships. It is not an offer of employment, insurance contract,
        carrier appointment, franchise, partnership, or guaranteed business
        opportunity. Submitting an application does not create a relationship
        or require either party to proceed.
      </p>
      <h2>2. Eligibility and applicant responsibilities</h2>
      <p>
        You agree to provide accurate, current information and to update it if
        needed. Any relationship may be subject to licensing, training,
        background, errors-and-omissions coverage, carrier, regulatory,
        contracting, and other requirements. You are responsible for
        understanding and following laws and professional obligations that
        apply to you.
      </p>
      <h2>3. No outcome guarantees</h2>
      <p>
        We do not guarantee acceptance, contracts, carrier appointments, lead
        availability or volume, enrollments, sales, commissions, revenue,
        income, team growth, or any other result. Business outcomes depend on
        many factors outside our control, including individual activity,
        experience, market conditions, client decisions, carrier action,
        regulation, and program availability.
      </p>
      <h2>4. Independent judgment and professional conduct</h2>
      <p>
        Website content, tools, examples, and conversations are general
        business information and are not legal, tax, accounting, or
        individualized compliance advice. Insurance professionals remain
        responsible for their own recommendations, representations,
        advertising, recordkeeping, and compliance.
      </p>
      <h2>5. Communications</h2>
      <p>
        When you request contact, you authorize us to respond using the
        information provided. Marketing calls or texts require the separate
        consent described at the point of collection. Consent to marketing is
        not a condition of joining, and you may opt out as described in the
        message or our Privacy Policy.
      </p>
      <h2>6. Acceptable use</h2>
      <p>
        You may not misuse the site, interfere with its operation, attempt
        unauthorized access, introduce malicious code, collect information
        about others without permission, impersonate another person, or use
        site content in a misleading or unlawful way.
      </p>
      <h2>7. Intellectual property</h2>
      <p>
        The site design, copy, graphics, trademarks, and other content are
        owned by or licensed to Medigard Compliance Systems LLC and are
        protected by applicable law. You may view the site for personal,
        noncommercial evaluation of the opportunity. No other license is
        granted.
      </p>
      <h2>8. Third-party services</h2>
      <p>
        The site may use or link to third-party services. Their terms and
        privacy practices govern your use of those services. A link does not
        imply endorsement of every statement, product, or practice on an
        external site.
      </p>
      <h2>9. Disclaimers and limitation of liability</h2>
      <p>
        The site is provided “as is” and “as available” to the fullest extent
        permitted by law. We disclaim implied warranties of merchantability,
        fitness for a particular purpose, and non-infringement. To the fullest
        extent permitted by law, we will not be liable for indirect,
        incidental, special, consequential, exemplary, or punitive damages
        arising from site use.
      </p>
      <h2>10. Changes and severability</h2>
      <p>
        We may update these Terms. Continued site use after an update means you
        accept the revised Terms. If any provision is found unenforceable, the
        remaining provisions remain in effect.
      </p>
      <h2>11. Contact</h2>
      <p>
        Questions about these Terms may be sent to{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>
    </div>
  );
}
