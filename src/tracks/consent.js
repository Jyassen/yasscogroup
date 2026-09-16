import { LEGAL_BUSINESS_NAME } from "../smsConsentCopy";
import { YASSCO_AGENCY } from "../growth/agentTracks";

export const YASSCO_EMAIL_MARKETING_CONSENT_LABEL = `I agree to receive marketing emails from ${LEGAL_BUSINESS_NAME} (d/b/a ${YASSCO_AGENCY.brand}). I can unsubscribe at any time.`;

export const YASSCO_SMS_MARKETING_CONSENT_LABEL = `I consent to receive marketing text messages from ${LEGAL_BUSINESS_NAME} DBA ${YASSCO_AGENCY.brand} at the phone number provided. Message frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.`;

export const YASSCO_SMS_NON_MARKETING_CONSENT_LABEL = `I consent to receive non-marketing text messages from ${LEGAL_BUSINESS_NAME} DBA ${YASSCO_AGENCY.brand} about appointments, orders, account updates. Message frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.`;
