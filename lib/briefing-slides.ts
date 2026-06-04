import type { StaticImageData } from "next/image";

import darkUiSmall from "@/app/assets/marketing/hackerhare-dark-ui-small.png";
import demoSmall from "@/app/assets/marketing/hackerhare-demo-small.png";
import fakeSiteSmall from "@/app/assets/marketing/hackerhare-fake-site-small.png";
import httpSmall from "@/app/assets/marketing/hackerhare-http-small.png";
import submissionSmall from "@/app/assets/marketing/hackerhare-submission-small.png";
import { PROBLEMS } from "@/lib/constants";

export type BriefingSlide = {
  id: string;
  src: StaticImageData;
  alt: string;
  caption: string;
};

/** Slide 1: overview. Slides 2–5: MISSION 01 → 04 (matches FeaturesSection). */
export const BRIEFING_SLIDES: BriefingSlide[] = [
  {
    id: "agent-overview",
    src: demoSmall,
    alt: "HackerHare extension popup and per-site protection toggles",
    caption: "Agent briefing & field controls",
  },
  {
    id: "mission-01",
    src: submissionSmall,
    alt: `HackerHare intercepting sensitive autofill on a risky form — ${PROBLEMS[0].title}`,
    caption: `${PROBLEMS[0].label}: ${PROBLEMS[0].title}`,
  },
  {
    id: "mission-02",
    src: darkUiSmall,
    alt: `HackerHare extension dashboard with protection toggles — ${PROBLEMS[1].title}`,
    caption: `${PROBLEMS[1].label}: ${PROBLEMS[1].title}`,
  },
  {
    id: "mission-03",
    src: fakeSiteSmall,
    alt: `HackerHare catching a lookalike phishing domain — ${PROBLEMS[2].title}`,
    caption: `${PROBLEMS[2].label}: ${PROBLEMS[2].title}`,
  },
  {
    id: "mission-04",
    src: httpSmall,
    alt: `HackerHare blocking credential submission over HTTP — ${PROBLEMS[3].title}`,
    caption: `${PROBLEMS[3].label}: ${PROBLEMS[3].title}`,
  },
];
