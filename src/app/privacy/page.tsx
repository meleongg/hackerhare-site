import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { GITHUB_REPO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | HackerHare",
  description:
    "How HackerHare handles data: on-device heuristics, no collection of form or browsing content, and optional anonymous global telemetry.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro={
        <>
          HackerHare (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
          committed to protecting your digital privacy. This Privacy Policy
          outlines how our browser extension processes data.
        </>
      }
    >
      <LegalSection title="1. On-Device Heuristics & Personal Data">
        <p>
          HackerHare is built with a privacy-first model: security checks run in
          your browser, and we do not receive the content of your browsing or
          forms.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Webpage form scanning, insecure protocol checks, and deceptive UI
            analyses run locally on your device inside the extension.
          </li>
          <li>
            We do not read, log, collect, or store your passwords, form inputs,
            personal identification numbers (such as SSNs), or browsing history
            on our servers.
          </li>
          <li>
            The only network request from the extension is the optional,
            anonymous counter ping described in Section 2—not your page URLs,
            field values, or threat context.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Anonymous Global Telemetry">
        <p>
          To track the real-world impact of our extension, HackerHare
          communicates with our server via an entirely anonymous telemetry
          endpoint.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            When a local security heuristic is triggered and blocked on your
            machine, the extension sends a blank, stateless network ping to
            increment a public global threat counter.
          </li>
          <li>
            This ping contains no user identifiers, no IP logging tracking, no
            session cookies, and no payload data (such as the URL or context of
            the threat). It is purely a raw metric counter (+1) used to display
            collective community statistics.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Data Sharing and Third Parties">
        <p>
          We do not collect personal browsing or form content, and we do not
          sell, trade, or share that information with third-party entities,
          advertisers, or analytics firms. Anonymous aggregate telemetry (a
          single +1 per blocked heuristic) is used only for the public community
          counter on this site.
        </p>
      </LegalSection>

      <LegalSection title="4. Contact">
        <p>
          For questions regarding this policy, contact us through our{" "}
          <Link
            href={GITHUB_REPO_URL}
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
