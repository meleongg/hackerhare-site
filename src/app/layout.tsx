import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono, Syncopate } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { SITE_DESCRIPTION } from "@/lib/constants";

import "./globals.css";

const syncopate = Syncopate({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-syncopate",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "HackerHare",
  description: SITE_DESCRIPTION,
  appleWebApp: {
    title: "HackerHare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syncopate.variable} ${plusJakarta.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
