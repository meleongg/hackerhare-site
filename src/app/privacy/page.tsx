import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { GITHUB_REPO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | HackerHare",
  description:
    "How HackerHare handles data: local heuristics, zero-knowledge architecture, and anonymous global telemetry.",
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
      <LegalSection title="1. 100% Local Heuristics & Zero-Knowledge Architecture">
        <p>
          HackerHare is built from the ground up on a strict zero-knowledge
          model.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            All webpage form scanning, insecure protocol checks, and deceptive
            UI analyses are executed completely offline, locally on your
            machine.
          </li>
          <li>
            We do not read, log, collect, or store your passwords, form inputs,
            personal identification numbers (such as SSNs), or browsing history.
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
          Because we do not collect your personal data, we do not sell, trade,
          or share your information with any third-party entities, advertisers,
          or analytics firms.
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
