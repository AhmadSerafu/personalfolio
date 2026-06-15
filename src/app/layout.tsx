import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personalfolio",
  description:
    "Backend-focused full-stack developer. Hacktiv8 Honors graduate. Building web apps with Node.js, Express, PostgreSQL, and Next.js.",
  openGraph: {
    title: "Personalfolio",
    description:
      "Backend-focused full-stack developer. Hacktiv8 Honors graduate. Building web apps with Node.js, Express, PostgreSQL, and Next.js.",
    url: "https://ahmadluthfihanif.dev",
    siteName: "Personalfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Personalfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personalfolio",
    description:
      "Backend-focused full-stack developer. Hacktiv8 Honors graduate.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
