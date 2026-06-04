import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { EXTENSION_GITHUB_REPO_URL, METRICS_SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | HackerHare",
  description:
    "How HackerHare processes data on your device, optional anonymous global counter telemetry, and your privacy choices.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro={
        <>
          HackerHare (&quot;we,&quot; &quot;our,&quot; or &quot;the
          extension&quot;) is a browser security extension. This policy
          describes what information is processed on your device, what (if
          anything) is sent to our servers, and your choices.
        </>
      }
    >
      <LegalSection title="1. On-device security checks">
        <p>
          HackerHare is built with a privacy-first model: security checks run in
          your browser. We do not receive the content of your browsing or what
          you type into forms.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Webpage form scanning, insecure-protocol checks, deceptive UI
            analysis, and hostname-based phishing checks run locally on your
            device inside the extension.
          </li>
          <li>
            We analyze page structure (for example, forms, checkbox labels, and
            the current page hostname) only to provide these protections. We do
            not read, collect, or transmit your passwords, form field values,
            personal identification numbers (such as SSNs), or other information
            you enter into fields.
          </li>
          <li>
            We do not collect, store, or transmit a history of sites you visit.
            The current page is used in memory for checks on that page only.
          </li>
          <li>
            Protection features work without sending page URLs, field values, or
            threat details to our servers.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Local storage on your device">
        <p>
          The extension uses Chrome extension storage on your device to save:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Your protection settings (such as Form Shielding and alert toggles),
          </li>
          <li>Your local Threats Intercepted count shown in the popup, and</li>
          <li>
            Whether you have enabled Anonymous global counter (see Section 3).
          </li>
        </ul>
        <p>
          This information stays on your device and is not uploaded to our
          servers as part of normal protection features.
        </p>
      </LegalSection>

      <LegalSection title="3. Anonymous global counter (optional)">
        <p>
          To show collective community impact, HackerHare can send an optional,
          anonymous signal to our server.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Off by default.</strong> You must turn on Anonymous global
            counter in the extension popup to enable this. You can turn it off
            at any time.
          </li>
          <li>
            When a local security check identifies a threat on your device, the
            extension may send a blank, stateless POST request to our metrics
            endpoint at{" "}
            <Link
              href={`${METRICS_SITE_URL}/api/metrics/increment`}
              className="text-rocket-orange font-medium underline-offset-2 hover:underline"
            >
              {METRICS_SITE_URL}
            </Link>{" "}
            to increment a public global counter.
          </li>
          <li>
            This request contains no request body and no page URLs, threat
            context, form content, user identifiers, or account information. It
            is used only to add +1 to an aggregate total, not to track you
            individually.
          </li>
          <li>
            We do not use this ping to build user profiles or to store your
            browsing history. Our counter is a single community statistic, not a
            per-user log.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. What we do not do">
        <ul className="list-disc space-y-2 pl-5">
          <li>We do not sell personal information.</li>
          <li>
            We do not share browsing or form content with advertisers, data
            brokers, or analytics firms.
          </li>
          <li>
            We do not use remote code: all extension logic is packaged in the
            extension at install time.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Hosting and service providers">
        <p>
          Anonymous global counter requests are processed by servers we operate
          (hosted infrastructure). Those requests are limited to the blind
          counter ping described in Section 3. We do not share aggregate counter
          data with advertisers or data brokers.
        </p>
      </LegalSection>

      <LegalSection title="6. Data sharing and third parties">
        <p>
          We do not collect personal browsing or form content on our servers,
          and we do not sell or trade that information. The only server
          communication from the extension is the optional anonymous counter
          ping in Section 3, used solely for the public community total.
        </p>
      </LegalSection>

      <LegalSection title="7. Your choices">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Protection settings:</strong> Control Form Shielding and
            related alerts in the extension popup.
          </li>
          <li>
            <strong>Anonymous global counter:</strong> Enable or disable at any
            time in the popup. When disabled, no counter pings are sent; your
            local Threats Intercepted count still works on your device.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Changes to this policy">
        <p>
          We may update this policy from time to time. We will post the revised
          version on this page and update the &quot;Last updated&quot; date
          above.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          For questions about this policy, contact us through our{" "}
          <Link
            href={EXTENSION_GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rocket-orange font-medium underline-offset-2 hover:underline"
          >
            official project repository
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
