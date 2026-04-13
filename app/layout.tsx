import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const title = "Bitlyra | From Idea to Scalable Product";
const description =
  "Bitlyra designs and builds modern web, mobile, and cloud software—focused on performance, maintainability, and measurable business impact.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Bitlyra",
  },
  description,
  keywords: [
    "Bitlyra",
    "software development",
    "web development",
    "mobile apps",
    "cloud solutions",
    "React",
    "Next.js",
    "TypeScript",
    "product engineering",
  ],
  authors: [{ name: "Bitlyra" }],
  creator: "Bitlyra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Bitlyra",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bitlyra",
      url: siteUrl,
      email: "celioalmeida@bitlyra.com",
      sameAs: ["https://www.linkedin.com/company/bitlyra/"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Bitlyra",
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-surface-light font-sans text-zinc-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
