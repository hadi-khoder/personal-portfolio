import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/portfolio";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono", display: "swap" });
const productionUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl || "http://localhost:3000"),
  title: "Hadi Khoder | Software Engineer",
  description: "Hadi Khoder is a software engineer, full-stack developer, and software development team leader based in Lebanon.",
  authors: [{ name: profile.name }],
  alternates: productionUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "profile",
    title: "Hadi Khoder | Software Engineer",
    description: profile.summary,
    firstName: "Hadi",
    lastName: "Khoder",
    locale: "en_US",
    siteName: "Hadi Khoder Portfolio",
  },
  twitter: { card: "summary_large_image", title: "Hadi Khoder | Software Engineer", description: profile.summary },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceMono.variable}`}>
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person", name: profile.name,
        jobTitle: "Software Engineer", description: profile.summary,
        address: { "@type": "PostalAddress", addressCountry: "LB" },
        sameAs: [profile.github, profile.linkedin],
        ...(productionUrl ? { url: productionUrl } : {}),
      }).replace(/</g, "\\u003c") }} />{children}</body>
    </html>
  );
}
