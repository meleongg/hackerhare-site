import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Service | HackerHare",
  description:
    "Terms for using the HackerHare browser extension: on-device security checks, optional anonymous telemetry, and user control.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      intro={
        <>
          By installing and using the HackerHare browser extension, you agree to
          the following terms. Our{" "}
          <Link
            href="/privacy"
            className="text-rocket-orange font-medium underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          describes how data is handled on your device and on our servers.
        </>
      }
    >
      <LegalSection title="1. Description of Service">
        <p>
          HackerHare is a browser utility that runs on your device to help users
          identify potential security vulnerabilities on the web, such as
          unencrypted credential forms (HTTP), deceptive form UI, and
          hostname-based phishing signals. Security checks run locally in your
          browser; optional anonymous global counter telemetry (a tally of
          heuristic flags, not confirmed attacks) is described in our Privacy
          Policy and is off by default.
        </p>
      </LegalSection>

      <LegalSection title='2. No Warranty / "As-Is" Software'>
        <p>
          HackerHare is provided as an open-source security tool on an
          &quot;as-is&quot; and &quot;as-available&quot; basis. While our
          heuristic engine attempts to flag risky forms and pages, we do not
          guarantee 100% detection of all phishing or malicious web practices,
          nor do we guarantee that flagged elements are definitively malicious
          (false positives may occur—for example, hostname heuristics on
          well-known sites such as Shopify or Spotify). Alerts and the optional
          public global counter reflect heuristic checks, not confirmed threats.
          Use this utility at your own discretion.
        </p>
      </LegalSection>

      <LegalSection title="3. Your control">
        <p>
          You control the extension at all times. Form Shielding and related
          alert toggles can be enabled or disabled in the popup. The Anonymous
          global counter is optional and off by default; you may enable or
          disable it at any time without affecting local protection features.
        </p>
      </LegalSection>

      <LegalSection title="4. Modifications to Terms">
        <p>
          We reserve the right to update these terms at any time. We will post
          the revised version on this page and update the &quot;Last
          updated&quot; date. Continued use of the extension constitutes
          acceptance of the modified terms.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
