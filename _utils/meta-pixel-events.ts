// Parameters attached to Meta Pixel conversion events.
//
// `value` here is a RELATIVE WEIGHT expressing how much each conversion is worth
// to us, not a real rand amount:
//   1500 — landing page forms (highest intent: read the pitch, then enquired)
//   1000 — general homepage enquiry
//    750 — clicked through to WhatsApp (opens a real conversation)
//    500 — revealed a phone number or email address (may never make contact)
//
// Meta only uses these to rank conversions against each other, so what matters
// is the ratios, not the absolute figures. Keep the ordering intact when
// editing: a contact reveal must never outrank a submitted form.
//
// Because these are weights, the ROAS column in Ads Manager is directional only
// and should not be read as literal revenue. Swap in real figures (average deal
// value × close rate per lead type) if you ever want true ROAS reporting.
//
// `currency` is required regardless — Meta silently discards `value` when it is
// missing — so it is the unit these weights are denominated in, nothing more.

const CURRENCY = "ZAR";

interface MetaPixelEventParams {
  value: number;
  currency: string;
  content_name: string;
  content_category: string;
}

export const META_PIXEL_EVENTS = {
  generalEnquiry: {
    value: 1000,
    currency: CURRENCY,
    content_name: "General Enquiry",
    content_category: "Contact Form",
  },
  dataCaptureAssessment: {
    value: 1500,
    currency: CURRENCY,
    content_name: "Loyalty & Data Capture Assessment",
    content_category: "Landing Page Form",
  },
  performanceCheck: {
    value: 1500,
    currency: CURRENCY,
    content_name: "Website Performance Check",
    content_category: "Landing Page Form",
  },
  phoneReveal: {
    value: 500,
    currency: CURRENCY,
    content_name: "Phone Number Reveal",
    content_category: "Contact Detail Reveal",
  },
  emailReveal: {
    value: 500,
    currency: CURRENCY,
    content_name: "Email Address Reveal",
    content_category: "Contact Detail Reveal",
  },
  whatsAppClick: {
    value: 750,
    currency: CURRENCY,
    content_name: "WhatsApp Click",
    content_category: "Contact Detail Reveal",
  },
} as const satisfies Record<string, MetaPixelEventParams>;

export const trackMetaEvent = (
  eventName: "Lead" | "Contact",
  params: MetaPixelEventParams,
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};
