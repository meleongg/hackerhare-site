import type { Metadata } from "next";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Service | HackerHare",
  description:
    "Terms for using the HackerHare browser extension: local security utility, as-is warranty, and user control.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      intro={
        <>
          By installing and using the HackerHare browser extension, you agree to
          the following terms:
        </>
      }
    >
      <LegalSection title="1. Description of Service">
        <p>
          HackerHare is a browser utility that runs on your device to help users
          identify potential security vulnerabilities on the web, such as
          unencrypted credential forms (HTTP) and potentially deceptive input
          fields. It may optionally report anonymous aggregate block counts as
          described in our Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection title='2. No Warranty / "As-Is" Software'>
        <p>
          HackerHare is provided as an open-source security tool on an
          &quot;as-is&quot; and &quot;as-available&quot; basis. While our
          heuristic engine attempts to flag risky forms, we do not guarantee
          100% detection of all phishing or malicious web practices, nor do we
          guarantee that flagged elements are definitively malicious (false
          positives may occur). Use this utility at your own discretion.
        </p>
      </LegalSection>

      <LegalSection title="3. Local Control">
        <p>
          Users maintain absolute control over the extension. Features can be
          fully or partially toggled off at any time using the extension&apos;s
          popup dashboard interface.
        </p>
      </LegalSection>

      <LegalSection title="4. Modifications to Terms">
        <p>
          We reserve the right to update these terms at any time. Continued use
          of the extension constitutes acceptance of the modified terms.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
