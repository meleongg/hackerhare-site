export const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/edfmhlohdnoohbdojdhnlkomjgpiejlh?utm_source=item-share-cb";

export const EXTENSION_URL =
  process.env.NEXT_PUBLIC_EXTENSION_URL?.trim() || CHROME_STORE_URL;

export const HAS_EXTENSION_URL = EXTENSION_URL !== "#";

export const CTA_CHROME_STORE = "Add to Chrome";
export const CTA_HEADER = "Add to Chrome";

export const SITE_DESCRIPTION =
  "Your galactic field operative for web privacy, blocking trackers, identifying deceptive forms, and safeguarding your digital footprint before you hit submit.";

export const TAGLINE = "Committed to protecting you with just a few clicks.";

export const GITHUB_REPO_URL =
  process.env.NEXT_PUBLIC_GITHUB_REPO_URL?.trim() ||
  "https://github.com/meleongg/hackerhare-site";

export const EXTENSION_GITHUB_REPO_URL =
  process.env.NEXT_PUBLIC_EXTENSION_GITHUB_REPO_URL?.trim() ||
  "https://github.com/meleongg/hackerhare-extension";

export const METRICS_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://hackerhare.vercel.app";

export const LEGAL_LAST_UPDATED = "June 3, 2026";

export const PROBLEMS = [
  {
    label: "MISSION 01",
    title: "Accidental over-sharing",
    description:
      "Stop blindly autofilling sensitive data—SSNs, phone numbers, birthdates—into sketchy or unencrypted forms.",
  },
  {
    label: "MISSION 02",
    title: "Dark patterns & deceptive UI",
    description:
      "Spot forms designed to trick you into marketing emails or hidden subscriptions before you opt in.",
  },
  {
    label: "MISSION 03",
    title: "Phishing & lookalike domains",
    description:
      "Catch subtle domain spoofing that tries to steal your credentials in plain sight.",
  },
  {
    label: "MISSION 04",
    title: "Credential exposure",
    description:
      "Block password submissions over unencrypted HTTP forms before they leave your machine.",
  },
] as const;

export const VALUE_PROPOSITION =
  "HackerHare transforms passive browsing into a secure, monitored mission, making it easier for everyday users to protect personal data without a cybersecurity degree.";
