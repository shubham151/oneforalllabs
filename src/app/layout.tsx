import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "One For All Labs — Zero-Build Micro-Tools",
  description: "The ultimate ecosystem of single-purpose micro-tools for developers. No installs, no accounts, no telemetry — just pure speed.",
  keywords: "developer tools, offline tools, json formatter, jwt decoder, cron builder, webhook catcher",
  openGraph: {
    title: "One For All Labs — Zero-Build Micro-Tools",
    description: "The ultimate ecosystem of single-purpose micro-tools for developers. No installs, no accounts, no telemetry — just pure speed.",
    url: "https://oneforalllabs.com",
    siteName: "One For All Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One For All Labs — Zero-Build Micro-Tools",
    description: "The ultimate ecosystem of single-purpose micro-tools for developers.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
