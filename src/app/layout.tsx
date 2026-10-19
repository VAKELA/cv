import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vicente Akel — Software Engineer",
  description:
    "Building software at the intersection of fintech, distributed systems and applied AI. Currently at Xepelin.",
  authors: [{ name: "Vicente Akel" }],
  openGraph: {
    title: "Vicente Akel — Software Engineer",
    description:
      "Full Stack · AI Systems · Distributed Architecture. Currently at Xepelin.",
    type: "website",
    locale: "en_US",
    siteName: "Vicente Akel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicente Akel — Software Engineer",
    description:
      "Full Stack · AI Systems · Distributed Architecture. Currently at Xepelin.",
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
      className={`${geist.variable} ${geistMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>{children}</body>
    </html>
  );
}